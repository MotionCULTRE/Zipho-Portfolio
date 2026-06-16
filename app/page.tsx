export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-6xl mx-auto px-6 py-32">
        <p className="text-emerald-600 font-semibold uppercase tracking-wide mb-4">
          Communications • Advocacy • Youth Development
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Ziphozenkosi Ndlovu
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-600 mb-8">
          Communications, Advocacy & Youth Development Professional
        </h2>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-10">
          Building healthier communities through strategic communications,
          youth leadership, public health advocacy, and digital innovation.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/ziphozenkosi-ndlovu-902ba3203/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Connect on LinkedIn
          </a>

          <a
            href="https://github.com/MotionCULTRE"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100 transition"
          >
            View GitHub
          </a>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">
            Impact at a Glance
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-emerald-600">
                500+
              </h3>
              <p className="mt-2 text-slate-600">
                Research institutions reached through ACRN campaigns
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-emerald-600">
                5+
              </h3>
              <p className="mt-2 text-slate-600">
                Years of communications and advocacy experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-emerald-600">
                30
              </h3>
              <p className="mt-2 text-slate-600">
                Global UNDP Knowledge Project Impact honorees
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-emerald-600">
                National
              </h3>
              <p className="mt-2 text-slate-600">
                Facilitator, AfriYAN Zimbabwe
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">
          About
        </h2>

        <p className="text-lg leading-relaxed text-slate-600 max-w-4xl">
          I am a communications, advocacy and youth development
          professional passionate about strengthening health systems,
          advancing health equity and empowering young people to
          influence policy and social change.
        </p>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">
            Experience
          </h2>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold">
                Communications Associate
              </h3>
              <p className="text-emerald-600">
                Africa Clinical Research Network (ACRN)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold">
                Multimedia Content Developer
              </h3>
              <p className="text-emerald-600">
                United Nations Office of the Special Adviser on Africa
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold">
                National Facilitator & Communications Focal Point
              </h3>
              <p className="text-emerald-600">
                AfriYAN Zimbabwe / YPNHW
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold">
                Digital Communications Consultant
              </h3>
              <p className="text-emerald-600">
                Motion Culture Creations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">
          Let's Connect
        </h2>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:ziphozenkosindlovu01@gmail.com"
            className="bg-slate-900 text-white px-6 py-3 rounded-lg"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/ziphozenkosi-ndlovu-902ba3203/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-300 px-6 py-3 rounded-lg"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/MotionCULTRE"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-300 px-6 py-3 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}