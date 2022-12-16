import styles from "../pages/index.module.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap";
import Avatar from "./avatar";
import DocExamples from "./doc-examples";
import Chat from "./chat";
import Link from "next/link";

export default function ChatPage() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true)
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    console.log("data", data);
    setResults([...results, text, data.result]);
    setText("");
    setLoading(false)
  }

  return (
    <Row>
      <Col xs="3" sm="3" md="3">
        {console.log('results', results)}
        <div className={styles.menu}>
          <div>
            <div className={styles.item}><Avatar name={"Roberto"} width={34} height={34} className="ms-3" title={false}/></div>
          </div>
          <div>
            <div className={styles.divisor} />
            <div className={styles.endItem} ><Link href="https://dindgeri.github.io/askroberto/">
              <a className="text-decoration-none" style={{color: "white"}}>
              <b>Back </b>
              </a>
            </Link></div>
          </div>
        </div>
      </Col>
      <Col xs="9" sm="9" md="9" className="d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-between ">
          <div className="d-flex justify-content-start">
            <Avatar name={"Ask Roberto"} loading={loading}/>
          </div>
          <div>
            {results && results?.length > 0 && results.map((item, key) => (
              <Chat key={key} text={item} reverse={key%2 > 0 ? false: true}/>
            ))}
            {results?.length === 0 && (
              <DocExamples />
            )}
          </div>

          <div className={styles.main}>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name=""
                placeholder=""
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
                <input type="submit" value="Send" disabled={loading}/>
            </form>
          </div>
        </div>
      </Col>
    </Row>
  );
}
