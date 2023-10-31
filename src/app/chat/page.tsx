import { ChatWindow } from "components/chat/ChatWindow";

export default function Home() {
  return (
    <ChatWindow
      endpoint="/api/chat"
      placeholder="Como posso ajudar?"
    ></ChatWindow>
  );
}
