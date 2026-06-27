import Image from "next/image";

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

const metrics = [
  ["4+", "Leadership platforms"],
  ["30", "UNDP Impact 2025 honorees"],
  ["ZW", "Rooted in Zimbabwe"],
  ["AF", "Pan-African outlook"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F2E8] text-[#12100C]">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #12100C 1px, transparent 1px)",
          backgroundSize: "9px 9px",
        }}
      />

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="text-sm font-bold uppercase tracking-[0.22em]">
          ZN
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
          <a className="transition hover:text-[#12100C]" href="#focus">
            Focus
          </a>
          <a className="transition hover:text-[#12100C]" href="#contact">
            Contact
          </a>
        </nav>
        <a
          href="mailto:ziphozenkosindlovu01@gmail.com"
          className="rounded-full border border-[#12100C]/15 px-4 py-2 text-sm font-semibold transition hover:border-[#12100C]/30 hover:bg-white/50"
        >
          Email
        </a>
      </header>

      <section
        id="top"
        className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-24"
      >
        <div className="absolute right-[-18rem] top-[-14rem] h-[38rem] w-[38rem] rounded-full border-[5rem] border-[#F3B712]/90" />
        <div className="absolute bottom-16 left-[-11rem] hidden h-72 w-72 rounded-full border-[1.5rem] border-white/80 lg:block" />

        <div className="relative z-10 max-w-3xl">
          <p className="inline-flex rounded-full border border-[#C89600]/25 bg-[#F3B712]/15 px-4 py-2 text-sm font-semibold text-[#5F4700]">
            UNDP Impact 2025 Recognition
          </p>

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
              className="inline-flex items-center justify-center rounded-full bg-[#F3B712] px-6 py-3 font-bold text-black shadow-[0_14px_32px_rgba(194,137,0,0.22)] transition hover:bg-[#DFA600]"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#12100C]/20 px-6 py-3 font-bold transition hover:bg-white/55"
            >
              Start a Conversation
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[31rem] lg:ml-auto">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#E6DDCB] shadow-2xl shadow-[#6C5A31]/20">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Ziphozenkosi Ndlovu"
              fill
              priority
              sizes="(min-width: 1024px) 31rem, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-5 right-5 rounded-lg border border-black/10 bg-white/85 p-4 shadow-xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8A6500]">
              Current work
            </p>
            <p className="mt-2 text-lg font-semibold">
              Advancing youth-led health and development communication.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-[#12100C]/10 bg-[#12100C] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-px sm:px-8 lg:grid-cols-4">
          {metrics.map(([value, label]) => (
            <div key={label} className="bg-[#12100C] py-8 text-center">
              <p className="text-3xl font-black text-[#F3B712]">{value}</p>
              <p className="mt-2 text-sm font-medium text-white/70">{label}</p>
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
        className="relative z-10 bg-[#EEE4D3] px-5 py-24 sm:px-8 lg:py-32"
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
                className="rounded-lg border border-[#12100C]/10 bg-[#FBF8F1] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
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
              className="rounded-lg border border-[#12100C]/10 bg-white/60 px-5 py-4 text-base font-semibold shadow-sm backdrop-blur"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="grid overflow-hidden rounded-lg bg-[#12100C] text-white lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#F3B712] p-8 text-[#12100C] sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              Recognition
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Featured by UNDP Impact 2025.
            </h2>
          </div>
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-xl leading-9 text-white/78">
              Recognised as one of 30 global volunteers for exceptional
              contributions to development communications through the United
              Nations Volunteers programme.
            </p>
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
        <a
          href="mailto:ziphozenkosindlovu01@gmail.com"
          className="mt-9 inline-flex items-center justify-center rounded-full bg-[#F3B712] px-8 py-4 font-bold text-black shadow-[0_14px_32px_rgba(194,137,0,0.22)] transition hover:bg-[#DFA600]"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
