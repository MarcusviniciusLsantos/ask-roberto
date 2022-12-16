import { ChatGPTAPI, getOpenAIAuth } from "chatgpt";

export default async function (req, res) {
  console.log("aqui ---------------<>", req.body.animal);
  const openAIAuth = await getOpenAIAuth({
    email: process.env.OPENAI_EMAIL,
    password: process.env.OPENAI_PASSWORD,
  });

  const api = new ChatGPTAPI({ ...openAIAuth, markdown: false });
  await api.ensureAuth();

  // send a message and wait for the response
  const response = await api.sendMessage(
    "Write a python version of bubble sort."
  );

  // response is a markdown-formatted string
  console.log(response);

  res.status(200).json("ok");
}
