import classNames from "classnames";
import "./landing.css";
import { Link } from "react-router-dom";

const MAIN_LINK = [
  { to: "/", label: "Resultados" },
  { to: "/", label: "Noticias" },
  { to: "/", label: "Times" },
];

export function Landing() {
  return (
    <div className="relative">
      <section className="relative h-screen">
        <nav
          className={classNames(
            "absolute left-0 top-0 right-0 py-4 px-6 pb-16 nav-top",
            "md:px-16 md:py-8"
          )}
        >
          <img src="logo.png" alt="Logo da Mahindra" />
        </nav>

        <img
          src="bg-landing.png"
          alt="Corrida Vencida pela Mahindra"
          className="w-full h-full object-cover"
        />
      </section>

      <nav className="main-nav">
        {MAIN_LINK.map((link) => (
          <Link
            to={link.to}
            className="uppercase text-white font-semibold transform hover:-translate-y-1 transition"
          >
            {link.label}
          </Link>
        ))}

        <span className="absolute right-[-60px] top-0 hidden md:block nav-main-triangle"></span>
        <span className="nav-main-triangle-2"></span>
      </nav>

      <section className="section relative">
        <div className="pt-16 flex gap-y-16 flex-col items-center">
          <h2 className="font-bold text-4xl uppercase ">Pódio da Mahindra</h2>

          <div className="flex flex-col flex-1 gap-y-2">
            <img
              src="1st-place-mahindra.png"
              alt="Primeiro Lugar da Mahindra"
              className="h-64"
            />

            <div className="flex flex-col items-center py-1">
              <strong className="font-bold text-lg uppercase">
                Devins Lavine
              </strong>
              <strong className="text-highlight uppercase">Top 1</strong>
            </div>
          </div>
        </div>

        <span className="absolute top-0 right-16 bg-highlight opacity-20 h-screen w-8"></span>
        <span className="absolute top-0 right-10 bg-highlight opacity-20 h-screen w-4"></span>
      </section>
    </div>
  );
}
