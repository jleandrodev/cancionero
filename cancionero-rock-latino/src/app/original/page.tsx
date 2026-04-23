"use client";

import { useState } from "react";
import Image from "next/image";

/* ─────────────────────── DATA ─────────────────────── */

const songLists: Record<string, string[]> = {
  "Lista E1": [
    "01. Maná – Rayando el sol",
    "02. Spinetta – Muchacha ojos de papel",
    "03. Charly Garcia – Canción para mi muerte",
    "04. Morat – Como te atreves",
    "05. Los Rodriguez – 10 años después",
    "06. Los Prisioneros – Tren al sur",
    "07. Caifanes – La celula que explota",
    "08. Juanes – A dios le pido",
    "09. Shakira – Inevitable",
    "10. El tri – Triste canción de amor",
    "11. Coti – Nada fue un error",
    "12. Julieta Venegas – Algo esta cambiando",
    "13. Soda Stereo – De música ligera",
    "14. Andres Calamaro – Flaca",
    "15. Gustavo Cerati – Crimen",
  ],
  "Lista E2": [
    "16. La Ley – Mentira",
    "17. Charly Garcia – Cerca de la revolución",
    "18. Vicentico – Solo un momento",
    "19. Los Rodriguez – Dulce condena",
    "20. Cafe Tacvba – Eres",
    "21. Aterciopelados – Bolero falaz",
    "22. Babasonicos – Irresponsables",
    "23. No te va a gustar – A las nueve",
    "24. Los Fabulosos Cadillacs – Vasos Vacios",
    "25. Sin Bandera – Entra en mi vida",
    "26. Enanitos Verdes – Lamento Boliviano",
    "27. Jarabe De Palo – Depende",
    "28. Heroes Del Silencio – Entre Dos Tierras",
    "29. Radio Futura – Escuela de Calor",
    "30. Molotov – Frijolero",
  ],
  "Lista E3": [
    "31. Los Tres – Dejate Caer",
    "32. Virus – Imagenes Paganas",
    "33. Jaguares – Te Lo Pido Por Favor",
    "34. La Ley – El Duelo",
    "35. Maná – En El Muelle De San Blas",
    "36. Spinetta – Seguir Viviendo Sin Tu Amor",
    "37. Los Prisioneros – Estrechez De Corazón",
    "38. Julieta Venegas – Eres Para Mi",
    "39. Babasonicos – El Loco",
    "40. Vicentico – Los Caminos De La Vida",
    "41. No Te Va A Gustar – Tan Lejos",
    "42. La Vela Puerca – Zafar",
    "43. Jarabe De Palo – La Flaca",
    "44. Los Redondos – Un Angel Para Tu Soledad",
    "45. Andres Calamaro – El Salmon",
  ],
  "Lista E4": [
    "46. Cafe Tacvba – Como Te Extraño Mi Amor",
    "47. Shakira – Si Te Vas",
    "48. Soda Stereo – En La Ciudad De La Furia",
    "49. La Mancha De Rolando – Arde La Ciudad",
    "50. El Tri – Las Piedras Rodantes",
    "51. Enanitos Verdes – Igual Que Ayer",
    "52. Gustavo Cerati – Adios",
    "53. Virus – Wadu Wadu",
    "54. Charly Garcia – Rezo Por Vos",
    "55. Maná – Mariposa Traicionera",
    "56. Los Rodriguez – Sin Documentos",
    "57. Heroes Del Silencio – Maldito Duende",
    "58. Aterciopelados – Rompecabezas",
    "59. Los Redondos – Ji Ji Ji",
    "60. Caifanes – Afuera",
  ],
  "Lista E5": [
    "61. Molotov – Gimme The Power",
    "62. Los Tres – He Barrido El Sol",
    "63. Soda Stereo – Persiana Americana",
    "64. Los Fabulosos Cadillacs – Matador",
    "65. Bersuit Vergarabat – La Soledad",
    "66. El Tri – Oye Cantinero",
    "67. La Ley – Fuera De Mi",
    "68. Cuarteto De Nos – Ya No Sé Qué Hacer Conmigo",
    "69. Maldita Vecindad – Pachuco",
    "70. Maná – Labios Compartidos",
    "71. Gustavo Cerati – Tu Locura",
    "72. Charly Garcia – Inconsciente Colectivo",
    "73. Bersuit Vergarabat – Toco Y Me Voy",
    "74. Cafe Tacvba – Las Flores",
    "75. Enanitos Verdes – Tu Cárcel",
  ],
  "Lista E6": [
    "76. La Mancha De Rolando – Donde Vamos",
    "77. Los Abuelos De La Nada – Mil Horas",
    "78. Duncan Dhu – En Algun Lugar",
    "79. Lobo – Hombre En Paris",
    "80. Manu Chao – Me Gustas Tú",
    "81. Rata Blanca – Mujer Amante",
    "82. Magneto – Vuela Vuela",
    "83. Fabiana Cantilo – Mi Enfermedad",
    "84. Zoé – Labios Rotos",
    "85. Coti – Antes Que Ver El Sol",
    "86. Andres Calamaro – La Parte De Adelante",
    "87. Fito Paez – Mariposa Tecknicolor",
    "88. Virus – Hay Que Salir Del Agujero Interior",
    "89. Pappo – Juntos A La Par",
    "90. Divididos – Que Ves",
  ],
  "Lista E7": [
    "91. Charly Garcia – Sweet Home Buenos Aires",
    "92. Los Redondos – Caña Seca Y Un Membrillo",
    "93. Spinetta – No Te Alejes Tanto De Mi",
    "94. Hombres G – Te Quiero",
    "95. Enanitos Verdes – Amigos",
    "96. Bersuit Vergarabat – Vuelos",
    "97. Kapanga – El Universal",
    "98. La Renga – Cuando Estes Acá",
    "99. Sui Generis – El Fantasma De Canterville",
    "100. Los Ratones Paranoicos – Para Siempre",
  ],
};

