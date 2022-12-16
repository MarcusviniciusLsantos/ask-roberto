import Avatar from "./avatar";
import Card from "./card";

export default function Chat({ text, reverse = false }) {
  return (
    <div className="d-flex flex-row justify-content-start">
      {reverse ? (
        <>
          <Card name={text} />
          <img src="https://img.pizza/34/34" width={34} height={34} style={{borderRadius: "16px"}} />
        </>
      ) : (
        <>
          <img src="/roberto.png" width={34} height={34} />
          <Card name={text} breakLine={true}/>
        </>
      )}
    </div>
  );
}
