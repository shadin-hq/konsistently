export default function Works() {
  return (
    <div>
      {/* Hero */}
      <section className="container-max py-32">
        <div className="max-w-3xl">
          <h1 className="text-hero font-serif font-bold mb-6">Our Works</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Explore the projects and transformations we've accomplished for our clients across industries.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container-max py-24">
        <div className="grid grid-cols-2 gap-12 mb-24">
          {/* Work 1 */}
          <div className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-blue-200 mb-2">01</div>
                <p className="text-gray-600">E-commerce Platform</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-serif font-bold mb-2">Modern E-Commerce Redesign</h3>
              <p className="text-gray-700 mb-4">
                Complete redesign and development of an e-commerce platform using Next.js and headless architecture. Increased conversion rate by 35%.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="text-xs bg-blue-50 text-accent px-3 py-1 rounded">Design</span>
                <span className="text-xs bg-blue-50 text-accent px-3 py-1 rounded">Development</span>
              </div>
              <a href="#" className="text-accent font-semibold">View project →</a>
            </div>
          </div>

          {/* Work 2 */}
          <div className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-purple-200 mb-2">02</div>
                <p className="text-gray-600">SaaS Platform</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-serif font-bold mb-2">Enterprise SaaS Development</h3>
              <p className="text-gray-700 mb-4">
                Built a full-stack SaaS platform with real-time analytics, user management, and custom integrations. Scaled to 10k+ users.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="text-xs bg-purple-50 text-accent px-3 py-1 rounded">Tech</span>
                <span className="text-xs bg-purple-50 text-accent px-3 py-1 rounded">Infrastructure</span>
              </div>
              <a href="#" className="text-accent font-semibold">View project →</a>
            </div>
          </div>

          {/* Work 3 */}
          <div className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-green-100 to-green-50 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-green-200 mb-2">03</div>
                <p className="text-gray-600">Brand Identity</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-serif font-bold mb-2">Comprehensive Brand Overhaul</h3>
              <p className="text-gray-700 mb-4">
                Complete brand identity redesign including logo, color system, typography, and design guidelines for a fintech startup.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="text-xs bg-green-50 text-accent px-3 py-1 rounded">Creative</span>
                <span className="text-xs bg-green-50 text-accent px-3 py-1 rounded">Branding</span>
              </div>
              <a href="#" className="text-accent font-semibold">View project →</a>
            </div>
          </div>

          {/* Work 4 */}
          <div className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-orange-200 mb-2">04</div>
                <p className="text-gray-600">Marketing Campaign</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-serif font-bold mb-2">Integrated Marketing Campaign</h3>
              <p className="text-gray-700 mb-4">
                End-to-end campaign strategy, creative direction, and execution across digital channels. Achieved 250% ROI in first quarter.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="text-xs bg-orange-50 text-accent px-3 py-1 rounded">Marketing</span>
                <span className="text-xs bg-orange-50 text-accent px-3 py-1 rounded">Strategy</span>
              </div>
              <a href="#" className="text-accent font-semibold">View project →</a>
            </div>
          </div>

          {/* Work 5 */}
          <div className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-red-100 to-red-50 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-red-200 mb-2">05</div>
                <p className="text-gray-600">AI Integration</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-serif font-bold mb-2">Custom AI Implementation</h3>
              <p className="text-gray-700 mb-4">
                Implemented AI-powered features including chatbots, recommendation engines, and predictive analytics. Reduced manual work by 60%.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="text-xs bg-red-50 text-accent px-3 py-1 rounded">AI</span>
                <span className="text-xs bg-red-50 text-accent px-3 py-1 rounded">Automation</span>
              </div>
              <a href="#" className="text-accent font-semibold">View project →</a>
            </div>
          </div>

          {/* Work 6 */}
          <div className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-indigo-200 mb-2">06</div>
                <p className="text-gray-600">Cloud Migration</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-serif font-bold mb-2">Enterprise Cloud Migration</h3>
              <p className="text-gray-700 mb-4">
                Migrated legacy systems to AWS with zero downtime. Improved performance and reduced infrastructure costs by 45%.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="text-xs bg-indigo-50 text-accent px-3 py-1 rounded">Infrastructure</span>
                <span className="text-xs bg-indigo-50 text-accent px-3 py-1 rounded">DevOps</span>
              </div>
              <a href="#" className="text-accent font-semibold">View project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-24">
        <div className="container-max">
          <div className="grid grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-serif font-bold text-accent mb-2">50+</div>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-accent mb-2">40+</div>
              <p className="text-gray-700">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-accent mb-2">$50M+</div>
              <p className="text-gray-700">Client Revenue Generated</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-accent mb-2">8 yrs</div>
              <p className="text-gray-700">Industry Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-text text-white py-24">
        <div className="container-max text-center">
          <h2 className="text-heading font-serif font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Your next project could be our next success story.
          </p>
          <a href="/contact" className="btn bg-white text-text hover:bg-gray-100">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}
