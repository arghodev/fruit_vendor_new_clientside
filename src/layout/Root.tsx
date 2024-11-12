import { Outlet } from "react-router-dom";
import Nav from "../components/shared/nav/Nav";
import Footer from "../components/shared/footer/Footer";

const Root = () => {
  return (
    <section className="scroll-smooth ">
      <section className="container mx-auto bg-[#f9fffd] min-h-screen tex ">
        <header>
          <nav>
            <Nav />
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </section>
      <footer className="bg-[#0a7765] ">
        <Footer />
      </footer>
    </section>
  );
};
export default Root;
