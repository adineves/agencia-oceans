import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumbers = ["5511994866384", "5511888888888"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("wp_index");
    if (saved) setIndex(Number(saved));
  }, []);

  const openWhatsapp = () => {
    const number = whatsappNumbers[index];
    const next = (index + 1) % whatsappNumbers.length;

    localStorage.setItem("wp_index", String(next));
    setIndex(next);

    const msg = encodeURIComponent(
      "Olá! Vim pelo site da Oceans e quero fazer parte."
    );

    window.open(`https://wa.me/${number}?text=${msg}`, "_blank");
  };

  const nav = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center">
            <img src="/logo.png" alt="Oceans logo" className="h-14 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-base font-semibold text-slate-600 transition hover:text-slate-900"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            onClick={openWhatsapp}
            className="hidden rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 md:block"
          >
            WhatsApp
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-slate-200 px-3 py-2 text-slate-700 md:hidden"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 px-6 pb-4 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-slate-700"
                >
                  {item.name}
                </a>
              ))}

              <button
                onClick={openWhatsapp}
                className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white"
              >
                WhatsApp
              </button>
            </div>
          </div>
        )}
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,107,255,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(122,77,255,0.18),_transparent_28%),linear-gradient(to_bottom,_#f8fbff,_#ffffff)] py-24"
      >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold text-blue-600">
              Agência especializada em crescimento de criadores
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Transforme suas lives em{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                renda real
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Na Oceans, você recebe suporte completo para iniciar ou evoluir nas lives, com acompanhamento próximo, estratégias validadas e acesso a oportunidades reais dentro das plataformas.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={openWhatsapp}
                className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-white font-semibold transition hover:scale-105"
              >
                Quero fazer parte
              </button>

              <a
                href="#sobre"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Conhecer a agência
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-[2rem] border border-white/70 bg-white/90 p-4 shadow-2xl shadow-slate-200/80 backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-50 to-blue-50 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Oceans
                    </p>
                    <h2 className="text-xl font-semibold text-slate-900">
                      Beneficios em ser agenciado
                    </h2>
                  </div>

                  <div className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white">
                    Oficial
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <p className="text-sm text-slate-500">
                      Treinamentos e workshops - Recrutamento facilitado
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-950">
                      Aprenda exatamente o que fazer nas lives com estratégias que realmente funcionam
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                      <p className="text-sm text-slate-500">Suporte - Acompanhamento individual</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">
                        Você não fica perdido, recebe suporte próximo para evoluir com direção
                      </p>
                    </div>

                    <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                      <p className="text-sm text-slate-500">Crescimento - Aulas de inglês e espanhol</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">
                        Amplie suas oportunidades e alcance novos públicos nas plataformas
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <p className="text-sm text-slate-500">
                      Presença digital profissional
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Sistema de incentivos
                      Seu esforço e dedicação são reconhecidos com benefícios e incentivos internos
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <p className="text-sm text-slate-500">
                      Incentivo profissional
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Premiações por desempenho
                      Destaque-se e conquiste premios exclusivos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Plataformas
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Agência Parceira Oficial de Plataformas de Streaming
            </h2>
            <p className="mt-4 text-slate-600">
              Trabalhamos em parceria com plataformas de streaming, oferecendo oportunidades reais de crescimento e desenvolvimento no mercado de lives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]"
            >
              <div className="flex min-h-[220px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-slate-50 to-blue-50">
                <img
                  src="/tiktok.png"
                  alt="TikTok"
                  className="h-24 w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-slate-950">TikTok</h3>
                <p className="mt-2 text-slate-600">
                  Plataforma global com grande alcance, ideal para crescimento,
                  consistência e novas oportunidades em lives.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]"
            >
              <div className="flex min-h-[220px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-slate-50 to-violet-50">
                <img
                  src="/alii.png"
                  alt="Alii"
                  className="h-24 w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-slate-950">Alii</h3>
                <p className="mt-2 text-slate-600">
                  Mais uma frente de atuação para ampliar presença, performance
                  e oportunidades dentro do universo das lives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Sobre
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Se você se identifica com isso, a Oceans é pra você
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Você quer começar nas lives ou já tentou antes, mas não teve os resultados que esperava.
              Sente que falta direcionamento, estratégia e alguém para te mostrar o caminho certo.

              Às vezes parece que está fazendo tudo sozinha, sem saber o que realmente funciona — e isso acaba desmotivando.

              Se você busca uma forma real de crescer e transformar suas lives em uma oportunidade de renda, você está no lugar certo.
            </p>
          </motion.div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg font-semibold text-slate-950">
                Atendimento humanizado
              </h3>
              <p className="mt-2 text-slate-600">
                Apoio próximo para facilitar a entrada de novos agenciados.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg font-semibold text-slate-950">
                Mais clareza no processo
              </h3>
              <p className="mt-2 text-slate-600">
                Tudo organizado para tornar o contato mais simples, direto e
                profissional.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="beneficios" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Benefícios
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Estrutura pensada para gerar mais confiança e oportunidade
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Suporte de verdade", "Acompanhamento próximo para quem está começando."],
              ["Mais organização", "Processos mais claros para facilitar o recrutamento."],
              ["Crescimento", "Estratégia e apoio para evoluir nas plataformas."],
              ["Oportunidade", "Um ambiente pensado para novas possibilidades de renda."],
            ].map(([title, text], i) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
              >
                {/* Número igual ao outro bloco */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-[#694eef] to-[#2e9cfe] text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-2 text-white/70">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Como funciona
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Um processo simples, direto e pensado para facilitar sua entrada
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Entre em contato com a equipe",
              "Entenda como a agência funciona",
              "Receba orientação para começar",
              "Desenvolva sua rotina e acompanhe sua evolução",
            ].map((step, i) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-lg font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-12 text-white shadow-xl shadow-blue-500/20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                Comece agora
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Dê o próximo passo com uma estrutura mais profissional
              </h2>
              <p className="mt-4 text-lg text-blue-50/90">
                Entre em contato com a equipe da Oceans e descubra como funciona
                o processo para fazer parte da agência.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <button
                onClick={openWhatsapp}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.05]"
              >
                Falar com a equipe
              </button>
              <p className="text-sm text-blue-100/90">
                Atendimento rápido e direcionamento personalizado
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <img
                src="/logo.png"
                alt="Oceans logo"
                className="mb-4 h-12 w-auto"
              />
              <p className="text-sm text-slate-400">
                Conectando novos talentos ao universo das lives com estrutura,
                suporte e oportunidade.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Redes Sociais</h3>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <a
                  href="https://www.instagram.com/agencia_oceans?igsh=MmpwaHd2cTVsY3F5&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@agencia_oceans?_r=1&_t=ZS-94qqTO6GVIS"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  TikTok
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Contato</h3>
              <button
                onClick={openWhatsapp}
                className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:scale-[1.03]"
              >
                Falar no WhatsApp
              </button>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Oceans. Todos os direitos reservados.
            <br />
            Desenvolvido por{" "}
            <a
              href="https://avus-digital.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white"
            >
              Avus Digital
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}