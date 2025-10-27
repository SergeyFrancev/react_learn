import "./App.css";
import { Header } from "./ui/Header/Header";
import { Sidebar } from "./ui/Sidebar/Sidebar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      {/* Основной контент */}
      <main className="flex flex-grow flex-row">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="container mx-auto px-4 py-8"></div>
      </main>

      {/* Футер (опционально) */}
      <footer className="bg-gray-200 text-gray-800 py-4 text-center border-t border-orange-1000">
        © 2025 МойСайт. Все права защищены.
      </footer>
    </div>
  );
}

export default App;
