export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold">
          Ziphozenkosi Ndlovu
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-400">
          National Facilitator • Youth Health Advocate • Community Leader
        </p>

        <p className="max-w-2xl mt-8 text-gray-500">
          Driving youth-led solutions for health, wellbeing, leadership,
          and sustainable development across Zimbabwe and beyond.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#about"
            className="rounded-full bg-white text-black px-6 py-3 font-semibold"
          >
            Learn More
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white px-6 py-3"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-gray-400 leading-8 text-lg">
          I am a youth advocate, health leader and community mobilizer
          passionate about meaningful youth participation, health equity,
          and sustainable development.
        </p>

        <p className="text-gray-400 leading-8 text-lg mt-6">
          As National Facilitator for the Young People’s Network on Health
          and Well-being (YPNHW), I work with young people, government,
          civil society and development partners to strengthen youth
          leadership and improve health outcomes.
        </p>
      </section>

      {/* Impact */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12">Impact</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-800 rounded-2xl p-8">
            <h3 className="text-5xl font-bold">100+</h3>
            <p className="text-gray-400 mt-4">Youth Reached</p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-8">
            <h3 className="text-5xl font-bold">20+</h3>
            <p className="text-gray-400 mt-4">Projects Supported</p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-8">
            <h3 className="text-5xl font-bold">10+</h3>
            <p className="text-gray-400 mt-4">Partnerships Built</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        <div className="border-l border-gray-700 pl-6">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">
              National Facilitator
            </h3>
            <p className="text-gray-500">
              Young People’s Network on Health & Well-being
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mb-8">
          Open to collaborations, speaking engagements,
          partnerships and youth development initiatives.
        </p>

        <a
          href="mailto:ziphozenkosi.ndlovu@acrnhealth.com"
          className="rounded-full bg-white text-black px-8 py-4 font-semibold inline-block"
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
}