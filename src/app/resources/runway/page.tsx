export default function Runway() {
  return (
    <div>
      {/* Hero */}
      <section className="container-max py-32">
        <div className="max-w-3xl">
          <h1 className="text-hero font-serif font-bold mb-6">Runway</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our AI tools lab and experimentation space. Discover cutting-edge tools, prototypes, and experiments we're building.
          </p>
        </div>
      </section>

      {/* What is Runway */}
      <section className="bg-gray-50 py-24">
        <div className="container-max">
          <h2 className="text-heading font-serif font-bold mb-8">About Runway</h2>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-12">
            Runway is our innovation lab where we experiment with emerging technologies, build tools, and explore new possibilities. It's where ideas become prototypes and prototypes become products.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="border border-gray-300 p-8">
              <h3 className="text-lg font-serif font-bold mb-3">Experimentation</h3>
              <p className="text-gray-700">
                We constantly test new AI models, frameworks, and approaches to find what works best.
              </p>
            </div>
            <div className="border border-gray-300 p-8">
              <h3 className="text-lg font-serif font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                Building tools and solutions that push the boundaries of what's possible with AI.
              </p>
            </div>
            <div className="border border-gray-300 p-8">
              <h3 className="text-lg font-serif font-bold mb-3">Learning</h3>
              <p className="text-gray-700">
                Sharing our findings and helping the community learn about AI technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Experiments */}
      <section className="container-max py-24">
        <h2 className="text-heading font-serif font-bold mb-16">Current Projects</h2>
        <div className="grid grid-cols-2 gap-12">
          {/* Project 1 */}
          <div className="border border-gray-300 p-8 hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-48 rounded mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-blue-200 mb-2">AI</div>
                <p className="text-gray-600">Text Generation</p>
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Content Generator</h3>
            <p className="text-gray-700 mb-6">
              AI-powered tool for generating marketing copy, blog posts, and creative content. Trained on best practices and optimized for conversion.
            </p>
            <div className="flex gap-2 mb-6">
              <span className="text-xs bg-blue-50 text-accent px-3 py-1 rounded">AI</span>
              <span className="text-xs bg-blue-50 text-accent px-3 py-1 rounded">LLM</span>
            </div>
            <a href="#" className="text-accent font-semibold">Try it →</a>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-300 p-8 hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 h-48 rounded mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-purple-200 mb-2">AI</div>
                <p className="text-gray-600">Image Analysis</p>
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Image Recognition Suite</h3>
            <p className="text-gray-700 mb-6">
              Tools for analyzing, tagging, and organizing images using computer vision. Perfect for e-commerce and media management.
            </p>
            <div className="flex gap-2 mb-6">
              <span className="text-xs bg-purple-50 text-accent px-3 py-1 rounded">Computer Vision</span>
              <span className="text-xs bg-purple-50 text-accent px-3 py-1 rounded">ML</span>
            </div>
            <a href="#" className="text-accent font-semibold">Try it →</a>
          </div>

          {/* Project 3 */}
          <div className="border border-gray-300 p-8 hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-green-100 to-green-50 h-48 rounded mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-green-200 mb-2">AI</div>
                <p className="text-gray-600">Data Analytics</p>
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Analytics Dashboard</h3>
            <p className="text-gray-700 mb-6">
              AI-driven analytics platform that provides insights from your data. Automated reporting and predictive analytics.
            </p>
            <div className="flex gap-2 mb-6">
              <span className="text-xs bg-green-50 text-accent px-3 py-1 rounded">Analytics</span>
              <span className="text-xs bg-green-50 text-accent px-3 py-1 rounded">Data</span>
            </div>
            <a href="#" className="text-accent font-semibold">Try it →</a>
          </div>

          {/* Project 4 */}
          <div className="border border-gray-300 p-8 hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 h-48 rounded mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-orange-200 mb-2">AI</div>
                <p className="text-gray-600">Code Assistant</p>
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Code Copilot</h3>
            <p className="text-gray-700 mb-6">
              Intelligent code completion and generation tool. Helps developers write better code faster with AI assistance.
            </p>
            <div className="flex gap-2 mb-6">
              <span className="text-xs bg-orange-50 text-accent px-3 py-1 rounded">Code Gen</span>
              <span className="text-xs bg-orange-50 text-accent px-3 py-1 rounded">Dev Tools</span>
            </div>
            <a href="#" className="text-accent font-semibold">Try it →</a>
          </div>

          {/* Project 5 */}
          <div className="border border-gray-300 p-8 hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-red-100 to-red-50 h-48 rounded mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-red-200 mb-2">AI</div>
                <p className="text-gray-600">Chatbots</p>
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Chatbot Builder</h3>
            <p className="text-gray-700 mb-6">
              No-code platform for building AI-powered chatbots. Deploy customer service agents in minutes, not weeks.
            </p>
            <div className="flex gap-2 mb-6">
              <span className="text-xs bg-red-50 text-accent px-3 py-1 rounded">NLP</span>
              <span className="text-xs bg-red-50 text-accent px-3 py-1 rounded">Chatbot</span>
            </div>
            <a href="#" className="text-accent font-semibold">Try it →</a>
          </div>

          {/* Project 6 */}
          <div className="border border-gray-300 p-8 hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 h-48 rounded mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-indigo-200 mb-2">AI</div>
                <p className="text-gray-600">Workflow Automation</p>
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Automation Engine</h3>
            <p className="text-gray-700 mb-6">
              Build intelligent workflows that automate repetitive tasks. Connect any tool and create powerful automations.
            </p>
            <div className="flex gap-2 mb-6">
              <span className="text-xs bg-indigo-50 text-accent px-3 py-1 rounded">Automation</span>
              <span className="text-xs bg-indigo-50 text-accent px-3 py-1 rounded">Workflows</span>
            </div>
            <a href="#" className="text-accent font-semibold">Try it →</a>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-gray-50 py-24">
        <div className="container-max text-center">
          <h2 className="text-heading font-serif font-bold mb-6">Want to Collaborate?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            We're always looking for feedback, partnerships, and collaborators. Get involved in shaping the future of AI tools.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#" className="btn btn-outline">
              Join Newsletter
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
