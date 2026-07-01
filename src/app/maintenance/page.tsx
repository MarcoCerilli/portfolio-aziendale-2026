import React from 'react';
import { CogIcon } from '@heroicons/react/24/outline';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-slate-200 dark:border-slate-800">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <CogIcon className="w-24 h-24 text-indigo-500 animate-[spin_4s_linear_infinite]" />
            <CogIcon className="w-12 h-12 text-indigo-300 dark:text-indigo-700 absolute bottom-0 right-0 animate-[spin_3s_linear_infinite_reverse]" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
          Sito in Manutenzione
        </h1>
        
        <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed">
          Stiamo apportando dei miglioramenti straordinari alla nostra piattaforma. 
          Torneremo online a brevissimo con grandi novità!
        </p>

        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-8">
          <div className="h-full bg-indigo-500 w-1/2 animate-[pulse_2s_ease-in-out_infinite]" />
        </div>

        <p className="text-sm text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
          M Solutions Web
        </p>
      </div>
    </div>
  );
}
