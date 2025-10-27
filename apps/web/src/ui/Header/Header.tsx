interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <header className="bg-gray-200 text-white py-4 shadow-md border-b border-orange-1000">
      {/* <Sidebar /> */}
      <nav className="mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-2xl font-bold">
          МойСайт
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-orange-1000">
              Главная
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-1000">
              О нас
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-1000">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
