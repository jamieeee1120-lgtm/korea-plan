
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function askTravelAssistant(question: string, context: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a professional travel assistant specialized in South Korea (Seoul and Busan). 
      Use the following travel itinerary context to help the user:
      ${context}
      
      User Question: ${question}`,
      config: {
        systemInstruction: "Keep answers concise, helpful, and in Traditional Chinese (Hong Kong/Taiwan style). Mention specific locations if relevant.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，我的大腦暫時離線了。請稍後再試。";
  }
}
