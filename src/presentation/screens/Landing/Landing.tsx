import classNames from "classnames";
import { Link } from "react-router-dom";
import "./landing.css";

import { ROUTES } from "../ROUTES";
import { Influencers } from "./Influencers/Influencers";
import { LandingStanding } from "./LandingStanding";
import { News } from "./News/News";

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
          <a
            href="#podio"
            className="uppercase text-white font-semibold transform hover:-translate-y-1 transition"
          >
            Pódio
          </a>
          <Link
            to={ROUTES.news}
            className="uppercase text-white font-semibold transform hover:-translate-y-1 transition"
          >
            Noticias
          </Link>
          <a
            href="/#influencers"
            className="uppercase text-white font-semibold transform hover:-translate-y-1 transition"
          >
            Influencers
          </a>

          <span className="absolute right-[-60px] top-0 hidden md:block nav-main-triangle"></span>
          <span className="nav-main-triangle-2"></span>
        </nav>

        <LandingStanding />
      </div>

      <Influencers />

      <News />

      <footer className="flex text-white  bg-[#09099D] p-4 text-lg font-medium">
        Copyright 2024
      </footer>
    </div>
  );
}
