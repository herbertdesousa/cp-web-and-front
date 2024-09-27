import { controllers } from "../../../../domain/Controllers";

const NEWS = controllers.news.GetNews();

export function News() {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full px-8 pt-16 pb-32 md:pt-24 md:pb-48 nav-news">
        <h3 className="flex text-center text-white text-4xl font-bold items-center uppercase">
          últimas notícias
        </h3>
      </div>

      <ul className="flex flex-col gap-4 px-4 -mt-20 md:flex-row">
        {NEWS.map((news) => (
          <li key={news.id} className="flex items-center flex-col">
            <img
              src={news.thumbnailUrl}
              alt={news.title}
              className="border-8 border-white h-[228px] w-[408px] object-cover rounded-lg"
            />

            <strong className="text-center">{news.title}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
