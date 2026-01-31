
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function diagnoseIssue(userDescription: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userDescription,
      config: {
        systemInstruction: `You are an expert property maintenance assistant for "Abandance Property Maintenance". 
        A user is describing a household or property issue. 
        Your goal is to:
        1. Briefly explain what might be the cause.
        2. Categorize the issue (e.g., Plumbing, Electrical, General Maintenance).
        3. Give a friendly recommendation to contact Abandance Property Maintenance for a professional fix.
        4. Provide 2-3 safety tips if applicable (e.g., turn off water/electricity).
        Keep it professional, helpful, and concise (under 200 words).`,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Diagnosis Error:", error);
    return "I'm having trouble analyzing the issue right now. Please call us directly at 071 169 1676 for immediate assistance!";
  }
}
