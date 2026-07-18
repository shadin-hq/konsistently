export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="container-max py-32">
        <div className="max-w-3xl">
          <h1 className="text-hero font-serif font-bold mb-6">About Konsistently</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            We are an AI-first technology services company dedicated to helping businesses modernize and scale through innovative solutions in creative, marketing, tech, and AI.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-24">
        <div className="container-max">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h2 className="text-heading font-serif font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To empower SMEs and enterprises with accessible, AI-driven technology services that drive real business outcomes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe technology should work for you, not the other way around.
              </p>
            </div>
            <div>
              <h2 className="text-heading font-serif font-bold mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="text-lg">
                  <span className="font-semibold text-accent">Consistency</span> - Reliable delivery, every time
                </li>
                <li className="text-lg">
                  <span className="font-semibold text-accent">Innovation</span> - Forward-thinking solutions
                </li>
                <li className="text-lg">
                  <span className="font-semibold text-accent">Partnership</span> - Your success is our success
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container-max py-24">
        <h2 className="text-heading font-serif font-bold mb-16 text-center">What We Do</h2>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Creative Services</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brand identity, design systems, and visual storytelling that captivates your audience.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Marketing Services</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Strategy, content, and campaigns that drive growth and engagement.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Tech Services</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Development, infrastructure, and optimization for modern applications.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">AI Services</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Integration of AI technologies to enhance capabilities and streamline operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
