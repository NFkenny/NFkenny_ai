import { useEffect, useState } from "react";
import { useTitle } from "@/hooks/useTitle";
import { chat, kimiChat } from "@/llm";
import styles from "./trip.module.css";
import { Button, Input, Loading, Toast } from "react-vant";
import { ChatO, UserO } from "@react-vant/icons";

const Trip = () => {
  useTitle("智能旅游客服");

  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  // 数据驱动界面
  const [messages, setMessages] = useState([
    {
      id: 2,
      role: "user",
      content: "你好",
    },
    {
      id: 1,
      content: "你好我是你的专属客服",
      role: "assistant",
    },
    {
      id: 2,
      role: "user",
      content: "你好",
    },
    {
      id: 1,
      content: "你好我是你的专属客服",
      role: "assistant",
    },
    {
      id: 2,
      role: "user",
      content: "你好",
    },
    {
      id: 1,
      content: "你好我是你的专属客服",
      role: "assistant",
    },
    {
      id: 2,
      role: "user",
      content: "你好",
    },
    {
      id: 1,
      content: "你好我是你的专属客服",
      role: "assistant",
    },
    {
      id: 2,
      role: "user",
      content: "你好",
    },
    {
      id: 1,
      content: "你好我是你的专属客服",
      role: "assistant",
    },
  ]);

  const handleChat = async () => {
    if (text.trim() === "") {
      Toast.info({
        message: "内容不能为空",
      });
      return;
    }
    setIsSending(true);
    // 添加用户消息到消息列表
    const userMessage = {
      id: Date.now(), // 使用时间戳确保id唯一性
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setText("");
    // 添加AI消息到消息列表
    const newMessage = await kimiChat([
      {
        role: "user",
        content: text,
      },
    ]);
    console.log(newMessage);
    setMessages((prev) => {
      return [...prev, newMessage.data];
    });
    setIsSending(false);
  };

  return (
    <div className="flex flex-col h-all">
      <div className={`flex-1 ${styles.chatArea}`}>
        {
          /* 消息区域 */
          messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.role === "user" ? styles.messageRight : styles.messageLeft
              }
            >
              {msg.role === "assistant" ? <ChatO /> : <UserO />}
              {msg.content}
            </div>
          ))
        }
      </div>
      <div className={styles.inputArea}>
        <Input
          value={text}
          type="text"
          onChange={(value) => setText(value)}
          placeholder="请输入"
          className={`flex-1 ${styles.input}`}
        />
        <Button
          type="primary"
          onClick={handleChat}
          disabled={isSending || !text}
        >
          发送
        </Button>
      </div>
      {isSending && (
        <div className="fixed-loading">
          <Loading type="ball" size="24px">
            请稍后
          </Loading>
        </div>
      )}
    </div>
  );
};
export default Trip;
