import env from "../../../../ai.config";
import { GoogleGenAI, Type } from "@google/genai";
import Question from "./structuredData";

const API_KEY = env.modelCredentials.apiKey;
const client = new GoogleGenAI({ apiKey: API_KEY });

interface quizMetadata {
  topics: string[];
  level: string;
  moreInfo?: string;
  questions: {
    mcqSingle: number;
    mcqMulti: number;
    trueFalse: number;
    shortAnswer: number;
    numerical: number;
  };
}

async function generateQuizByAI(quizMetadata: quizMetadata): Promise<unknown> {
  const response = await client.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `Generate a quiz with the following metadata: ${JSON.stringify(
      quizMetadata
    )}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          ...Question,
        },
      },
    },
  });

  const result = await response.text;
  return result;
}

//* Exmaple
generateQuizByAI({
  topics: ["Linear Algebra", "calculus"],
  level: "Olympiad",
  moreInfo: "This is a quiz of IMO level (hard as possible)",
  questions: {
    mcqSingle: 2,
    mcqMulti: 1,
    trueFalse: 0,
    shortAnswer: 0,
    numerical: 0,
  },
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error generating quiz:", error);
  });
