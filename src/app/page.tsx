import Link from 'next/link'
import PricingCard from '@/components/PricingCard'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container-max py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-hero font-serif font-bold mb-6 max-w-4xl">
          AI-First Technology Services
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mb-12 leading-relaxed">
          Creative, Marketing, Tech and AI services bundled under one subscription. Plus Rewire: consulting and forward deployment engineering for SMEs.
        </p>
        <div className="flex gap-4">
          <Link href="/contact" className="btn btn-primary">
            Get Started
          </Link>
          <Link href="/solutions/subscription" className="btn btn-outline">
            View Subscription
          </Link>
        </div>
      </section>

      {/* Rewire Introduction */}
      <section className="bg-gray-50 py-24">
        <div className="container-max">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-heading font-serif font-bold mb-6">Rewire</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For SMEs looking to rewire their operations. We provide strategic consulting and forward deployment engineering to modernize your tech stack and optimize processes.
              </p>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Custom solutions tailored to your unique business challenges.
              </p>
              <Link href="/rewire" className="btn btn-primary">
                Learn About Rewire
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-serif font-bold text-blue-200 mb-4">∞</div>
                <p className="text-gray-600">Custom engineering solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Pricing Preview */}
      <section className="container-max py-24">
        <div className="text-center mb-16">
          <h2 className="text-heading font-serif font-bold mb-4">
            Konsistently Subscription
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Everything you need for creative, marketing, tech and AI services.
          </p>
        </div>

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
            ]}
            cta="Subscribe Now"
            ctaHref="/contact"
            featured
          />
        </div>

        <div className="text-center mt-12">
          <Link href="/solutions/subscription" className="text-accent hover:underline font-semibold">
            View full subscription details →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-text text-white py-24">
        <div className="container-max text-center">
          <h2 className="text-heading font-serif font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Start with our subscription or explore custom solutions with Rewire.
          </p>
          <Link href="/contact" className="btn bg-white text-text hover:bg-gray-100">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
