---
# Default content for `src/layouts/components/sections/CallToAction.astro`; page frontmatter can override these values.
enable: true # Control the visibility of this section across all pages where it is used
title: "Richiedi Consulenza Gratuita"
description: |
  Hai un'idea per un progetto o vuoi migliorare la tua presenza online? Raccontami i tuoi obiettivi e troveremo la soluzione tecnica perfetta per far crescere il tuo business.

button:
  # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  enable: true
  label: "Inizia un Progetto"
  url: "/#contatti"
  hoverEffect: "magnetic-text-flip" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  variant: "fill" # Optional: fill | fill-white | outline | text | circle

options:
  appearance: "dark" # Options: "dark" | "light" | "accent"
  centeredContent: true # true | false - dark appearance is centered to match the default CTA design
---
