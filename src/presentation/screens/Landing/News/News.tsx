import { Link } from "react-router-dom";
import { controllers } from "../../../../domain/Controllers";
import { ROUTES } from "../../ROUTES";
import { NewsItem } from "../../../components/NewsItem";

const NEWS = controllers.news.GetNews();

export function News() {
  return (
    <section className="w-full min-h-screen pb-8">
      <div className="flex items-center justify-between w-full px-8 pt-16 pb-32 md:pt-24 md:pb-48 nav-news">
        <h3 className="flex text-center text-white text-4xl font-bold items-center uppercase">
          últimas notícias
        </h3>

        <Link
          to={ROUTES.news}
          className="px-4 py-1 uppercase text-white border border-white rounded transition hover:-translate-y-2"
        >
          Ver todas
        </Link>
      </div>

      <ul className="flex flex-col gap-4 px-4 -mt-20 md:flex-row">
        {NEWS.map((news) => (
          <NewsItem
            key={news.id}
            id={news.id}
            thumbnailUrl={news.thumbnailUrl}
            title={news.title}
          />
        ))}
      </ul>
    </section>
  );
}
