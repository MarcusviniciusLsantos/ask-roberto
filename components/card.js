import styles from "../pages/index.module.css";

export default function Card({ name, breakLine = false }) {
  return (
    <div className={styles.card}>
      {breakLine ? <div className="d-flex"><pre>{name}</pre></div> : <p>{name}</p>}
    </div>
  );
}
