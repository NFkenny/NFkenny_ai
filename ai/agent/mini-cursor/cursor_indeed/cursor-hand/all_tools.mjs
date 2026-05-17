// langchain tool 工具
import { tool } from "@langchain/core/tools";
import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { z } from "zod";
import { log } from "node:console";
import { resolve } from "node:dns";
import { describe } from "zod/v4/core";

// 读取文件工具
const readFileTool = tool(
  async ({ filePath }) => {
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      console.log(
        `[工具调用] read_file("${filePath}") 成功读取 ${fileContent.length} 字节`,
      );
      return fileContent;
    } catch (error) {
      console.log(`[工具调用] read_file("${filePath}") 失败: ${error.message}`);
      return `读取文件失败: ${error.message}，文件路径: "${filePath}"`;
    }
  },
  {
    name: "read_file",
    description: `用此工具读取文件内容，当用户需要读取文件内容、查看代码、分析文件内容时，调用此工具。
                  输入文件路径 (可以是相对路径或绝对路径)`,
    schema: z.object({ path: z.string().describe("要读取的文件路径") }),
  },
);

// 写入文件工具
const writeFileTool = tool(
  async ({ filePath, content }) => {
    try {
      // /a/b/c/1.txt   dir = /a/b/c
      const dir = path.dirname(filePath);
      // make directory 创建目录， recursive: true 递归创建
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(filePath, content, "utf-8");
      console.log(
        `[工具调用] write_file("${filePath}") 成功写入 ${content.length} 字节`,
      );
      return `文件写入成功: ${filePath}`;
    } catch (error) {
      console.log(
        `[工具调用] write_file("${filePath}") 写入失败: ${error.message}`,
      );
      return `文件写入失败: ${error.message}`;
    }
  },
  {
    name: "write_file",
    description: `向指定路径写入文件内容，自动创建目录`,
    schema: z.object({
      filePath: z.string().describe("文件路径"),
      content: z.string().describe("输入的文件内容"),
    }),
  },
);

// 执行命令工具

const executeCommandTool = tool(
  async ({ command, workingDirectory }) => {
    const cwd = workingDirectory || process.cwd(); // 默认当前工作目录
    console.log(
      `[工具调用] execute_command("${command}") 在目录 ${cwd} 执行命令`,
    );
    return new Promise((resolve, reject) => {
      const [cmd, ...args] = command.split(" ");
      const child = spawn(cmd, args, {
        cwd,
        stdio: "inherit",
        shell: true,
      });
      let errorMsg = "";
      child.on("error", (error) => {
        errorMsg = error.message;
      });
      child.on("close", (code) => {
        if (code === 0) {
          // 成功退出
          console.log(`[工具调用] execute_commnad("${command}") 命令执行成功`);
          const cwdInfo = workingDirectory
            ? `
            \n\n重要提示: 命令在目录"${workingDirectory}"中执行成功。
            如果需要在这个项目目录中继续执行命令, 请使用 workingDirectory
            "${workingDirectory}" 参数, 不要使用cd 命令
          `
            : ``;
          resolve(`命令执行成功: ${command} ${cwdInfo}`);
          process.exit(0);
        } else {
          if (errorMsg) {
            console.error(`执行命令失败: ${errorMsg}`);
          }
          process.exit(code || 1);
        }
    });
  });
  },
  {
    name: 'execute_command',
    description: '执行系统命令,支持指定工作目录，实时显示输出',
    schema: z.object({
      command: z.string().describe('要执行的命令'),
      workingDirectory: z.string().optional().describe('指定工作目录,默认当前工作目录')
    })
  }
);

export { 
  readFileTool, 
  writeFileTool,
  executeCommandTool,
  listDirectoryTool
};
