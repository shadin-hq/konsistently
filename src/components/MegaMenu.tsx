import Link from 'next/link'

interface MegaMenuProps {
  items: Array<{
    title: string
    description: string
    href: string
  }>
}

export default function MegaMenu({ items }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-0 w-96 bg-white border border-gray-200 shadow-lg p-6 animate-in">
      <div className="space-y-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block p-3 hover:bg-gray-50 transition rounded"
          >
            <div className="font-serif text-lg font-semibold">{item.title}</div>
            <div className="text-sm text-gray-600">{item.description}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
