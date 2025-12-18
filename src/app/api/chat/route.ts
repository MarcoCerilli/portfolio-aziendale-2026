import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) return NextResponse.json({ text: "API Key mancante." });

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // Modello potentissimo e gratis
        messages: [
          {
            role: "system",
            content: "Sei l'assistente di M Solutions. Rispondi in italiano, max 2 frasi, professionale. Spingi su WhatsApp +39 380 429 1043."
          },
          ...(history || []).map((h: any) => ({
            role: h.role === "model" ? "assistant" : "user",
            content: h.parts[0].text
          })),
          { role: "user", content: message }
        ],
        max_tokens: 150
      }),
    });

    const data = await response.json();
    
    if (data.error) throw new Error(data.error.message);

    return NextResponse.json({ text: data.choices[0].message.content });

  } catch (error: any) {
    console.error("Errore Groq:", error.message);
    return NextResponse.json({ 
      text: "Servizio momentaneamente occupato. Scrivimi su WhatsApp: +39 380 429 1043" 
    });
  }
}