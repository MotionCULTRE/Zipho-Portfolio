import Image from "next/image";
import CreativePortfolio from "./components/CreativePortfolio";

const recognitionUrl =
  "https://www.undp.org/arab-states/stories/30-volunteers-drive-undps-knowledge-project-impact-2025";

const roles = [
  {
    title: "President",
    organization: "AfriYAN Zimbabwe",
    detail: "Leading youth networks and cross-sector advocacy for adolescent and young people's wellbeing.",
  },
  {
    title: "National Facilitator",
    organization: "YPNHW Zimbabwe",
    detail: "Coordinating youth voices, health priorities, and community-centered engagement.",
  },
  {
    title: "Country Representative",
    organization: "UNITED! Movement Zimbabwe",
    detail: "Representing local priorities in a broader movement for collaboration and impact.",
  },
];

const focusAreas = [
  "Strategic communications",
  "Youth development",
  "Public health advocacy",
  "Clinical research engagement",
  "Stakeholder relations",
  "Digital campaigns",
  "Knowledge management",
  "Community mobilisation",
];

const creativePosts = [
  {
    title: "Campaign visuals",
    type: "Coming Soon",
    description:
      "Selected campaign artwork, digital graphics, and communications visuals will be added here.",
    image: "/images/creative/campaign-visuals.png",
  },
  {
    title: "Posters/flyers",
    type: "Coming Soon",
    description:
      "Event posters, flyers, announcements, and promotional layouts are being prepared.",
    image: "/images/creative/posters-flyers.jpg",
  },
  {
    title: "Event logos/themes",
    type: "Coming Soon",
    description:
      "Event marks, theme concepts, badges, and visual identity pieces will sit in this collection.",
    image: "/images/creative/event-logos-themes.png",
  },
  {
    title: "Designs & concepts",
    type: "Coming Soon",
    description:
      "Additional designs, layout concepts, visual systems, and creative direction samples will be added next.",
    image: "/images/creative/designs-concepts.jpg",
  },
];

