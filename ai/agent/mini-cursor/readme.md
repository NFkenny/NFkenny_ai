# 手写cursor 最小版本

## 近期Agent 爆火产品
- 千问点奶茶
    互联网计算向Ai Agent 推理，运行的一个划时代的产品，更复杂，更智能，更强大。
- OpenClaw 养龙虾
    一人公司
    虚拟数字人，多Agent
    编程Agent(cursor) ppt  算账  市场
    任务拆解、计划，找到一批需要的Agent 完成任务。
    Manus
    开源版本的Manus
- seedance 抖音视频的数据

- 从 llm prompt engineering -> Agentci(智能) Engineering (全栈)

- Ai Agent 如何打造
    - 直接调用大模型? 获得智能，生成代码
        gemini 3.1 pro
    - 你上周和它聊过的消息，它是不是记不住？ (bug)  Memory
    - 你让它帮你访问一个网页， 做一些事情 -> Tool
    - 你想让它基于公司内部的私密文档做一些解答 RAG

    Ai Agent = llm + Memory + Tool + RAG

## Agent 是什么？
其实就是给大模型扩展了Tool和Memory, 它本来就可以思考, 规划, 你给他用toll 扩展了能力,
它可以**自动**做事情, 用memory 管理记忆, 他就可以记住你想它记住的东西,还可以使用RAG
查询内部知识来获取知识(context)

这样一个知道内部知识, 能思考规划, 有记忆, 能够帮你做事情的扩展后的大模型,就是一个Agent.

## Tool 工具

### 用 react 创建一个todoList
- 任务, 期待cursor 编程Agent 完成
- llm 思考(thinking), 规划(planing) AIGC 生成代码
- tool 让llm扩展 有读写文件的能力, 项目就生成了
- tool bash 执行命令

### LangChain
AI Agent 框架 提供了 memory tool rag
后端功底(node) nest.js

AI Agent 全栈开发

## LLM with Tools

- llm 选择
    qwen-coder
- tools
    [read, write, exec]
- pnpm i @langchain/openai 适配了常见模型
