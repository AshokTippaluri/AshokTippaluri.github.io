import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1" key={location.pathname}>
        <div className="animate-fade-up">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
