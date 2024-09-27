import classNames from "classnames";
import { Link } from "react-router-dom";
import "./landing.css";

import { LandingStanding } from "./LandingStanding";
import { Influencers } from "./Influencers/Influencers";

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

      <Influencers />

      <section className="w-full min-h-screen">
        <div className="w-full px-8 pt-16 pb-32 md:pt-24 md:pb-48 nav-news">
          <h3 className="flex text-center text-white text-4xl font-bold items-center uppercase">
            últimas notícias
          </h3>
        </div>

        <ul className="flex flex-col gap-4 px-4 -mt-20 md:flex-row">
          {[1, 2, 3].map(() => (
            <li className="flex flex-col">
              <img
                src="news-1.png"
                alt="Noticia 1"
                className="border-8 border-white rounded-lg"
              />

              <strong className="text-center">
                POLE POSITION: Participação na corrida de Marks Petter
              </strong>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
