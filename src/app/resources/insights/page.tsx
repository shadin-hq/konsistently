export default function Insights() {
  return (
    <div>
      {/* Hero */}
      <section className="container-max py-32">
        <div className="max-w-3xl">
          <h1 className="text-hero font-serif font-bold mb-6">Insights</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Industry perspectives, AI trends, and insights from our team of experts.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container-max py-12">
        <div className="border border-gray-300 overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-serif font-bold text-blue-200">Featured</div>
              </div>
            </div>
            <div className="p-12 flex flex-col justify-center">
              <div className="text-xs text-accent font-bold mb-2 uppercase tracking-wider">Featured Article</div>
              <h2 className="text-heading font-serif font-bold mb-4">The Future of AI in Business</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Explore how AI is transforming business operations, from automation to decision-making. Our latest research covers key trends and what they mean for your organization.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">June 18, 2024</span>
                <a href="#" className="text-accent font-semibold">Read article →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container-max py-24">
        <h2 className="text-heading font-serif font-bold mb-16">Recent Articles</h2>
        <div className="grid grid-cols-3 gap-8">
          {/* Article 1 */}
          <article className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 h-48"></div>
            <div className="p-6">
              <div className="text-xs text-accent font-bold mb-2 uppercase tracking-wider">Technology</div>
              <h3 className="text-lg font-serif font-bold mb-2">Modern Tech Stack for 2024</h3>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                Best practices and tools for building scalable applications in the modern era.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">June 15, 2024</span>
                <a href="#" className="text-accent font-semibold">Read →</a>
              </div>
            </div>
          </article>

          {/* Article 2 */}
          <article className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-green-100 to-green-50 h-48"></div>
            <div className="p-6">
              <div className="text-xs text-accent font-bold mb-2 uppercase tracking-wider">AI & Automation</div>
              <h3 className="text-lg font-serif font-bold mb-2">Automating Your Workflow</h3>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                How to identify automation opportunities and implement them effectively.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">June 10, 2024</span>
                <a href="#" className="text-accent font-semibold">Read →</a>
              </div>
            </div>
          </article>

          {/* Article 3 */}
          <article className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 h-48"></div>
            <div className="p-6">
              <div className="text-xs text-accent font-bold mb-2 uppercase tracking-wider">Design</div>
              <h3 className="text-lg font-serif font-bold mb-2">Design Systems 101</h3>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                Building consistent design systems that scale with your organization.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">June 5, 2024</span>
                <a href="#" className="text-accent font-semibold">Read →</a>
              </div>
            </div>
          </article>

          {/* Article 4 */}
          <article className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-red-100 to-red-50 h-48"></div>
            <div className="p-6">
              <div className="text-xs text-accent font-bold mb-2 uppercase tracking-wider">Marketing</div>
              <h3 className="text-lg font-serif font-bold mb-2">Content Strategy that Works</h3>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                Developing a content strategy that drives engagement and conversion.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">May 30, 2024</span>
                <a href="#" className="text-accent font-semibold">Read →</a>
              </div>
            </div>
          </article>

          {/* Article 5 */}
          <article className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 h-48"></div>
            <div className="p-6">
              <div className="text-xs text-accent font-bold mb-2 uppercase tracking-wider">Infrastructure</div>
              <h3 className="text-lg font-serif font-bold mb-2">Cloud Migration Guide</h3>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                Everything you need to know about migrating to the cloud.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">May 25, 2024</span>
                <a href="#" className="text-accent font-semibold">Read →</a>
              </div>
            </div>
          </article>

          {/* Article 6 */}
          <article className="border border-gray-300 overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 h-48"></div>
            <div className="p-6">
              <div className="text-xs text-accent font-bold mb-2 uppercase tracking-wider">Trends</div>
              <h3 className="text-lg font-serif font-bold mb-2">What's Next in Tech</h3>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                Emerging technologies and trends to watch in the coming year.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">May 20, 2024</span>
                <a href="#" className="text-accent font-semibold">Read →</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 py-24">
        <div className="container-max text-center">
          <h2 className="text-heading font-serif font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest insights and trends.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