const bonusBooks = [
  {
    title: "10 SECRETOS PARA TOCAR GUITARRA SIN DOLOR EN LAS MANOS",
    desc: "Este ebook te enseñará técnicas clave para prevenir la fatiga y mejorar tu comodidad al tocar. Descubre consejos sobre postura, estiramientos, ejercicios y hábitos que mantendrán tus manos en óptimas condiciones.",
    price: "$15.99",
    color: "#dc2626",
  },
  {
    title: "Descubre los 30 errores que te impiden hacer una cejilla perfecta",
    desc: "Con videos, ejemplos y ejercicios claros. Ideal para guitarristas intermedios que quieren mejorar su técnica. Toca con más precisión, menos esfuerzo y sin frustraciones.",
    price: "$12.99",
    color: "#eab308",
  },
  {
    title: "Ejercicios CLAVE Para Mejorar La Digitación",
    desc: "Ebook con ejercicios esenciales, una rutina práctica y directa para que tus dedos se muevan con precisión al tocar cualquier canción del cancionero.",
    price: "$14.99",
    color: "#22c55e",
  },
  {
    title: "Aprende los 50 acordes más usados en guitarra",
    desc: "Con diagramas simples y videos paso a paso. Vas a ver cómo se forman, cómo suenan y cómo aplicarlos en tus canciones con soltura.",
    price: "$9.99",
    color: "#dc2626",
  },
  {
    title: "Afina tu guitarra con 3 métodos simples y efectivos",
    desc: "Aprende a afinar tu guitarra paso a paso con los 3 métodos más usados por músicos. Incluye videos para que veas cómo hacerlo en la práctica.",
    price: "$2.99",
    color: "#eab308",
  },
];

