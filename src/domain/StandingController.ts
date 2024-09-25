import { LocalStorageDatasource } from "../data/LocalstorageDatasource";

type GetGreatestPlayerRes = {
  name: string;
  imgUrl: string;
};

export class StandingController {
  constructor(private datasource: LocalStorageDatasource) {}

  GetGreatestPlayer(): GetGreatestPlayerRes {
    const storage = this.datasource.get("greatest-mahindra-player");

    return {
      name: storage?.name ?? "Devins Lavine",
      imgUrl: storage?.imgUrl ?? "1st-place-mahindra.png",
    };
  }
}
