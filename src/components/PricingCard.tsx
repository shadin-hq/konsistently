interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  featured?: boolean
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  cta,
  ctaHref,
  featured,
}: PricingCardProps) {
  return (
    <div
      className={`border rounded-none p-8 flex flex-col h-full transition ${
        featured
          ? 'border-accent bg-blue-50 shadow-lg'
          : 'border-gray-300 bg-white'
      }`}
    >
      {featured && (
        <div className="text-xs font-bold tracking-widest mb-4 text-accent uppercase">
          Featured
        </div>
      )}

      <h3 className="font-serif text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">{description}</p>

      <div className="mb-8">
        <div className="text-4xl font-serif font-bold mb-2">{price}</div>
        <div className="text-xs text-gray-500">per month, billed annually</div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="text-sm flex items-start gap-3">
            <span className="text-accent mt-1">→</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a href={ctaHref} className="btn btn-primary w-full text-center">
        {cta}
      </a>
    </div>
  )
}
