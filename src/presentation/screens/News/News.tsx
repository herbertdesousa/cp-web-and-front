import { controllers } from "../../../domain/Controllers";
import { NewsItem } from "../../components/NewsItem";

const NEWS = controllers.news.GetNews();

export function News() {
  return (
    <section className="w-full min-h-screen pb-8">
      <div className="w-full px-8 pt-16 pb-32 md:pt-24 md:pb-48">
        <h3 className="flex text-center text-4xl font-bold items-center uppercase">
          últimas notícias
        </h3>
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
