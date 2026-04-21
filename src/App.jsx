import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumbers = ["5511999999999", "5511888888888"];
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

  const showMaintenance = () => {
  const msg = document.createElement("div");
  msg.innerText = "Área de login em manutenção";
  msg.className =
    "fixed top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-lg z-50";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 2500);
};

  const nav = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Caminho", href: "#beneficios" },
    { name: "Primeiros Passos", href: "#como-funciona" },
    { name: "Depoimentos", href: "#contato" },
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
            onClick={() => {
              const msg = document.createElement("div");
              msg.innerText = "Área de login em manutenção";
              msg.className =
                "fixed top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-lg z-50";
              document.body.appendChild(msg);

              setTimeout(() => msg.remove(), 2500);
            }}
            className="hidden rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 md:block"
          >
            Login
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
                onClick={() => alert("Área de login em manutenção")}
                className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white"
              >
                Login
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
              Agência especilizada em crescimento de criadores
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Transforme suas lives em{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                renda real
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Na Oceans, você recebe suporte completo para iniciar ou evoluir nas lives, com acompanhamento proximo, estrategias validadas e acesso a oportunidades reais dentro das
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

            <div className="rounded-[2rem] border border-white/10 bg-[#07110F]/90 p-4 shadow-2xl shadow-black/40 backdrop-blur">

              <div className="rounded-[1.5rem] bg-gradient-to-br from-[#0b1220] to-[#0a0f1f] p-6">

                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/60">
                      Oceans
                    </p>
                    <h2 className="text-xl font-semibold text-white">
                      Benefícios de ser agenciado
                    </h2>
                  </div>
                </div>

                <div className="grid gap-4">

                  <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
                    <p className="text-sm text-white/60">
                      Treinamentos e Workshops
                    </p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      Aprenda exatamente o que fazer nas lives com estrategias que realmente funcionam.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
                      <p className="text-sm text-white/60">Acompanhamento Individual</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Você não fica perdido - Recebe o suporte próximo para evoluir com direção.
                      </p>
                    </div>

                    <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
                      <p className="text-sm text-white/60">Aulas de Inglês e Espanhol</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Amplie suas oportunidades e alcance novos publicos nas plataformas.
                      </p>
                    </div>

                  </div>

                  <div className="rounded-3xl bg-gradient-to-r from-[#0f172a] to-[#0b1220] p-5 text-white ring-1 ring-white/10">
                    <p className="text-sm text-white/60">
                      Sistema de incentivos
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Seu esforço e dedicação são reconhecidos com benefícios e incentivos internos.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-gradient-to-r from-[#0f172a] to-[#0b1220] p-5 text-white ring-1 ring-white/10">
                    <p className="text-sm text-white/60">
                      Premiações por desempenho
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Destaque-se e conquiste prêmios exclusivos.
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
              Agência oficial das principais plataformas
            </h2>
            <p className="mt-4 text-slate-600">
              Estrutura conectada ao TikTok e ao Alii para oferecer mais
              confiança, suporte e oportunidade para novos streamers.
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
                  Uma das maiores redes sociais atualmente, o Tiktok oferece alto potencial de visibilidade e crescimento, sendo ideal pra quem deseja se destacar e construir audiencia no mercado digital. Perfeito para todos os tipos de criadores, desde o iniciante ao mais experiente.
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
                  É um aplicativo focado exclusivamente em lives, voltado para criadores que ja possum experiencia no universo de streaming e buscam um ambiente mais direcionado e profissional.
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
              Como a Oceans surgiu
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 md:text-justify whitespace-pre-line">
              A Oceans não nasceu de teoria. Nasceu da prática.
              <br />
              <br />

              Em 2020, ainda no último semestre da faculdade de engenharia ambiental, surgiu o primeiro contato com esse mercado. Na época, a ideia era simples: ter uma renda própria enquanto finalizava a graduação.
              <br />
              <br />

              Mas tudo mudou muito rápido. Com o início da pandemia e o lockdown, veio também a oportunidade de se dedicar de verdade às lives. Foram horas, consistência e muito aprendizado na prática — e os primeiros resultados começaram a aparecer já nos primeiros meses.
              <br />
              <br />

              Com o tempo, veio o destaque dentro da agência em que fazia parte e, junto com isso, a oportunidade de ajudar outros criadores que estavam começando. Foi ali que surgiu um sonho maior: não só crescer, mas também ensinar o caminho.
              <br />
              <br />

              A transição para o TikTok trouxe ainda mais crescimento, novas possibilidades e a confirmação de que esse era um mercado com potencial real. E entao o sonho comecou a se tornar realidade.
              <br />
              <br />

              Mais do que uma agência, a Oceans surgiu com um propósito muito claro — oferecer liberdade. Liberdade de trabalhar de casa, de construir uma renda própria e de viver uma rotina mais leve e flexível.
              <br />
              <br />

              Ao longo dessa trajetória, as lives também proporcionaram algo que antes parecia distante: a possibilidade de conhecer o mundo. Nos últimos anos, foram 17 países visitados, com tudo sendo construído através desse mercado.
              <br />
              <br />

              E foi justamente essa vivência que definiu o propósito da agência: mostrar que existe um outro caminho possível.
              <br />
              <br />

              Chegamos com um olhar mais humano. Aqui, cada criador é visto como uma pessoa com objetivos, sonhos e uma história única — não apenas como números.
              <br />
              <br />

              Hoje, a agência existe para compartilhar conhecimento, encurtar caminhos e abrir portas para quem também quer transformar as lives em uma oportunidade real.
              <br />
              <br />
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 w-full max-w-sm ml-auto">

            <img
              src="/f1.jpeg"
              className="w-full aspect-video object-cover rounded-xl"
            />

            <img
              src="/f2.jpeg"
              className="w-full aspect-video object-cover rounded-xl"
            />

            <img
              src="/f3.jpeg"
              className="w-full aspect-video object-cover rounded-xl"
            />

            <img
              src="/f4.jpeg"
              className="w-full aspect-video object-cover rounded-xl"
            />

          </div>
        </div>
      </section>

      <section id="beneficios" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Agora que você ja conhece a Oceans, é importante entender se esse caminho é para você
            </h2>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Se você...
            </p>
          </div>

          <div className="mt-12 max-w-2xl">

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <ul className="space-y-5">
                {[
                  "Tem acesso a um celular e internet e quer começar a crescer no mercado digital.",
                  "Quer construir uma nova fonte de renda.",
                  "Busca a possibilidade de trabalhar de onde quiser.",
                  "Está disposto a se dedicar.",
                  "Já fez ou faz lives, mas sente que falta direcionamento, estratégia e suporte."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-lg text-slate-700">

                    {/* bolinha */}
                    <span className="mt-2.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shrink-0"></span>

                    <span>{item}</span>

                  </li>
                ))}
              </ul>

              <p className="mt-10 text-3xl font-bold text-blue-600">
                Você está no lugar certo!
              </p>

            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Primeiros passos
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Seja um agenciado
            </h2>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="grid gap-5 md:grid-cols-2 max-w-2xl w-full">

              {[
                "Quero trabalhar para o TikTok",
                "Quero trabalhar para o Alii",
              ].map((step, i) => (
                <div
                  key={step}
                  onClick={() => openWhatsapp(i === 0 ? "tiktok" : "alii")}
                  className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <p className="text-lg font-medium">{step}</p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-12 text-white shadow-xl shadow-blue-500/20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                Depoimentos
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Historias reais, resultados reais
              </h2>
              <p className="mt-4 text-lg text-blue-50/90">
                Um olhar mais proximo, sobre a trajetoria de criadores que estão conquistando seu espaço no mercado de lives.
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