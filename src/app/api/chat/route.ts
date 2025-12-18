import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Riceviamo message e history dal frontend
    const { message, history } = await req.json();
    const apiKey = process.env.GOOGLE_GENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ text: "Servizio non disponibile. WhatsApp: +39 380 429 1043" });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Usiamo il modello 2.5 Flash che abbiamo testato con successo
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.7,
      }
    });

    // Istruzioni di sistema per mantenere l'identità del bot
    const systemInstruction = `Sei l'assistente IA ufficiale di M Solutions (specialisti in Next.js e Shopify). 
    Il tuo obiettivo è aiutare i potenziali clienti. 
    Rispondi in italiano, in modo professionale, amichevole e molto breve. 
    Se ti chiedono prezzi, di' che variano in base al progetto e invita a contattare WhatsApp: +39 380 429 1043.`;

    // Avviamo la sessione di chat con la memoria
    const chat = model.startChat({
      history: history || [],
      systemInstruction: systemInstruction,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text: text });

  } catch (error: any) {
    console.error("Errore API Chat:", error.message);

    if (error.message?.includes("429")) {
      return NextResponse.json({
        text: "Riceviamo molte richieste! Per favore, scrivimi direttamente su WhatsApp (+39 380 429 1043).",
      });
    }

    return NextResponse.json({ 
      text: "C'è un problema tecnico momentaneo. Contattami su WhatsApp: +39 380 429 1043" 
    });
  }
}