const testimonials = [
  {
    name: "Martín R.",
    text: "Este cancionero tiene todos los clásicos que buscaba. Fácil de seguir y súper completo. ¡Me encanta!",
    photo: "/images/testimonials/homem1.jpeg",
  },
  {
    name: "Laura S.",
    text: "Perfecto para ampliar mi repertorio. Acordes claros y canciones que todos disfrutan.",
    photo: "/images/testimonials/mulher1.jpeg",
  },
  {
    name: "Carlos P.",
    text: "¡Increíble selección! Rock en español del bueno, desde los más viejos hasta los más modernos.",
    photo: "/images/testimonials/homem2.jpeg",
  },
  {
    name: "Ana M.",
    text: "Me ayudó mucho a tocar canciones que siempre quise aprender. Lo recomiendo al 100%.",
    photo: "/images/testimonials/mulher2.jpeg",
  },
  {
    name: "Javier T.",
    text: "Una joya para cualquier amante del rock. Letras, acordes y canciones icónicas en un solo lugar.",
    photo: "/images/testimonials/homem3.jpeg",
  },
];

const faqItems = [
  {
    q: "¿Como recibire mi libro?",
    a: "Una vez completes tu pago, recibirás el cancionero automáticamente en tu email. Es 100% seguro y accesible desde cualquier dispositivo.",
  },
  {
    q: "¿EL EBOOK ES FÍSICO O DIGITAL?",
    a: "Es un ebook digital (PDF) que recibes al instante por email, visualizable en celular, computadora o tablet, e imprimible.",
  },
  {
    q: "¿Por cuanto tiempo estará disponible el libro?",
    a: "¡Para siempre! Una vez comprado, es tuyo sin límite de tiempo y accesible desde cualquier dispositivo.",
  },
  {
    q: "¿Puedo ver el ebook desde cualquier dispositivo?",
    a: "Sí, desde celular, computadora o tablet sin problema mediante navegador o app de Hotmart.",
  },
  {
    q: "¿EL LIBRO DIGITAL TIENE GARANTÍA?",
    a: "Sí, tienes 7 días de garantía. Si no estás satisfecho, puedes pedir reembolso completo sin preguntas.",
  },
  {
    q: "¿El pago del ebook mas los beneficios es mensual?",
    a: "No, el pago es único. Acceso completo sin suscripciones ni cargos adicionales.",
  },
];

const whatsappBenefits = [
  "Conecta en tiempo real con otros guitarristas apasionados por el rock latino.",
  "Resuelve tus dudas al instante con la ayuda de la comunidad.",
  "Comparte tus avances y motívate con la comunidad.",
  "Disfruta de un espacio privado 100% exclusivo para estudiantes como tú.",
];

/* ─────────────────────── COMPONENTS ─────────────────────── */