const metrics = [
  ["4+", "Leadership platforms"],
  ["30", "UNDP Impact 2025 honorees"],
  ["ZW", "Rooted in Zimbabwe"],
  ["AF", "Pan-African outlook"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF9F5] text-[#15130F]">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#15130F 1px, transparent 1px), linear-gradient(90deg, #15130F 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#top"
          aria-label="Ziphozenkosi Ndlovu home"
          className="relative h-12 w-12"
        >
          <Image
            src="/favicon.png"
            alt=""
            fill
            sizes="48px"
            className="object-contain"
          />
        </a>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-sm font-medium text-[#4D473B] md:flex"
        >
          <a className="transition hover:text-[#12100C]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#12100C]" href="#leadership">
            Leadership
          </a>
          <a className="transition hover:text-[#12100C]" href="#creative-work">
            Creative
          </a>
          <a className="transition hover:text-[#12100C]" href="#focus">
            Focus
          </a>
          <a className="transition hover:text-[#12100C]" href="#contact">
            Contact
          </a>
        </nav>
        <a
          href="mailto:ziphozenkosindlovu01@gmail.com"
          className="rounded-full border border-[#15130F]/15 bg-white/70 px-4 py-2 text-sm font-semibold shadow-sm transition hover:border-[#15130F]/25 hover:bg-white"
        >
          Email
        </a>
      </header>

      <section
        id="top"
        className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-24"
      >
        <div className="absolute right-[-14rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full border-[4rem] border-[#F3B712]/35" />
        <div className="absolute bottom-16 left-[-10rem] hidden h-72 w-72 rounded-full border-[1.5rem] border-[#2F7D74]/10 lg:block" />

        <div className="relative z-10 max-w-3xl">
          <a
            href={recognitionUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-[#C89600]/20 bg-white/80 px-4 py-2 text-sm font-semibold text-[#735600] shadow-sm transition hover:border-[#C89600]/35 hover:bg-[#FFF7D6]"
          >
            UNDP Impact 2025 Recognition
          </a>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.96] tracking-tight text-[#12100C] sm:text-7xl lg:text-8xl">
            Ziphozenkosi <span className="font-light">Ndlovu</span>
          </h1>

          <p className="mt-7 max-w-2xl text-xl font-semibold leading-snug text-[#2E2A23] sm:text-2xl">
            Youth leadership, health advocacy, and strategic communications
            for development across Zimbabwe and Africa.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5C5548] sm:text-lg">
            I work at the intersection of public health, clinical research,
            community mobilisation, and communications, helping institutions
            listen better, engage young people meaningfully, and turn insight
            into visible action.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#leadership"
              className="inline-flex items-center justify-center rounded-full bg-[#F3B712] px-6 py-3 font-bold text-black shadow-[0_14px_30px_rgba(194,137,0,0.16)] transition hover:bg-[#DFA600]"
            >
              Explore Work
            </a>
            <a
              href="#creative-work"
              className="inline-flex items-center justify-center rounded-full bg-[#2F7D74] px-6 py-3 font-bold text-white shadow-[0_14px_30px_rgba(47,125,116,0.16)] transition hover:bg-[#24645D]"
            >
              View Creative Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#15130F]/15 bg-white/65 px-6 py-3 font-bold transition hover:bg-white"
            >
              Start a Conversation
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[31rem] lg:ml-auto">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#E6DDCB] shadow-2xl shadow-[#6C5A31]/20">
            <Image
              src="/images/Profile.png"
              alt="Portrait of Ziphozenkosi Ndlovu"
              fill
              priority
              sizes="(min-width: 1024px) 31rem, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-5 right-5 rounded-lg border border-black/10 bg-white/85 p-4 shadow-xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#7B620E]">
              Current work
            </p>
            <p className="mt-2 text-lg font-semibold">
              Advancing youth-led health and development communication.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-[#15130F]/10 bg-white/70 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-px sm:px-8 lg:grid-cols-4">
          {metrics.map(([value, label]) => (
            <div key={label} className="py-8 text-center">
              <p className="text-3xl font-black text-[#2F7D74]">{value}</p>
              <p className="mt-2 text-sm font-medium text-[#5C5548]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.65fr_1fr] lg:py-32"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A7200]">
            About
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Clear strategy for human-centered impact.
          </h2>
        </div>
        <div className="space-y-7 text-lg leading-8 text-[#5C5548]">
          <p>
            I am a communications and youth development professional passionate
            about strengthening health systems, amplifying young voices, and
            creating opportunities for meaningful youth participation in
            development.
          </p>
          <p>
            My work spans strategic communications, public health advocacy,
            clinical research engagement, stakeholder relations, and leadership
            across national, regional, and international platforms.
          </p>
        </div>
      </section>

      <section
        id="leadership"
        className="relative z-10 bg-[#F1F6F2] px-5 py-24 sm:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A7200]">
              Leadership
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Representation with practical responsibility.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {roles.map((role) => (
              <article
                key={role.organization}
                className="rounded-lg border border-[#15130F]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9A7200]">
                  {role.title}
                </p>
                <h3 className="mt-4 text-2xl font-black">{role.organization}</h3>
                <p className="mt-5 leading-7 text-[#5C5548]">{role.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="creative-work"
        className="relative z-10 bg-[#FDFBF4] px-5 py-24 sm:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A7200]">
                Creative Portfolio
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#15130F] sm:text-5xl">
                A focused home for upcoming design and visual direction pieces.
              </h2>
            </div>
            <div className="max-w-3xl lg:ml-auto">
              <p className="text-lg leading-8 text-[#5C5548]">
                This section is reserved for selected portfolio elements across
                campaign visuals, posters and flyers, event branding,
                design concepts, and creative direction.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2F7D74] px-6 py-3 font-bold text-white shadow-[0_14px_30px_rgba(47,125,116,0.16)] transition hover:bg-[#24645D]"
              >
                Request Creative Portfolio
              </a>
            </div>
          </div>

          <CreativePortfolio posts={creativePosts} />
        </div>
      </section>

      <section
        id="focus"
        className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-32"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A7200]">
            Focus Areas
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Communications that make systems easier to understand.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5C5548]">
            From campaign planning to stakeholder alignment, the work centers
            on making health and development priorities more legible, more
            participatory, and more useful to communities.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {focusAreas.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#15130F]/10 bg-white px-5 py-4 text-base font-semibold shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="grid overflow-hidden rounded-lg border border-[#15130F]/10 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#FFF1B8] p-8 text-[#15130F] sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              Recognition
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Featured by UNDP Impact 2025.
            </h2>
          </div>
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-xl leading-9 text-[#5C5548]">
              Recognised as one of 30 global volunteers for exceptional
              contributions to development communications through the United
              Nations Volunteers programme.
            </p>
            <a
              href={recognitionUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2F7D74] px-6 py-3 font-bold text-white transition hover:bg-[#24645D]"
            >
              View Recognition
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-4xl px-5 pb-24 text-center sm:px-8 lg:pb-32"
      >
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9A7200]">
          Contact
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          Let&apos;s create impact together.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5C5548]">
          Open to collaborations, partnerships, speaking engagements, advocacy
          initiatives, and strategic communications projects.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:ziphozenkosindlovu01@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-[#F3B712] px-8 py-4 font-bold text-black shadow-[0_14px_30px_rgba(194,137,0,0.16)] transition hover:bg-[#DFA600]"
          >
            Email Me
          </a>
          <a
            href="https://wa.me/263776251043"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#2F7D74] px-8 py-4 font-bold text-white shadow-[0_14px_30px_rgba(47,125,116,0.16)] transition hover:bg-[#24645D]"
          >
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/ziphozenkosi-ndlovu-902ba3203/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#15130F]/15 bg-white px-8 py-4 font-bold transition hover:border-[#15130F]/30"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
