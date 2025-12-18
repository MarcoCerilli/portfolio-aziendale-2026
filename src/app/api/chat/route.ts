import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) return NextResponse.json({ text: "API Key mancante." });

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: `Sei l'assistente ufficiale di M Solutions IT. 
            PROFILO: Esperti in Next.js, Shopify e automazioni.

            LISTINO PREZZI AGGIORNATO:
            1. Starter Landing (150€ + tasse): Pagina singola Next.js, veloce e moderna.
            2. Business Suite (450€ + tasse): Sito da 5 pagine con assistente IA Groq incluso.
            3. E-commerce Pro (750€ + tasse): Negozio completo con caricamento iniziale di 10 prodotti.

            REGOLE:
            - Rispondi in massimo 2-3 frasi.
            - Specifica che i prezzi sono al netto di ritenuta (20%) e marca da bollo.
            - Sposta la conversazione su WhatsApp per dettagli: +39 380 429 1043.`,
            },
            ...(history || []).map((h: any) => ({
              role: h.role === "model" ? "assistant" : "user",
              content: h.parts?.[0]?.text || "",
            })),
            { role: "user", content: message },
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);

    return NextResponse.json({ text: data.choices[0].message.content });
  } catch (error: any) {
    console.error("Errore Groq:", error.message);
    return NextResponse.json({
      text: "Servizio momentaneamente occupato. Scrivimi su WhatsApp: +39 380 429 1043",
    });
  }
}
