"use client";

import {
  Guitar,
  Music,
  BookOpen,
  Users,
  Shield,
  Star,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Gift,
  MessageCircle,
  Zap,
  ArrowRight,
  Clock,
  CreditCard,
  Lock,
  Award,
  Play,
  Volume2,
  HeartHandshake,
} from "lucide-react";
import { useState } from "react";

/* ───────────────────────────── DATA ───────────────────────────── */

const songList = [
  { artist: "Soda Stereo", song: "De Música Ligera" },
  { artist: "Maná", song: "Rayando el Sol" },
  { artist: "Caifanes", song: "La Negra Tomasa" },
  { artist: "Enanitos Verdes", song: "Lamento Boliviano" },
  { artist: "Héroes del Silencio", song: "Entre Dos Tierras" },
  { artist: "Café Tacvba", song: "Eres" },
  { artist: "Los Prisioneros", song: "Tren al Sur" },
  { artist: "Aterciopelados", song: "Bolero Falaz" },
  { artist: "Molotov", song: "Gimme tha Power" },
  { artist: "El Tri", song: "Triste Canción" },
  { artist: "Fito Páez", song: "El Amor Después del Amor" },
  { artist: "Gustavo Cerati", song: "Crimen" },
  { artist: "Juanes", song: "La Camisa Negra" },
  { artist: "Maná", song: "Labios Compartidos" },
  { artist: "Soda Stereo", song: "Persiana Americana" },
  { artist: "La Ley", song: "El Duelo" },
  { artist: "Zoé", song: "Soñé" },
  { artist: "Divididos", song: "Qué Ves?" },
];

const testimonials = [
  {
    name: "Carlos M.",
    country: "México",
    text: "Me ayudó mucho a repasar canciones que siempre quise tocar. Las tablaturas son claras y fáciles de seguir. Lo recomiendo al 100%.",
    rating: 5,
  },
  {
    name: "Andrés P.",
    country: "Colombia",
    text: "Increíble material. Llevaba años buscando un cancionero así de completo en español. Los bonos son un regalo extra que vale oro.",
    rating: 5,
  },
  {
    name: "Lucía R.",
    country: "Argentina",
    text: "Soy principiante y este ebook me dio la confianza de empezar a tocar mis canciones favoritas. La comunidad de WhatsApp es genial.",
    rating: 5,
  },
  {
    name: "Diego F.",
    country: "Chile",
    text: "Las tablaturas de los solos internacionales son lo mejor. Aprendí solos que pensé que eran imposibles. Calidad/precio inmejorable.",
    rating: 5,
  },
];

const bonuses = [
  {
    title: "5 Ebooks de Guitarra",
    description:
      "Complementa tu aprendizaje con ebooks sobre técnica, teoría musical, escalas, arpegios y ritmos latinos.",
    icon: BookOpen,
    value: "$49.50",
  },
  {
    title: "Comunidad VIP en WhatsApp",
    description:
      "Acceso exclusivo al grupo donde compartimos tips, resolvemos dudas y conectamos con guitarristas de toda Latinoamérica.",
    icon: Users,
    value: "$29.90",
  },
  {
    title: "Tabs de Solos Internacionales",
    description:
      "Tablaturas de los solos más icónicos del rock de los 90/2000. Californication, Hotel California y más.",
    icon: Music,
    value: "$19.90",
  },
];

