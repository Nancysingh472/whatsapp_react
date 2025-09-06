import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
