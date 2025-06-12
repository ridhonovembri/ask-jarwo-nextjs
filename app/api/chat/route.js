import { groq } from "@ai-sdk/groq";
import { streamText } from "ai";

export async function POST(req) {
  const { messages } = await req.json();

  // console.log('messages', messages)

  const result = await streamText({
    model: groq("meta-llama/llama-4-maverick-17b-128e-instruct"),
    messages,
    temperature: 1,
    max_completion_tokens: 1024,
    top_p: 1,
    stream: true,
  });

  // console.log("reply ==> ", result);

  //   res.json({ response: text });

  return result.toDataStreamResponse();
}
