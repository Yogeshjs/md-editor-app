import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

const WS_URL = "ws://localhost:3001";

export function useEditor() {
  const [markdownText, setMarkdownText] = useState("");
  const [htmlText, setHtmlText] = useState("");

  const { sendMessage, lastMessage } = useWebSocket(WS_URL, {
    share: true,
  });

  useEffect(() => {
    if (lastMessage?.data) {
      const { htmlText, markdownText } = JSON.parse(lastMessage.data);
      setHtmlText(htmlText);
      setMarkdownText(markdownText);
    }
  }, [lastMessage]);

  const handleInputChange = (value: string) => {
    const newText = value;
    setMarkdownText(newText);
    sendMessage(newText);
  };

  return { htmlText, markdownText, handleInputChange };
}
