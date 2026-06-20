import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F3EFE7] text-[#111111] min-h-screen overflow-hidden relative">
      {/* Paper Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />
        {/* Hero */}
  <section className="relative min-h-screen flex items-center overflow-hidden px-6">
    {/* Yellow Ring */}
    <div className="absolute right-[-350px] top-[-100px] h-[800px] w-[800px] rounded-full border-[120px] border-[#F5B800]" />

    {/* Decorative Circle */}
    <div className="absolute left-[-100px] bottom-[-100px] h-[250px] w-[250px] rounded-full border-[20px] border-white/80" />

    <div className="max-w-7xl mx-auto w-full relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <span className="inline-flex rounded-full border border-[#F5B800]/30 bg-[#F5B800]/10 px-4 py-2 text-sm font-medium">
            UNDP Impact 2025 Recognition
          </span>

          <h1 className="mt-8 leading-none">
            <span className="block text-6xl md:text-8xl font-light tracking-tight">
              Ziphozenkosi
            </span>

            <span className="block text-6xl md:text-8xl font-black tracking-tight">
              Ndlovu
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl font-medium">
            Youth Leadership • Health Advocacy • Strategic Communications
          </p>

          <p className="max-w-2xl mt-8 text-lg text-gray-600 leading-relaxed">
            Building healthier futures through strategic communications,
            clinical research advocacy, and youth-led development across
            Zimbabwe and Africa.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-[#F5B800] text-black px-6 py-3 font-semibold transition hover:bg-[#D9A000]"
            >
              Discover My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black/20 px-6 py-3 transition hover:bg-black/5"
            >
              Let's Connect
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
            <span>🇿🇼 Zimbabwe</span>
            <span>🌍 Pan-African Impact</span>
            <span>🎙️ Communications</span>
            <span>🧬 Clinical Research</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/profile.jpg"
            alt="Ziphozenkosi Ndlovu"
            width={420}
            height={420}
            priority
            className="rounded-full object-cover border-4 border-[#F5B800]/20 shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>

  {/* Credibility Strip */}
  <section className="border-y border-black/10">
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="font-semibold">President</h3>
          <p className="text-gray-500 text-sm mt-2">
            AfriYAN Zimbabwe
          </p>
        </div>

        <div>
          <h3 className="font-semibold">National Facilitator</h3>
          <p className="text-gray-500 text-sm mt-2">
            YPNHW Zimbabwe
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Country Representative</h3>
          <p className="text-gray-500 text-sm mt-2">
            UNITED! Movement
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Recognised by UNDP</h3>
          <p className="text-gray-500 text-sm mt-2">
            Impact 2025
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* About */}
  <section
    id="about"
    className="max-w-5xl mx-auto px-6 py-32"
  >
    <h2 className="text-5xl font-bold mb-10">
      About Me
    </h2>

    <p className="text-xl text-gray-600 leading-relaxed">
      I am a communications and youth development professional
      passionate about strengthening health systems, amplifying
      young voices, and creating opportunities for meaningful
      youth participation in development.
    </p>

    <p className="text-xl text-gray-600 leading-relaxed mt-8">
      My work spans strategic communications, public health
      advocacy, clinical research engagement, stakeholder
      relations, and youth leadership across national,
      regional, and international platforms.
    </p>
  </section>

  {/* Leadership */}
  <section className="max-w-6xl mx-auto px-6 py-32">
    <h2 className="text-5xl font-bold mb-14">
      Leadership & Representation
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="rounded-3xl border border-black/10 bg-white/50 backdrop-blur-sm p-8 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold mb-4">
          President
        </h3>
        <p className="text-gray-600">
          AfriYAN Zimbabwe
        </p>
      </div>

      <div className="rounded-3xl border border-black/10 bg-white/50 backdrop-blur-sm p-8 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold mb-4">
          National Facilitator
        </h3>
        <p className="text-gray-600">
          Young People's Network on Health & Well-being
        </p>
      </div>

      <div className="rounded-3xl border border-black/10 bg-white/50 backdrop-blur-sm p-8 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold mb-4">
          Country Representative
        </h3>
        <p className="text-gray-600">
          UNITED! Movement Zimbabwe
        </p>
      </div>
    </div>
  </section>

  {/* Focus Areas */}
  <section className="max-w-6xl mx-auto px-6 py-32">
    <h2 className="text-5xl font-bold mb-14">
      Focus Areas
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        "Strategic Communications",
        "Youth Development",
        "Public Health Advocacy",
        "Clinical Research Communications",
        "Stakeholder Engagement",
        "Digital Campaigns",
        "Knowledge Management",
        "Community Mobilisation",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-black/10 bg-white/50 backdrop-blur-sm p-6 hover:shadow-lg transition"
        >
          {item}
        </div>
      ))}
    </div>
  </section>

  {/* Recognition */}
  <section className="max-w-5xl mx-auto px-6 py-32 text-center">
    <span className="text-sm uppercase tracking-widest text-[#F5B800] font-semibold">
      Recognition
    </span>

    <h2 className="text-5xl font-bold mt-4">
      Featured by UNDP Impact 2025
    </h2>

    <p className="text-xl text-gray-600 mt-8 leading-relaxed">
      Recognised as one of 30 global volunteers for exceptional
      contributions to development communications through the
      United Nations Volunteers programme.
    </p>
  </section>

  {/* Contact */}
  <section
    id="contact"
    className="max-w-4xl mx-auto px-6 py-32 text-center"
  >
    <h2 className="text-5xl font-bold">
      Let's Create Impact Together
    </h2>

    <p className="text-gray-600 text-lg mt-6">
      Open to collaborations, partnerships, speaking engagements,
      advocacy initiatives, and strategic communications projects.
    </p>

    <a
      href="mailto:ziphozenkosindlovu01@gmail.com"
      className="inline-block mt-10 rounded-full bg-[#F5B800] text-black px-8 py-4 font-semibold hover:bg-[#D9A000] transition"
    >
      Get In Touch
    </a>
  </section>
</main>
  );
}