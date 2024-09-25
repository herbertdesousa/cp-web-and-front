import classNames from "classnames";
import "./landing.css";
import { Link } from "react-router-dom";

import { LandingStanding } from "./LandingStanding";

const MAIN_LINK = [
  { id: "1", to: "/", label: "Resultados" },
  { id: "2", to: "/", label: "Noticias" },
  { id: "3", to: "/", label: "Times" },
];

export function Landing() {
  return (
    <div>
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
              key={link.id}
              to={link.to}
              className="uppercase text-white font-semibold transform hover:-translate-y-1 transition"
            >
              {link.label}
            </Link>
          ))}

          <span className="absolute right-[-60px] top-0 hidden md:block nav-main-triangle"></span>
          <span className="nav-main-triangle-2"></span>
        </nav>

        <LandingStanding />
      </div>

      <section className="section flex  bg-highlight"></section>
    </div>
  );
}
