interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  return (
    <div className="fixed md:static top-0 left-0 h-full w-64 bg-gray-200 text-white flex flex-col transition-transform duration-300 md:translate-x-0 translate-x-0 border-r border-orange-1000">
      <div className="p-4 border-b border-orange-1000 bg-gray-400">
        <h2 className="text-xl font-bold">MyApp</h2>
      </div>

      <nav className="flex-1 p-4 flex flex-col gap-2">
        <a
          href="#"
          className="px-3 py-2 rounded hover:bg-orange-800 transition-colors"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="px-3 py-2 rounded hover:bg-orange-800 transition-colors"
        >
          Users
        </a>
        <a
          href="#"
          className="px-3 py-2 rounded hover:bg-orange-800 transition-colors"
        >
          Settings
        </a>
      </nav>

      <div className="p-4 border-t border-orange-1000  bg-gray-400">
        <button className="btn w-full text-left text-sm">
          Logout
        </button>
      </div>
    </div>
  );
}
