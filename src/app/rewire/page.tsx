import Link from 'next/link'

export default function Rewire() {
  return (
    <div>
      {/* Hero */}
      <section className="container-max py-32">
        <div className="max-w-3xl">
          <h1 className="text-hero font-serif font-bold mb-6">Rewire: Custom Solutions for SMEs</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Strategic consulting and forward deployment engineering tailored to your unique business challenges. Modernize your tech stack, optimize operations, and scale with confidence.
          </p>
        </div>
      </section>

      {/* What is Rewire */}
      <section className="bg-gray-50 py-24">
        <div className="container-max">
          <h2 className="text-heading font-serif font-bold mb-12">What is Rewire?</h2>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-12">
            Rewire is our custom engineering and consulting service designed for businesses ready to transform. Unlike our subscription model, Rewire is built for complex, mission-critical projects that require deep expertise and ongoing partnership.
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Strategic Consulting</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Technology roadmap planning</li>
                <li>✓ Architecture design & review</li>
                <li>✓ Process optimization</li>
                <li>✓ Risk assessment & mitigation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Forward Deployment</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Custom development</li>
                <li>✓ Infrastructure setup</li>
                <li>✓ Team augmentation</li>
                <li>✓ Knowledge transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rewire */}
      <section className="container-max py-24">
        <h2 className="text-heading font-serif font-bold mb-16">Why Choose Rewire</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="border border-gray-300 p-8 rounded-none">
            <h3 className="text-xl font-serif font-bold mb-4">Tailored Approach</h3>
            <p className="text-gray-700">
              No cookie-cutter solutions. We understand your business deeply and craft solutions that fit perfectly.
            </p>
          </div>
          <div className="border border-gray-300 p-8 rounded-none">
            <h3 className="text-xl font-serif font-bold mb-4">Expert Team</h3>
            <p className="text-gray-700">
              Senior engineers and architects with proven track records in enterprise transformation.
            </p>
          </div>
          <div className="border border-gray-300 p-8 rounded-none">
            <h3 className="text-xl font-serif font-bold mb-4">Long-Term Partnership</h3>
            <p className="text-gray-700">
              We don't just deliver and leave. We partner with you through implementation and beyond.
            </p>
          </div>
          <div className="border border-gray-300 p-8 rounded-none">
            <h3 className="text-xl font-serif font-bold mb-4">Cutting-Edge Tech</h3>
            <p className="text-gray-700">
              Leverage the latest in AI, cloud infrastructure, and modern development practices.
            </p>
          </div>
          <div className="border border-gray-300 p-8 rounded-none">
            <h3 className="text-xl font-serif font-bold mb-4">Transparent Pricing</h3>
            <p className="text-gray-700">
              Clear scope, timeline, and cost. No surprises. No hidden fees.
            </p>
          </div>
          <div className="border border-gray-300 p-8 rounded-none">
            <h3 className="text-xl font-serif font-bold mb-4">Measurable Results</h3>
            <p className="text-gray-700">
              Every project is measured against clear KPIs and business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-gray-50 py-24">
        <div className="container-max">
          <h2 className="text-heading font-serif font-bold mb-16">Success Stories</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="border border-gray-300 bg-white p-8">
              <div className="text-sm text-accent font-bold mb-2">CASE STUDY</div>
              <h3 className="text-xl font-serif font-bold mb-3">Enterprise Migration</h3>
              <p className="text-gray-700 mb-4">
                Helped a mid-size company migrate from legacy infrastructure to cloud-native architecture, reducing costs by 40%.
              </p>
              <a href="#" className="text-accent font-semibold">Read full case study →</a>
            </div>
            <div className="border border-gray-300 bg-white p-8">
              <div className="text-sm text-accent font-bold mb-2">CASE STUDY</div>
              <h3 className="text-xl font-serif font-bold mb-3">AI Integration</h3>
              <p className="text-gray-700 mb-4">
                Implemented custom AI solutions that automated 60% of manual workflows, freeing up team capacity.
              </p>
              <a href="#" className="text-accent font-semibold">Read full case study →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-max py-24">
        <h2 className="text-heading font-serif font-bold mb-16">Our Process</h2>
        <div className="space-y-8">
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl font-serif font-bold text-white">1</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-serif font-bold mb-2">Discovery</h3>
              <p className="text-gray-700">
                We start with a comprehensive discovery phase. We understand your business, current challenges, goals, and constraints.
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl font-serif font-bold text-white">2</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-serif font-bold mb-2">Strategy & Planning</h3>
              <p className="text-gray-700">
                We develop a detailed roadmap, including architecture design, technology stack recommendations, and implementation timeline.
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl font-serif font-bold text-white">3</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-serif font-bold mb-2">Implementation</h3>
              <p className="text-gray-700">
                Our team executes the plan with precision, keeping you updated every step of the way. Regular check-ins and transparency.
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl font-serif font-bold text-white">4</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-serif font-bold mb-2">Handoff & Support</h3>
              <p className="text-gray-700">
                We transfer knowledge to your team and provide ongoing support to ensure long-term success and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-text text-white py-24">
        <div className="container-max text-center">
          <h2 className="text-heading font-serif font-bold mb-6">
            Ready to Rewire Your Business?
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help you modernize, optimize, and scale.
          </p>
          <Link href="/contact" className="btn bg-white text-text hover:bg-gray-100">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
