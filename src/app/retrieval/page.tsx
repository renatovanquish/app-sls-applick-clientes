import { ChatWindow } from "components/chat/ChatWindow";

export default function AgentsPage() {
  return (
    <ChatWindow
      endpoint="/api/chat/retrieval"
      showIngestForm={false}
      placeholder="Como posso ajudar?"
    ></ChatWindow>
  );
}