const faqs = [
  {
    q: "¿En qué formato viene el cancionero?",
    a: "Viene en formato PDF de alta calidad, compatible con cualquier dispositivo: celular, tablet o computadora. Lo puedes descargar e imprimir.",
  },
  {
    q: "¿Necesito saber leer partituras?",
    a: "No. Todo está en tablaturas y diagramas de acordes, que son mucho más fáciles de leer. Ideal para principiantes e intermedios.",
  },
  {
    q: "¿Cómo recibo el material?",
    a: "Inmediatamente después del pago recibes un email con los enlaces de descarga. Acceso instantáneo, sin esperas.",
  },
  {
    q: "¿Puedo pagar en mi moneda local?",
    a: "Sí. El precio es de $11.90 USD pero puedes pagar con tarjeta de crédito, débito, PayPal o cualquier medio de pago local. El sistema convierte automáticamente.",
  },
  {
    q: "¿Qué pasa si no me gusta?",
    a: "Tienes 7 días de garantía total. Si no estás satisfecho, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.",
  },
  {
    q: "¿Cuánto tiempo tengo para descargar el material?",
    a: "El acceso es de por vida. Puedes descargarlo cuando quieras, cuantas veces quieras.",
  },
];

/* ───────────────────────────── COMPONENTS ───────────────────────── */

