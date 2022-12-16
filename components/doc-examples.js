import DocIcon from "../assets/icons/docIcon";
import Card from "./card";

export default function DocExamples() {
  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="d-flex flex-column m-4">
        <div className="d-flex justify-content-center">
          <DocIcon />
        </div>
        <h5 className="d-flex justify-content-center my-3">Examples</h5>
        <div>
          <Card
            name={
              '"Propose a hackathon idea for web3 project and list 5 objectives"'
            }
          />
          <Card
            name={
              '"Create a hackathon idea for german companies in moldova find german students"'
            }
          />
          <Card
            name={
              '"Propose a hackathon idea for web3 project and list 5 objectives"'
            }
          />
        </div>
      </div>
      <div className="d-flex flex-column m-4">
        <div className="d-flex justify-content-center">
          <DocIcon />
        </div>
        <h5 className="d-flex justify-content-center my-3">Capabilites</h5>
        <div>
          <Card
            name={
              "I can help you build your hackathon idea and give interesting suggestions"
            }
          />
          <Card
            name={
              "I can help you find insights on various topics mainly related to hackaton and web3"
            }
          />
          <Card
            name={
              "I can help you improve your bounty idea and suggest different topics"
            }
          />
        </div>
      </div>
    </div>
  );
}