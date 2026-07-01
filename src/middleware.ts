import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Flag per attivare/disattivare la manutenzione rapidamente
  const isMaintenanceMode = true;

  if (!isMaintenanceMode) {
    return NextResponse.next();
  }

  // Permetti l'accesso alla pagina di manutenzione e alle risorse statiche
  if (
    request.nextUrl.pathname.startsWith('/maintenance') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.includes('.') // file statici come immagini
  ) {
    return NextResponse.next();
  }

  // Reindirizza tutte le altre richieste alla pagina di manutenzione
  // Usiamo redirect invece di rewrite per assicurarci che l'utente veda l'URL cambiato (opzionale)
  // o rewrite se vogliamo mantenere l'URL originale
  return NextResponse.rewrite(new URL('/maintenance', request.url));
}

export const config = {
  matcher: '/:path*',
}
