import env from "../../ai.config";
import { GoogleGenAI } from "@google/genai";
const API_KEY  = env.modelCredentials.apiKey;


// Initialize the Gemini client
const client = new GoogleGenAI({ apiKey: API_KEY });

async function main() {
  const response = await client.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: "Why is the sky blue?",
  });
  console.log(response.text);
}

main();