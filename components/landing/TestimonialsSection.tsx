"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionWrapper, { FadeInChild } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export default function TestimonialsSection() {
  const swiperRef = useRef<SwiperType>(null);
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const t_dict = dictionaries[language].testimonials;

  const testimonials: Testimonial[] = [
    {
      name: "Fatima Zahra El Idrissi",
      role: language === 'fr' ? "Développeuse Full-Stack" : "Full-Stack Developer",
      company: "OCP Group",
      quote: language === 'fr' 
        ? "ZiryabTec a transformé ma façon d'apprendre. Le tuteur IA est incroyable — il répond comme un vrai formateur, avec les timestamps de la vidéo en bonus. J'ai décroché ma promotion grâce aux compétences acquises ici."
        : "ZiryabTec transformed the way I learn. The AI tutor is amazing — it replies like a real instructor, with video timestamps as a bonus. I got promoted thanks to the skills I learned here.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
    {
      name: "Youssef Amrani",
      role: "Data Scientist",
      company: "Capgemini",
      quote: language === 'fr'
        ? "Le parcours Python & Data Science est le meilleur contenu francophone que j'ai trouvé. La qualité des cours surpasse largement ce qu'on trouve sur les plateformes internationales. Et tout ça à un prix accessible."
        : "The Python & Data Science track is the best content I've found. The quality of the courses far surpasses what you find on international platforms. And all this at an accessible price.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    },
    {
      name: "Nadia Bennani",
      role: language === 'fr' ? "Étudiante en Informatique" : "Computer Science Student",
      company: "ENSIAS",
      quote: language === 'fr'
        ? "En tant qu'étudiante, j'apprécie la flexibilité et la qualité premium. Les certificats vérifiables m'ont aidée à me démarquer lors de mes candidatures de stage. L'interface est magnifique aussi!"
        : "As a student, I appreciate the flexibility and premium quality. Verifiable certificates helped me stand out in my internship applications. The interface is gorgeous too!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    },
    {
      name: "Karim Tazi",
      role: "CTO",
      company: "StartupFlow",
      quote: language === 'fr'
        ? "J'ai formé toute mon équipe de développeurs via ZiryabTec. Le dashboard d'entreprise nous permet de suivre la progression de chacun. ROI évident dès le premier mois."
        : "I trained my entire team of developers via ZiryabTec. The enterprise dashboard allows us to track everyone's progress. Evident ROI from the first month.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    },
    {
      name: "Salma Chraibi",
      role: "DevOps Engineer",
      company: "Freelance",
      quote: language === 'fr'
        ? "Le cours DevOps & Cloud est exceptionnellement bien structuré. Les quiz générés par l'IA après chaque chapitre m'ont vraiment aidée à consolider mes connaissances. بزاف مزيان!"
        : "The DevOps & Cloud course is exceptionally well structured. AI-generated quizzes after each chapter really helped me consolidate my knowledge. بزاف مزيان!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    },
  ];

  return (
    <SectionWrapper id="testimonials" className="relative bg-[var(--bg-alt)] py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <FadeInChild className="text-center mb-16">
        <p className="text-sm text-[var(--accent)] font-bold uppercase tracking-widest mb-3">
          {t_dict.subtitle}
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-[var(--text-primary)]">
          {language === 'fr' ? 'Ce que disent nos ' : 'What our '}
          <span className="text-[var(--accent)]">{language === 'fr' ? 'apprenants' : 'learners say'}</span>
        </h2>
      </FadeInChild>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".testimonials-pagination",
          }}
          navigation={{
            prevEl: ".testimonials-prev",
            nextEl: ".testimonials-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          onSwiper={(swiper) => {
            // @ts-ignore
            swiperRef.current = swiper;
          }}
          className="testimonials-swiper !pb-20 !pt-10"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="transition-all duration-500 swiper-slide-transform">
              {({ isActive }) => (
                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: isActive ? 1.05 : 1 }}
                  transition={{ duration: 0.5 }}
                  className={`elite-card h-full bg-white p-8 md:p-10 relative flex flex-col justify-between border border-[var(--border)] transition-shadow duration-300 ${
                    isActive ? "shadow-xl shadow-blue-500/10 border-blue-100" : "opacity-60"
                  }`}
                >
                  {/* Watermark Quote Icon */}
                  <Quote className="absolute top-6 left-6 w-16 h-16 text-blue-50 opacity-60 -z-10" />

                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < t.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-gray-200"
                          }
                        />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <blockquote className="text-[var(--text-secondary)] text-lg leading-relaxed italic mb-10 font-medium line-clamp-4">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Profile section */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                    <div className="relative w-12 h-12 shrink-0">
                      <img 
                        src={t.avatar} 
                        alt={t.name}
                        className="w-full h-full rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] text-[15px] leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        {t.role} <span className="text-blue-500 mx-1">@</span> {t.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 hidden xl:block">
          <button className="testimonials-prev w-12 h-12 rounded-full bg-white border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all shadow-sm hover:shadow-md">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 hidden xl:block">
          <button className="testimonials-next w-12 h-12 rounded-full bg-white border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all shadow-sm hover:shadow-md">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="testimonials-pagination flex justify-center gap-2 mt-10" />
      </div>

      <style jsx global>{`
        .testimonials-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: var(--border);
          opacity: 1;
          transition: all 0.3s ease;
          border-radius: 5px;
        }
        .testimonials-pagination .swiper-pagination-bullet-active {
          background: var(--accent) !important;
          width: 30px;
        }
        .swiper-slide-transform {
          transition: transform 0.5s ease;
        }
      `}</style>
    </SectionWrapper>
  );
}
