import { LocalStorageDatasource } from "../data/LocalStorageDatasource";

type Influencer = {
  imgUrl: string;
  imgAlt: string;
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

  GetUK(): Influencer {
    return this.GetInfluencer("influencer-uk", {
      imgUrl: "influencer-freddie.png",
      imgAlt: "influenciador inglês",
    });
  }

  GetBrazilian(): Influencer {
    return this.GetInfluencer("influencer-brazil", {
      imgUrl: "influencer-inutilismo.png",
      imgAlt: "influenciador brasileiro",
    });
  }

  GetRussian(): Influencer {
    return this.GetInfluencer("influencer-russo", {
      imgUrl: "influencer-russo.png",
      imgAlt: "influenciador usa",
    });
  }

  GetUSA(): Influencer {
    return this.GetInfluencer("influencer-usa", {
      imgUrl: "influencer-usa.png",
      imgAlt: "influenciador usa",
    });
  }
}
