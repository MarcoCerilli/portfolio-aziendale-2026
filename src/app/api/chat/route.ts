import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ text: "Servizio non disponibile. WhatsApp: +39 380 429 1043" });
    }

    const systemInstruction = `Sei l'assistente IA ufficiale di Marco Cerilli (M Solutions), uno Sviluppatore Web freelance di base a Terracina e Latina, specializzato in Next.js, Vercel e Shopify.
    Il tuo compito è fornire informazioni chiare, cordiali e coincise. NON INVENTARE INFORMAZIONI (no allucinazioni).

    INFORMAZIONI UTILI:
    - Marco Cerilli realizza siti web performanti, eCommerce e Web App su misura.
    - Pacchetto Starter Landing: 120€ (Tasse escluse). Include Next.js 15, Mobile-First, WhatsApp Direct, Hosting.
    - Pacchetto Business Suite (Il più richiesto): 350€ (Tasse escluse). Include 5 pagine custom, AI Gemini Integrata, SEO Gold, Premium Dark UI.
    - Pacchetto Shopify Store: 450€ (Tasse escluse). E-commerce, Stripe & PayPal, Gestione Ordini, Post-lancio 30gg.
    - Tutte le tariffe si intendono Tasse escluse.

    REGOLE DI RISPOSTA:
    - Sii professionale ma amichevole.
    - Rispondi in italiano in modo breve (max 2-3 frasi).
    - Se l'utente vuole un preventivo personalizzato, consulenza o altre richieste complesse, invitalo calorosamente a contattare Marco su WhatsApp al numero: +39 380 429 1043.`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: systemInstruction
          },
          ...(history || []).map((h: any) => ({
            role: h.role === "model" ? "assistant" : "user",
            content: h.parts ? h.parts[0].text : h.content // Supporto retrocompatibile per frontend
          })),
          { role: "user", content: message }
        ],
        max_tokens: 150,
        temperature: 0.3 // Temperatura bassa per limitare le allucinazioni
      }),
    });

    const data = await response.json();
    
    if (data.error) throw new Error(data.error.message);

    return NextResponse.json({ text: data.choices[0].message.content });

  } catch (error: any) {
    console.error("Errore API Chat:", error.message);

    if (error.message?.includes("429")) {
      return NextResponse.json({
        text: "Riceviamo molte richieste! Per favore, scrivimi direttamente su WhatsApp (+39 380 429 1043).",
      });
    }

    return NextResponse.json({ 
      text: "Servizio momentaneamente occupato. Scrivimi su WhatsApp: +39 380 429 1043" 
    });
  }
}
