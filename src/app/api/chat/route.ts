import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GOOGLE_GENAI_API_KEY;

    // Usiamo il modello "Lite": è il più leggero e quello con le quote più generose nel piano free
    const model = "gemini-2.0-flash-lite"; 
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            // Prompt ridotto all'osso: meno token = meno probabilità di errore 429
            text: `Supporto M Solutions (Next.js/Shopify). Rispondi breve in italiano. WhatsApp: +393804291043. Utente: ${message}`,
          }],
        }],
      }),
    });

    const data = await response.json();

    // Gestione specifica per il limite di quota (429)
    if (response.status === 429) {
      return NextResponse.json({
        text: "Riceviamo molte richieste! Mandami un messaggio rapido su WhatsApp (+39 380 429 1043) e ti rispondo subito da lì.",
      });
    }

    if (!response.ok || data.error) {
      console.error("DEBUG:", data.error?.message);
      return NextResponse.json({ text: "Scrivimi su WhatsApp: +39 380 429 1043" });
    }

    return NextResponse.json({ text: data.candidates[0].content.parts[0].text });

  } catch (error) {
    return NextResponse.json({ text: "WhatsApp: +39 380 429 1043" });
  }
}