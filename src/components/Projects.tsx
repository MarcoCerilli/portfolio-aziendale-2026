"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css"; // Carica tutto il pacchetto

const projectsList = [
  {
    title: "ModernStore E-commerce Full-Stack",
    description: "Shop high-end con pagamenti Stripe/PayPal integrati, gestione database con Prisma/Neon e validazione dati Zod. Performance estreme e UX moderna.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "Shadcn UI"],
    link: "https://modern-store-nine.vercel.app/",
    image: "/projects/ecommerce-clothing.jpg",
    isNextJs: true,
    category: "Full Stack / Fintech",
    color: "from-blue-600/20",
  },
  {
    title: "Gym Management SaaS",
    description: "Sistema gestionale cloud per centri sportivi con gestione ruoli, prenotazioni corsi e automazione admin. Sviluppato in Laravel con ambiente Docker.",
    tags: ["Laravel", "PHP", "Docker", "MySQL", "Breeze"],
    link: "#", 
    image: "/projects/gym-saas.jpg",
    isNextJs: false,
    category: "Software SaaS",
    color: "from-purple-500/20",
  },
  {
    title: "Real-time Shift Planner",
    description: "Applicazione web per la gestione turni aziendali con sincronizzazione istantanea dei dati e architettura serverless su Firebase.",
    tags: ["Firebase", "React", "Real-time DB", "Serverless"],
    link: "https://gestioneturni-b1b21.web.app/",
    image: "/projects/turni.jpg",
    isNextJs: false, 
    category: "Cloud Web App",
    color: "from-orange-500/20",
  },
  {
    title: "Windsurf Technical Blog",
    description: "Piattaforma editoriale avanzata con struttura dati personalizzata (CPT & ACF) per recensioni tecniche, attrezzature e spot.",
    tags: ["WordPress", "PHP", "ACF", "Custom Data"],
    link: "#", 
    image: "/projects/windsurf-blog.jpg",
    isNextJs: false,
    category: "Backend WordPress",
    color: "from-cyan-500/20",
  },
  {
    title: "Social Core Engine (Symfony 7)",
    description: "Architettura backend scalabile per piattaforme social. Containerizzazione Docker completa e gestione avanzata delle relazioni database.",
    tags: ["Symfony 7", "Docker", "PostgreSQL", "Tailwind"],
    link: "#",
    image: "/projects/social-core.jpg",
    isNextJs: false,
    category: "Backend Architecture",
    color: "from-indigo-500/20",
  },
  {
    title: "Financial Dashboard",
    description: "Dashboard finanziaria per l'analisi dei dati in tempo reale. Visualizzazione metrica complessa e interfaccia Next.js ottimizzata.",
    tags: ["Next.js", "Tailwind", "Charts", "Fintech"],
    link: "https://nextjs-dashboard-zeta-sooty-93.vercel.app/",
    image: "/projects/dashboard.jpg",
    isNextJs: true,
    category: "Data Analysis",
    color: "from-emerald-500/20",
  },
  {
    title: "La Casetta nelle Mura",
    description: "Sito web per hospitality a Terracina. Ottimizzazione SEO locale e sistema di gestione prenotazioni semplificato per il cliente.",
    tags: ["WordPress", "SEO", "Hospitality"],
    link: "https://lacasettanellemura.it",
    image: "/projects/casetta.jpg",
    isNextJs: false,
    category: "Business Site",
    color: "from-amber-500/20",
  },
  {
    title: "Studio Legale Anna Fusco",
    description: "Sito istituzionale professionale focalizzato sulla lead generation e sull'autorevolezza del brand legale.",
    tags: ["WordPress", "Legal", "UI/UX"],
    link: "https://avvocatoannafusco.it",
    image: "/projects/legal.jpg",
    isNextJs: false,
    category: "Corporate",
    color: "from-slate-500/20",
  },
  {
    title: "Idraulico Iona Bros",
    description: "Landing page ad alta conversione per servizi di emergenza rapida. Ottimizzata per campagne Google Ads e mobile-first.",
    tags: ["WordPress", "Marketing Ads", "Performance"],
    link: "https://ionabros-demo.vercel.app",
    image: "/projects/idraulico.jpg",
    isNextJs: false,
    category: "Landing Page",
    color: "from-red-500/20",
  },
];

export default function Projects() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-[400px]" />;
  }
  return (
    <div className="mt-8 md:mt-16 w-full mb-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 2, // Forza del rialzo centrale
          slideShadows: false,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="projects-swiper py-12"
      >
        {projectsList.map((project, index) => (
          <SwiperSlide
            key={index}
            className="max-w-[340px] md:max-w-[550px] transition-all duration-500"
          >
            <div className="group relative bg-[#0d0d0f] rounded-[2rem] border border-white/10 overflow-hidden flex flex-col hover:border-indigo-500/40 transition-all duration-500 shadow-2xl h-full">
              {/* AREA FOTO */}
              <div className="relative h-56 md:h-72 w-full overflow-hidden bg-black/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${project.color} to-transparent opacity-30`}
                />

                {project.isNextJs && (
                  <div className="absolute top-5 right-5 z-20">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-black/80 border border-white/20 backdrop-blur-md rounded-full shadow-xl">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                        Next.js
                      </span>
                    </span>
                  </div>
                )}
              </div>

              {/* AREA TESTO */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-none">
                    {project.title}
                  </h3>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    className="p-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </motion.a>
                </div>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-1 px-2 py-0.5 bg-white/5 border border-white/5 rounded-md"
                    >
                      <div className="w-1 h-1 rounded-full bg-gray-500" />
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* Effetto Focus: Le slide laterali sono rimpicciolite e sbiadite */
        .swiper-slide {
          opacity: 0.4;
          transform: scale(0.85) translateY(20px);
          filter: blur(2px);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        /* La slide attiva diventa grande, nitida e rialzata */
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1) translateY(0);
          filter: blur(0);
          z-index: 10;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2);
        }
        .swiper-pagination-bullet-active {
          background: #6366f1; /* Indigo-500 */
        }
      `}</style>
    </div>
  );
}