function CTAButton({ className = "", size = "lg" }: { className?: string; size?: "md" | "lg" }) {
  const sizeClass = size === "lg" ? "px-10 py-5 text-xl" : "px-8 py-4 text-lg";
  return (
    <a
      href="#comprar"
      className={`cta-button inline-flex items-center justify-center gap-3 rounded-xl font-bold text-white cursor-pointer ${sizeClass} ${className}`}
    >
      <Zap className="w-6 h-6" />
      ¡QUIERO MI CANCIONERO!
      <ArrowRight className="w-5 h-5" />
    </a>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-rock-amber text-rock-amber" />
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-neutral-800 rounded-xl overflow-hidden transition-colors hover:border-neutral-600">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-semibold text-lg pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5 px-5" : "max-h-0"}`}
      >
        <p className="text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ───────────────────────────── PAGE ───────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero-gradient relative overflow-hidden min-h-screen flex items-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rock-red/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rock-orange/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-rock-red/10 border border-rock-red/20 rounded-full px-4 py-2 text-sm text-rock-red">
              <Guitar className="w-4 h-4" />
              <span>+2,500 guitarristas ya lo tienen</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight">
              Domina los{" "}
              <span className="gradient-text">Clásicos del Rock Latino</span>{" "}
              en tu Guitarra
            </h1>

            <p className="text-xl text-muted max-w-lg leading-relaxed">
              El cancionero definitivo con <strong className="text-white">100+ canciones</strong> en
              tablaturas y acordes. De Soda Stereo a Maná, de Caifanes a
              Café Tacvba. Todo lo que necesitas para sonar increíble.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-rock-orange" />
                100+ canciones
              </span>
              <span className="flex items-center gap-2">
                <Play className="w-4 h-4 text-rock-orange" />
                Tabs + Acordes
              </span>
              <span className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-rock-orange" />
                8 bonos gratis
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <CTAButton />
            </div>

            <div className="flex items-center gap-4 text-sm text-muted">
              <div className="flex -space-x-2">
                {["bg-rock-red", "bg-rock-orange", "bg-rock-amber", "bg-emerald-500"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${color} border-2 border-background flex items-center justify-center text-xs font-bold text-white`}
                    >
                      {["C", "A", "D", "L"][i]}
                    </div>
                  )
                )}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-rock-amber text-rock-amber" />
                  ))}
                </div>
                <span>4.9/5 de +350 reviews</span>
              </div>
            </div>
          </div>

          {/* Mockup del ebook */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-float relative">
              <div className="w-72 h-96 md:w-80 md:h-[28rem] bg-gradient-to-br from-rock-red via-red-700 to-rock-orange rounded-2xl shadow-2xl shadow-rock-red/20 flex flex-col items-center justify-center p-8 border border-red-500/30">
                <div className="absolute -top-3 -right-3 bg-rock-amber text-black font-bold text-sm px-3 py-1 rounded-full">
                  BEST SELLER
                </div>
                <Guitar className="w-16 h-16 text-white/90 mb-4" />
                <div className="text-center">
                  <p className="font-display text-3xl text-white mb-2">ROCK</p>
                  <p className="font-display text-4xl text-rock-amber">LATINO</p>
                  <div className="w-16 h-0.5 bg-white/40 mx-auto my-4" />
                  <p className="text-white/80 text-sm uppercase tracking-widest">
                    Cancionero
                  </p>
                  <p className="text-white/80 text-sm uppercase tracking-widest">
                    para Guitarra
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-white/60 text-xs">
                  <Volume2 className="w-4 h-4" />
                  <span>100+ Canciones</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-8 top-16 bg-surface border border-neutral-700 rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Music className="w-5 h-5 text-rock-red" />
                  <div>
                    <p className="text-xs text-muted">Incluye</p>
                    <p className="text-sm font-semibold">Tabs + Acordes</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-20 bg-surface border border-neutral-700 rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-xs text-muted">Garantía</p>
                    <p className="text-sm font-semibold">7 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted" />
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAR ─── */}
      <section className="bg-surface border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          {[
            { value: "2,500+", label: "Guitarristas" },
            { value: "100+", label: "Canciones" },
            { value: "4.9★", label: "Calificación" },
            { value: "15+", label: "Países" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl md:text-3xl gradient-text">{stat.value}</p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROBLEMA / AGITACIÓN ─── */}
      <section className="section-dark py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-display text-3xl md:text-5xl">
            ¿Te pasa <span className="gradient-text">esto</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Buscas tablaturas en internet y encuentras versiones incorrectas",
              "Quieres tocar rock latino pero no sabes por dónde empezar",
              "Las canciones que encuentras están incompletas o mal transcritas",
              "Pierdes horas buscando en vez de practicar",
              "Sientes que no avanzas porque no tienes un método organizado",
              "Quieres impresionar a tus amigos tocando los clásicos pero no puedes",
            ].map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-surface/50 border border-neutral-800 rounded-xl p-5"
              >
                <XCircle className="w-5 h-5 text-rock-red shrink-0 mt-0.5" />
                <p className="text-muted">{problem}</p>
              </div>
            ))}
          </div>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            No es tu culpa. El problema es que no existía un recurso{" "}
            <strong className="text-white">completo, organizado y confiable</strong> para
            aprender rock latino en guitarra.{" "}
            <span className="text-rock-orange font-semibold">Hasta ahora.</span>
          </p>
        </div>
      </section>

      {/* ─── SOLUCIÓN ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-display text-3xl md:text-5xl">
              Presentamos el{" "}
              <span className="gradient-text">Cancionero Definitivo</span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Todo lo que necesitas en un solo lugar, organizado, verificado y
              listo para que empieces a tocar hoy mismo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "100+ Canciones Verificadas",
                desc: "Cada tablatura y acorde revisado nota por nota. Sin errores, sin versiones incompletas.",
              },
              {
                icon: Guitar,
                title: "Acordes + Tablaturas",
                desc: "Diagramas de acordes claros y tablaturas precisas. Para que suenes exactamente como la versión original.",
              },
              {
                icon: Award,
                title: "Los Mejores Artistas",
                desc: "Soda Stereo, Maná, Caifanes, Enanitos Verdes, Café Tacvba, Héroes del Silencio y muchos más.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-surface border border-neutral-800 rounded-2xl p-8 text-center space-y-4 hover:border-rock-red/40 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-rock-red/10 rounded-xl flex items-center justify-center mx-auto">
                  <feature.icon className="w-7 h-7 text-rock-red" />
                </div>
                <h3 className="font-display text-xl">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARA QUIÉN ES / NO ES ─── */}
      <section className="section-dark py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl text-center mb-16">
            ¿Este Cancionero es <span className="gradient-text">para ti</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-2xl flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                Es Para Ti Si...
              </h3>
              <ul className="space-y-4">
                {[
                  "Te gusta el rock en español y quieres disfrutar tocándolo",
                  "Estás armando tu repertorio de canciones favoritas",
                  "Quieres aprender canciones fáciles de tocar sin complicarte",
                  "Amas la diversidad del rock hispano y su impacto en la cultura",
                  "Buscas un cancionero práctico y completo con 100+ canciones",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rock-red/5 border border-rock-red/20 rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-2xl flex items-center gap-3">
                <XCircle className="w-7 h-7 text-rock-red" />
                NO Es Para Ti Si...
              </h3>
              <ul className="space-y-4">
                {[
                  "No te interesa el rock en español ni su riqueza cultural",
                  "Esperas canciones modernas o comerciales en otro idioma",
                  "Buscas material académico en lugar de un repertorio práctico",
                  "No planeas usar instrumentos como guitarra",
                  "Prefieres solo ver videos sin practicar con material escrito",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rock-red shrink-0 mt-0.5" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CANCIONES ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6 mb-12">
            <h2 className="font-display text-3xl md:text-5xl">
              Algunas de las{" "}
              <span className="gradient-text">Canciones Incluidas</span>
            </h2>
            <p className="text-muted text-lg">
              Esta es solo una muestra. El cancionero incluye 100+ canciones
              completas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {songList.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-surface border border-neutral-800 rounded-xl px-5 py-4 hover:border-rock-red/30 transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-rock-red/10 rounded-lg flex items-center justify-center shrink-0">
                  <Music className="w-4 h-4 text-rock-red" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate">{s.song}</p>
                  <p className="text-xs text-muted truncate">{s.artist}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted mt-8 text-sm">
            + 80 canciones más dentro del cancionero completo
          </p>
        </div>
      </section>

      {/* ─── BONOS ─── */}
      <section className="section-dark py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 bg-rock-amber/10 border border-rock-amber/20 rounded-full px-4 py-2 text-sm text-rock-amber">
              <Gift className="w-4 h-4" />
              <span>Bonos Exclusivos Gratis</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl">
              Además del cancionero, recibirás{" "}
              <span className="gradient-text">todo esto gratis</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Valorados en más de $99 USD. Tuyos completamente gratis al comprar
              hoy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bonuses.map((bonus) => (
              <div key={bonus.title} className="bonus-card rounded-2xl p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-rock-red/10 rounded-xl flex items-center justify-center">
                    <bonus.icon className="w-6 h-6 text-rock-red" />
                  </div>
                  <span className="text-rock-amber font-bold text-sm line-through opacity-60">
                    {bonus.value}
                  </span>
                </div>
                <h3 className="font-display text-xl">{bonus.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{bonus.description}</p>
                <div className="inline-flex items-center gap-2 text-emerald-500 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  GRATIS con tu compra
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-rock-red/10 via-rock-orange/10 to-rock-amber/10 border border-rock-red/20 rounded-2xl p-8 text-center">
            <p className="text-muted mb-2">Valor total de los bonos:</p>
            <p className="font-display text-3xl line-through text-muted/50 mb-1">$99.30 USD</p>
            <p className="font-display text-2xl text-emerald-500">
              HOY: $0.00 — ¡Completamente GRATIS!
            </p>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIOS ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-display text-3xl md:text-5xl">
              Lo que dicen nuestros{" "}
              <span className="gradient-text">guitarristas</span>
            </h2>
            <p className="text-muted text-lg">
              Más de 2,500 personas ya están tocando con nuestro cancionero
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-surface border border-neutral-800 rounded-2xl p-8 space-y-4 hover:border-neutral-700 transition-colors duration-300"
              >
                <StarRating count={t.rating} />
                <p className="text-muted leading-relaxed italic">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 bg-rock-red/20 rounded-full flex items-center justify-center">
                    <span className="text-rock-red font-bold text-sm">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted">{t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING / CTA ─── */}
      <section id="comprar" className="section-dark py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center space-y-6 mb-12">
            <h2 className="font-display text-3xl md:text-5xl">
              Lleva tu guitarra al{" "}
              <span className="gradient-text">siguiente nivel</span>
            </h2>
            <p className="text-muted text-lg">
              Todo lo que necesitas por menos de lo que cuesta una cuerda de
              guitarra
            </p>
          </div>

          <div className="bg-surface border-2 border-rock-red/40 rounded-3xl overflow-hidden animate-pulse-glow">
            {/* Header */}
            <div className="bg-gradient-to-r from-rock-red to-rock-orange p-6 text-center">
              <p className="font-display text-2xl text-white">
                Cancionero de Rock Latino + Todos los Bonos
              </p>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              {/* What you get */}
              <div className="space-y-4">
                {[
                  { item: "Cancionero de Rock Latino (100+ canciones)", value: "$24.90" },
                  { item: "5 Ebooks de Guitarra Complementarios", value: "$49.50" },
                  { item: "Comunidad VIP en WhatsApp", value: "$29.90" },
                  { item: "Tabs de Solos Internacionales", value: "$19.90" },
                ].map((line) => (
                  <div
                    key={line.item}
                    className="flex items-center justify-between py-3 border-b border-neutral-800 last:border-0"
                  >
                    <span className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-sm md:text-base">{line.item}</span>
                    </span>
                    <span className="text-sm text-muted line-through ml-4 shrink-0">
                      {line.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="text-center space-y-3">
                <p className="text-muted">
                  Valor total:{" "}
                  <span className="line-through">$124.20 USD</span>
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-muted text-lg">Hoy por solo</span>
                  <span className="font-display text-6xl md:text-7xl gradient-text animate-count-pulse">
                    $11.90
                  </span>
                  <span className="text-muted text-lg">USD</span>
                </div>
                <p className="text-sm text-muted">
                  Click en el botón para ver el precio en tu moneda local
                </p>
              </div>

              {/* CTA */}
              <div className="text-center space-y-6">
                <CTAButton className="w-full sm:w-auto" />

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-500" />
                    Pago seguro
                  </span>
                  <span className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-500" />
                    Visa, Master, PayPal
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    Acceso inmediato
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GARANTÍA ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
            <Shield className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl">
            Garantía Total de{" "}
            <span className="text-emerald-500">7 Días</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-xl mx-auto">
            Si por cualquier motivo no estás satisfecho con el cancionero,
            simplemente escríbenos y te devolvemos el{" "}
            <strong className="text-white">100% de tu dinero</strong>. Sin
            preguntas, sin complicaciones, sin letra pequeña. El riesgo es
            totalmente nuestro.
          </p>
          <CTAButton size="md" />
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-dark py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-5xl text-center mb-12">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHATSAPP ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl">
            ¿Tienes dudas?{" "}
            <span className="gradient-text">Escríbenos</span>
          </h2>
          <p className="text-muted text-lg">
            Dale click al botón y ponte en contacto con un asesor por WhatsApp
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 cursor-pointer"
          >
            <MessageCircle className="w-6 h-6" />
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="hero-gradient py-20 lg:py-28 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-display text-3xl md:text-5xl">
            No dejes pasar esta <span className="gradient-text">oportunidad</span>
          </h2>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            Por solo <strong className="text-white">$11.90 USD</strong> vas a
            tener el cancionero completo + todos los bonos. Empieza a tocar los
            clásicos del rock latino hoy.
          </p>
          <CTAButton />
          <p className="text-sm text-muted flex items-center justify-center gap-2">
            <HeartHandshake className="w-4 h-4" />
            Más de 2,500 guitarristas satisfechos en toda Latinoamérica
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-surface border-t border-neutral-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="flex justify-center items-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Compra Segura
            </span>
            <span className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Entrega por Email
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Garantía 7 días
            </span>
          </div>
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Cancionero de Rock Latino. Todos los
            derechos reservados.
          </p>
          <p className="text-xs text-neutral-700">
            Este producto es un material educativo digital. Los resultados
            pueden variar según la dedicación del estudiante.
          </p>
        </div>
      </footer>
    </>
  );
}
