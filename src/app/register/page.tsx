import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors">
        <ArrowLeftIcon className="w-5 h-5" />
        <span className="font-bold">Torna al Sito</span>
      </Link>
      
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-slate-800">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Crea Account</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-2">
            Inizia il tuo percorso digitale con noi
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-2">Nome e Cognome</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white"
              placeholder="Mario Rossi"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-900 dark:text-white"
              placeholder="Crea una password sicura"
            />
          </div>

          <button 
            type="button" 
            className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest text-sm transition-colors shadow-lg shadow-indigo-500/30"
          >
            Registrati Ora
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Hai già un account? <Link href="/login" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Accedi</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
