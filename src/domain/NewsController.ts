import { LocalStorageDatasource } from "../data/LocalStorageDatasource";

type News = {
  id: string;
  thumbnailUrl: string;
  title: string;
};

export class NewsController {
  private storage: any;

  constructor(private datasource: LocalStorageDatasource) {
    this.storage = this.datasource.get("news");
  }

  // busca element em index e garante default value
  private GetNewsAt(index: number, defaultValue: News) {
    const storageNews = Array.isArray(this.storage) ? this.storage[index] : {};

    return Object.assign(defaultValue, storageNews);
  }

  GetNews(): News[] {
    return [
      this.GetNewsAt(0, {
        id: "id-1",
        thumbnailUrl: "news-1.png",
        title: "POLE POSITION: Participação na corrida de Marks Petter",
      }),
      this.GetNewsAt(1, {
        id: "id-2",
        thumbnailUrl: "news-2.png",
        title: "‘I want to break free’ - Diz último ganhador do sorteio",
      }),
      this.GetNewsAt(2, {
        id: "id-3",
        thumbnailUrl: "news-3.png",
        title:
          "Champanhe e Festa: Influênciador e participante Julia são pego...",
      }),
    ];
  }
}
