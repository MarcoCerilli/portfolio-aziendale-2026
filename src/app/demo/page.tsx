import { getDemoProducts } from '@/lib/vercel';
import DemoProjectCard from '@/components/DemoProjectCard';
import { FiCode, FiLayers, FiAlertCircle } from 'react-icons/fi';

export const metadata = {
  title: 'Prodotti Demo | WebDev Portfolio',
  description: 'Esplora i nostri progetti live e le demo dei prodotti disponibili.',
};

// Revalidate this page every hour
export const revalidate = 3600;

export default async function DemoPage() {
  const products = await getDemoProducts();

  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-16">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <FiLayers className="w-4 h-4" />
            <span>Catalogo Prodotti</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Esplora le nostre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Demo Live</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Scopri i nostri prodotti digitali pronti all&apos;uso. Ogni demo è generata automaticamente e rappresenta l&apos;ultima versione disponibile.
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <DemoProjectCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
              <FiCode className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Nessun progetto trovato</h3>
            <p className="text-slate-400 max-w-md">
              Aggiungi le variabili d&apos;ambiente <code className="bg-slate-900 px-1.5 py-0.5 rounded text-sm text-blue-300">DEMO_CATEGORY</code> ai tuoi progetti Vercel per farli apparire qui automaticamente.
            </p>
            
            <div className="mt-8 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-left w-full">
              <div className="flex items-center gap-2 text-blue-300 font-semibold mb-2">
                <FiAlertCircle /> Come aggiungere un progetto:
              </div>
              <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                <li>Vai sulla dashboard del progetto su Vercel</li>
                <li>Vai in <strong>Settings</strong> &gt; <strong>Environment Variables</strong></li>
                <li>Aggiungi <code>DEMO_CATEGORY</code> (es. &quot;E-commerce&quot;)</li>
                <li>Opzionale: <code>DEMO_PRICE</code> (es. &quot;499&quot;)</li>
                <li>Opzionale: <code>DEMO_FEATURES</code> (es. &quot;SEO, Stripe&quot;)</li>
                <li>Opzionale: <code>DEMO_IMAGE</code> (URL immagine di anteprima)</li>
              </ul>
            </div>
          </div>
        )}
        
      </div>
    </main>
  );
}
