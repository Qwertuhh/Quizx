import env from "../../../../ai.config";
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = env.modelCredentials.apiKey;
const client = new GoogleGenAI({ apiKey: API_KEY });

interface checkAnswerData {
  text: string;
  user_answer: string;
  type: "SHORT_ANSWER";
}

async function checkAnswer(checkAnswerData: checkAnswerData): Promise<boolean> {
  const response = await client.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `Generate a quiz with the following metadata: ${JSON.stringify(
      `Check if the user's answer is correct. User answer: ${checkAnswerData.user_answer} Question: ${checkAnswerData.text}`
    )}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          isCorrect: {
            type: Type.BOOLEAN,
          },
        },
      },
    },
  });

  const result: string = (await response.text)!;
  return JSON.parse(result).isCorrect as boolean; 
}

//* Exmaple
checkAnswer({
  text: "What is the capital of France?",
  user_answer: "Paris",
  type: "SHORT_ANSWER",
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error generating quiz:", error);
  });

checkAnswer({
  text: "What is the capital of France?",
  user_answer: "Berlin",
  type: "SHORT_ANSWER",
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error generating quiz:", error);
  });
