import Link from 'next/link'
import PricingCard from '@/components/PricingCard'

export default function Subscription() {
  return (
    <div>
      {/* Hero */}
      <section className="container-max py-32">
        <div className="max-w-3xl">
          <h1 className="text-hero font-serif font-bold mb-6">Konsistently Subscription</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Everything your business needs for creative, marketing, tech, and AI services. One subscription. One commitment.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-50 py-24">
        <div className="container-max">
          <h2 className="text-heading font-serif font-bold mb-16">What's Included</h2>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Creative Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Brand strategy & positioning</li>
                <li>✓ Logo & visual identity</li>
                <li>✓ Design system development</li>
                <li>✓ Marketing collateral</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Marketing Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Content strategy & calendar</li>
                <li>✓ Social media management</li>
                <li>✓ Email campaigns</li>
                <li>✓ Performance analytics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Tech Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Web development</li>
                <li>✓ App development</li>
                <li>✓ Infrastructure setup</li>
                <li>✓ Performance optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">AI Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ AI integration</li>
                <li>✓ Automation workflows</li>
                <li>✓ Data analysis</li>
                <li>✓ Custom LLM solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container-max py-24">
        <h2 className="text-heading font-serif font-bold mb-16 text-center">Subscription Plans</h2>
        <div className="max-w-2xl mx-auto">
          <PricingCard
            title="All-In-One"
            price="$4,999"
            description="Comprehensive suite of AI-first services"
            features={[
              'Creative Services - Brand & Design',
              'Marketing Services - Strategy & Execution',
              'Tech Services - Development & Infrastructure',
              'AI Services - Integration & Optimization',
              'Dedicated Account Manager',
              'Priority Support',
              'Quarterly Strategy Reviews',
              'Unlimited revisions',
            ]}
            cta="Subscribe Now"
            ctaHref="/contact"
            featured
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-24">
        <div className="container-max">
          <h2 className="text-heading font-serif font-bold mb-16">How It Works</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-accent mb-4">1</div>
              <h3 className="font-serif text-lg font-bold mb-2">Subscribe</h3>
              <p className="text-gray-700">Sign up for our all-in-one subscription.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-accent mb-4">2</div>
              <h3 className="font-serif text-lg font-bold mb-2">Onboard</h3>
              <p className="text-gray-700">Get paired with your dedicated account manager.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-accent mb-4">3</div>
              <h3 className="font-serif text-lg font-bold mb-2">Collaborate</h3>
              <p className="text-gray-700">Work together on your projects and goals.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-accent mb-4">4</div>
              <h3 className="font-serif text-lg font-bold mb-2">Grow</h3>
              <p className="text-gray-700">Scale with continuous optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-text text-white py-24">
        <div className="container-max text-center">
          <h2 className="text-heading font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Join innovative businesses using Konsistently to transform their operations.
          </p>
          <Link href="/contact" className="btn bg-white text-text hover:bg-gray-100">
            Subscribe Today
          </Link>
        </div>
      </section>
    </div>
  )
}
