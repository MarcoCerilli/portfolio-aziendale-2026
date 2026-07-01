import Link from "next/link";
import { 
  Squares2X2Icon, 
  DocumentTextIcon, 
  UserCircleIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <Link href="/" className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            M Solutions <span className="text-indigo-600">Web</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl font-bold transition-colors">
            <Squares2X2Icon className="w-5 h-5" />
            I Miei Ordini
          </Link>
          <Link href="/dashboard/profile" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <UserCircleIcon className="w-5 h-5" />
            Profilo
          </Link>
          <Link href="/dashboard/invoices" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <DocumentTextIcon className="w-5 h-5" />
            Fatture
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-bold transition-colors">
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            Esci
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2">
              I Miei Ordini
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Gestisci e monitora lo stato dei tuoi progetti
            </p>
          </div>
          
          <Link href="/#pacchetti" className="hidden md:flex bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-indigo-500/30">
            Nuovo Ordine
          </Link>
        </header>

        {/* Esempio di un ordine (Mock) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  In Lavorazione
                </span>
                <span className="text-sm font-medium text-slate-400">Ordine #MSW-2026-001</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">Mini Sito Express</h2>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-slate-500 font-medium mb-1">Data acquisto</p>
              <p className="font-bold text-slate-900 dark:text-white">1 Luglio 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Prossimo Step</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Stiamo configurando il tuo server. Riceverai un&apos;email per inviarci i testi del sito entro 24 ore.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">I tuoi Referenti</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Developer: <strong>Marco Cerilli</strong><br/>
                Supporto: <strong>cerillimarco15@gmail.com</strong>
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-center text-center">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Totale</p>
              <p className="text-3xl font-black text-indigo-600 dark:text-indigo-400">299€</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
