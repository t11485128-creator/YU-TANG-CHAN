import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to avoid immediate crash, handle errors gracefully in UI
const ai = new GoogleGenAI({ apiKey });

export const generateResponse = async (prompt: string, systemInstruction?: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure process.env.API_KEY.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `Error generating response: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
};