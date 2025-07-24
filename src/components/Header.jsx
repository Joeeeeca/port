// src/components/Header.jsx
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-16">
        <div className="text-xl font-bold text-gray-900">Joe Capon Designs</div>
        <ul className="flex gap-10 text-gray-600">
          {['home','projects','about','contact'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group relative text-base font-medium uppercase tracking-wide transition-colors duration-300 ease-out hover:text-[#FFC75F]"
              >
                {id}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FFC75F] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