function SongTabs() {
  const tabKeys = Object.keys(songLists);
  const [active, setActive] = useState(tabKeys[0]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-1 mb-4">
        {tabKeys.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-3 py-1.5 text-xs font-bold border cursor-pointer transition-colors ${active === tab
              ? "bg-[#333] text-white border-[#555]"
              : "bg-[#1a1a1a] text-[#999] border-[#333] hover:bg-[#252525]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-[#111] border border-[#333] p-4 max-h-[380px] overflow-y-auto">
        {songLists[active].map((song, i) => (
          <p key={i} className="text-[#ccc] text-sm py-1.5 border-b border-[#222] last:border-0">
            {song}
          </p>
        ))}
      </div>
    </div>
  );
}

function CTAButton() {
  return (
    <a
      href="#"
      className="inline-block px-10 py-4 font-bold text-white text-lg rounded-lg cursor-pointer transition-transform hover:scale-110 animate-[cta-pulse_2s_ease-in-out_infinite]"
      style={{
        background: "linear-gradient(135deg, #22c55e, #16a34a)",
        boxShadow: "0 8px 30px rgba(34, 197, 94, 0.5)",
      }}
    >
      QUIERO MI CANCIONERO
    </a>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqItems.map((faq, i) => (
        <div key={i} className="border border-[#ddd] bg-white rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left p-4 text-sm font-bold text-[#333] cursor-pointer flex justify-between items-center hover:bg-[#f9f9f9] transition-colors"
            aria-expanded={openIndex === i}
          >
            <span>▶ {faq.q}</span>
            <span className="text-[#999] text-xs ml-2">{openIndex === i ? "▲" : "▼"}</span>
          </button>
          {openIndex === i && (
            <div className="px-4 pb-4 border-t border-[#eee]">
              <p className="text-sm text-[#555] mt-3 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PricingCTA() {
  return (
    <div className="text-center py-10 px-4">
      <div className="max-w-md mx-auto">
        <p className="text-sm mb-1">
          <span className="text-[#e53e3e]">
            <s>¡Valor Normal $16.90!</s>
          </span>
        </p>
        <p className="text-2xl font-bold mb-1" style={{ color: "#eab308" }}>
          ¡Obtenlo HOY Por Solo $11.90!
        </p>
        <p className="text-xs text-[#999] mb-5">
          Click Al Botón para ver el precio en tu moneda local 👇
        </p>
        <CTAButton />

        {/* Payment logos */}
        <div className="flex justify-center items-center gap-4 mt-5 flex-wrap">
          {[
            { src: "/images/paymments/visa.jpeg", alt: "Visa" },
            { src: "/images/paymments/master.png", alt: "MasterCard" },
            { src: "/images/paymments/american.png", alt: "American Express" },
            { src: "/images/paymments/paypal.png", alt: "PayPal" },
          ].map((pm) => (
            <Image
              key={pm.alt}
              src={pm.src}
              alt={pm.alt}
              width={50}
              height={32}
              className="h-8 w-auto object-contain"
            />
          ))}
        </div>

        <p className="text-[11px] text-[#888] mt-5 leading-relaxed max-w-sm mx-auto">
          Tendrás acceso al contenido de forma inmediata. El costo final es de
          $11.90 USD, podrás utilizar tarjetas de crédito, debito, PayPal, o
          cualquier medio de pago local.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function OriginalPage() {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", minHeight: "100vh" }}>

      {/* ═══════════════════════════════════════════
          HERO - Dark
      ═══════════════════════════════════════════ */}
      <section className="text-center py-10 px-4 text-white" style={{ background: "#111" }}>
        <h1 className="text-2xl md:text-3xl font-bold mb-3 max-w-2xl mx-auto leading-tight">
          Domina los{" "}
          <span className="underline" style={{ color: "#e53e3e", textDecorationColor: "#e53e3e" }}>
            CLÁSICOS
          </span>{" "}
          de{" "}
          <span className="underline" style={{ color: "#e53e3e", textDecorationColor: "#e53e3e" }}>
            ROCK LATINO
          </span>{" "}
          en tu guitarra
        </h1>
        <p className="text-xs uppercase tracking-[0.2em] mt-3 max-w-xl mx-auto" style={{ color: "#999" }}>
          TE PRESENTO ESTE CANCIONERO IDEAL PARA PRACTICAR VIENDO COMO
          CONSTRUIR ACORDES EN TU GUITARRA
        </p>

        {/* Ebook cover */}
        <div className="flex justify-center mt-8 mb-10">
          <Image
            src="/images/rock-latino.png"
            alt="Cancionero de Rock Latino para Guitarra"
            width={500}
            height={400}
            priority
            className="rounded-lg max-w-full h-auto"
          />
        </div>

        {/* Para ti / No para ti */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-left text-sm px-2">
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: "#48bb78" }}>
              Este Ebook Es Para Ti …
            </h3>
            <ul className="space-y-3">
              {[
                "🎸 Te gusta el rock en español y quieres disfrutar de los mejores éxitos",
                "🎤 Estás armando tu repertorio de canciones latinas y buscas temas emblemáticos para interpretar.",
                "🎯 Quieres aprender canciones fáciles de tocar sin importar tu nivel en guitarra.",
                "🌍 Amas la diversidad del rock hispano y su impacto en generaciones de músicos y fans.",
                "📖 Buscas un cancionero práctico y completo con 100 clásicos inolvidables.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#bbb] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: "#e53e3e" }}>
              Este Ebook NO Es Para Ti …
            </h3>
            <ul className="space-y-3">
              {[
                "🚫 No te interesa el rock en español ni su riqueza cultural.",
                "❌ Prefieres canciones en otros idiomas.",
                "🚫 Esperas canciones modernas y comerciales en lugar de clásicos consagrados.",
                "❌ Buscas material académico en lugar de un repertorio de canciones prácticas.",
                "🚫 No planeas tocar instrumentos como guitarra.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#bbb] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA after Para Ti / No Para Ti */}
        <div className="text-center mt-10">
          <CTAButton />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SONG LIST - Dark
      ═══════════════════════════════════════════ */}
      <section className="py-10 px-4" style={{ background: "#0d0d0d" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-lg font-bold mb-6" style={{ color: "#eab308" }}>
            ¿Qué canciones Contiene El ebook?
          </h2>
          <SongTabs />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FIRST PRICING CTA - Dark
      ═══════════════════════════════════════════ */}
      <section style={{ background: "#111", color: "#fff" }}>
        <PricingCTA />
      </section>

      {/* ═══════════════════════════════════════════
          BONOS EXCLUSIVOS - Red gradient
      ═══════════════════════════════════════════ */}
      <section
        className="py-12 px-4"
        style={{ background: "linear-gradient(180deg, #8b0000, #5c0000)" }}
      >
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="text-5xl mb-3">🎁</div>
          <h2 className="text-3xl md:text-4xl font-black tracking-wider mb-2">
            BONOS EXCLUSIVOS
          </h2>
          <p className="text-base mb-2">
            que{" "}
            <span className="underline" style={{ color: "#eab308" }}>
              recibirás al comprar
            </span>{" "}
            el <span className="font-bold">CANCIONERO</span>
          </p>
          <p className="text-xs text-[#ddd] mb-10 max-w-2xl mx-auto leading-relaxed">
            5 EBOOKS <strong>GRATIS</strong> (COMPLEMENTA TU APRENDIZAJE CON
            ÉSTOS BONOS EXCLUSIVOS QUE TE AYUDARÁN A DOMINAR TUS HABILIDADES
            MUSICALES EN GUITARRA).
          </p>

          {/* Bonus books grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {bonusBooks.map((book, i) => (
              <div
                key={i}
                className="bg-black/40 border-2 border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-yellow-500/50 hover:scale-[1.03] transition-all duration-300"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
              >
                <div className="w-44 h-60 rounded-xl shadow-2xl mb-5 overflow-hidden border-2 border-white/20">
                  <Image
                    src={[
                      "/images/10-secretos.png",
                      "/images/30-erores.png",
                      "/images/ejercicios-clave.png",
                      "/images/aprende-los-50-acordes.png",
                      "/images/afina-tu-guitarra.png",
                    ][i]}
                    alt={book.title}
                    width={176}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-white leading-snug mb-3 min-h-[48px]">
                  {book.title}
                </h4>
                <p className="text-sm text-[#ffcccc] leading-relaxed mb-4">
                  {book.desc}
                </p>
                <div className="mt-auto pt-3 border-t border-white/10 w-full">
                  <p className="text-lg font-bold">
                    <span className="line-through text-white/40 text-base mr-2">{book.price}</span>
                    <span style={{ color: "#4ade80" }} className="text-xl">HOY GRATIS</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BONO SORPRESA - Light
      ═══════════════════════════════════════════ */}
      <section className="py-12 px-4" style={{ background: "#f8f8f8", color: "#222" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-4xl mb-2">🎁</p>
          <h2 className="text-2xl md:text-3xl font-black tracking-wider mb-1" style={{ color: "#b8860b" }}>
            BONO SORPRESA
          </h2>

          <h3 className="text-xl font-bold mb-6 text-[#222]">
            Comunidad VIP en WhatsApp
          </h3>

          <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start text-left">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/grupo-whatsapp.png"
                alt="Comunidad VIP en WhatsApp"
                width={320}
                height={320}
                className=""
              />
            </div>

            <div>
              <p className="text-sm text-[#555] mb-4 font-medium">
                👉 Un lugar donde nunca estarás solo en tu aprendizaje
              </p>
              <ul className="space-y-3">
                {whatsappBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span style={{ color: "#22c55e" }} className="font-bold mt-0.5">✔</span>
                    <span className="text-[#444] leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIOS - Light
      ═══════════════════════════════════════════ */}
      <section className="py-12 px-4 overflow-hidden" style={{ background: "#f8f8f8", color: "#222" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-10" style={{ color: "#b8860b" }}>
            ⭐ ESTUDIANTES FELICES CON SU CANCIONERO
          </h2>

          {/* Infinite auto-scroll carousel */}
          <div className="relative">
            <div
              className="flex gap-6 animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]"
              style={{ width: "max-content" }}
            >
              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md border border-[#eee] text-left w-[320px] shrink-0"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="text-sm" style={{ color: "#eab308" }}>★</span>
                    ))}
                  </div>
                  <p className="text-sm text-[#555] italic mb-5 leading-relaxed">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#eee]"
                    />
                    <span className="text-sm font-semibold text-[#333]">{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECOND PRICING CTA - Light
      ═══════════════════════════════════════════ */}
      <section style={{ background: "#fff", color: "#222" }}>
        <PricingCTA />
      </section>

      {/* ═══════════════════════════════════════════
          FAQ - Light
      ═══════════════════════════════════════════ */}
      <section className="py-12 px-4" style={{ background: "#f8f8f8", color: "#222" }}>
        <div className="max-w-2xl mx-auto">
          <h3 className="font-bold text-lg mb-6 text-center" style={{ color: "#b8860b" }}>
            📋 PREGUNTAS FRECUENTES
          </h3>
          <FAQAccordion />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHATSAPP CONTACT - Light
      ═══════════════════════════════════════════ */}
      <section className="py-12 px-4 text-center" style={{ background: "#fff", color: "#222" }}>
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold mb-2 text-[#222]">
            ¿Tienes preguntas del ebook?
          </h2>
          <p className="text-sm text-[#666] mb-6">
            Dale click al siguiente botón y ponte en contacto con un asesor
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-lg font-bold text-white text-lg cursor-pointer hover:scale-105 transition-transform shadow-md"
            style={{ background: "#25d366" }}
          >
            <span className="text-2xl">💬</span>
            Whatsapp
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST BADGES + GUARANTEE - Light
      ═══════════════════════════════════════════ */}
      <section className="py-10 px-4" style={{ background: "#f8f8f8", color: "#222" }}>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: "✅", title: "Contenido aprobado" },
              { icon: "📧", title: "Entrega por E-mail" },
              { icon: "🔒", title: "Compra segura" },
              { icon: "🛡️", title: "Privacidad" },
            ].map((badge) => (
              <div
                key={badge.title}
                className="text-center p-4 rounded-lg bg-white shadow-sm border border-[#eee]"
              >
                <p className="text-2xl mb-2">{badge.icon}</p>
                <p className="text-xs font-bold text-[#22c55e]">{badge.title}</p>
              </div>
            ))}
          </div>

          {/* 7 day guarantee */}
          <div className="text-center mb-6">
            <Image
              src="/images/selo-garantia.webp"
              alt="Garantía de satisfacción 7 días"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>

          <p className="text-center text-sm font-bold mb-3" style={{ color: "#e53e3e" }}>
            ¡POLÍTICA Y GARANTÍA DE SATISFACCIÓN!
          </p>
          <p className="text-xs text-[#666] text-center max-w-xl mx-auto leading-relaxed">
            Tienes 7 días a partir de la compra para probar nuestro ebook. Si
            dentro de ese período nuestro ebook no cumple y/o supera tus
            expectativas, vamos a devolver tu dinero SIN hacer preguntas.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER - Dark
      ═══════════════════════════════════════════ */}
      <footer className="py-5 px-4 text-center" style={{ background: "#111", borderTop: "1px solid #333" }}>
        <p className="text-[10px] text-[#666] leading-relaxed max-w-xl mx-auto">
          Copyright © {new Date().getFullYear()} Tocar Desde Cero Guitarra | Todos los derechos
          reservados. DISCLAIMER: Este sitio no hace parte del sitio web de
          Facebook o Facebook, Inc. Tampoco está respaldado por Facebook de
          ninguna manera.
        </p>
      </footer>
    </div>
  );
}
