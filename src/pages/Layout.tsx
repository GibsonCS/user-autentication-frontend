import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1 bg-gradient-to-r from-sky-950 to-sky-800 p-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
