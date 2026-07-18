export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="container-max py-32">
        <div className="max-w-3xl">
          <h1 className="text-hero font-serif font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Ready to discuss your project or explore how we can help? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container-max py-24">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Company</label>
              <input
                type="text"
                placeholder="Your company"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Service Interest</label>
              <select className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent">
                <option>Select a service</option>
                <option>Subscription</option>
                <option>Rewire Consulting</option>
                <option>Custom Project</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                placeholder="Tell us about your project..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-accent"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Info */}
      <section className="bg-gray-50 py-24">
        <div className="container-max">
          <div className="grid grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-lg font-bold mb-2">Email</h3>
              <a href="mailto:hello@konsistently.com" className="text-gray-700 hover:text-accent">
                hello@konsistently.com
              </a>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-gray-700 hover:text-accent">
                +1 (234) 567-890
              </a>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold mb-2">Response Time</h3>
              <p className="text-gray-700">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
