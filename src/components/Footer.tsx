import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container-max py-16">
        <div className="grid grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Konsistently</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI-first technology services for modern enterprises.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-serif text-sm font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/subscription" className="text-gray-600 hover:text-accent">
                  Subscription
                </Link>
              </li>
              <li>
                <Link href="/solutions/rewire" className="text-gray-600 hover:text-accent">
                  Rewire
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/insights" className="text-gray-600 hover:text-accent">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/resources/runway" className="text-gray-600 hover:text-accent">
                  Runway
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-gray-600 hover:text-accent">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-gray-600 hover:text-accent">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex items-center justify-between text-sm text-gray-600">
          <p>&copy; 2024 Konsistently. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Twitter</a>
            <a href="#" className="hover:text-accent">LinkedIn</a>
            <a href="#" className="hover:text-accent">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
