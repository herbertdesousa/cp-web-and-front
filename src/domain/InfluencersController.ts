import { LocalStorageDatasource } from "../data/LocalStorageDatasource";

type Influencer = {
  imgUrl: string;
  imgAlt: string;
  votes: number;
};

export class InfluencersController {
  constructor(private datasource: LocalStorageDatasource) {}

  private GetInfluencer(
    storageKey: string,
    defaultValue: Influencer
  ): Influencer {
    const storage = this.datasource.get(storageKey);

    return Object.assign(defaultValue, storage);
  }

  private randomInRange(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  GetUK(): Influencer {
    return this.GetInfluencer("influencer-uk", {
      imgUrl: "influencer-freddie.png",
      imgAlt: "influenciador inglês",
      votes: this.randomInRange(100, 10000),
    });
  }

  GetBrazilian(): Influencer {
    return this.GetInfluencer("influencer-brazil", {
      imgUrl: "influencer-inutilismo.png",
      imgAlt: "influenciador brasileiro",
      votes: this.randomInRange(100, 10000),
    });
  }

  GetRussian(): Influencer {
    return this.GetInfluencer("influencer-russo", {
      imgUrl: "influencer-russo.png",
      imgAlt: "influenciador usa",
      votes: this.randomInRange(100, 10000),
    });
  }

  GetUSA(): Influencer {
    return this.GetInfluencer("influencer-usa", {
      imgUrl: "influencer-usa.png",
      imgAlt: "influenciador usa",
      votes: this.randomInRange(100, 10000),
    });
  }
}
