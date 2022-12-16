import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "../components/MainNav";
import ChatPage from "../components/chat-page";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ask Roberto</title>
        <link rel="icon" href="/roberto.png" />
      </Head>
      <main>
        <div style={{ width: "97vw" }}>
          <ChatPage />
        </div>
      </main>
    </div>
  );
}
