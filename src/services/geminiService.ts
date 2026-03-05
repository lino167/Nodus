import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export const getGeminiAI = () => {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not defined");
  }
  return new GoogleGenAI({ apiKey });
};

export const analyzeFailure = async (failureDescription: string) => {
  const ai = getGeminiAI();
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the following industrial failure and suggest 3 immediate maintenance steps: ${failureDescription}`,
    config: {
      systemInstruction: "You are a senior industrial maintenance engineer. Provide concise, technical advice.",
    },
  });
  
  const response = await model;
  return response.text;
};
