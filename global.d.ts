// globals.d.ts

// Dichiara il modulo per i file CSS
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Dichiara il modulo per i file .css con side-effect (import global)
declare module '*.css';

// Dichiara anche i moduli per altri tipi di file (es. immagini, se non sono già configurati)
// declare module '*.png';
// declare module '*.jpg';