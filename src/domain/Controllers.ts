import { LocalStorageDatasource } from "../data/LocalstorageDatasource";
import { StandingController } from "./StandingController";

const standingController = new StandingController(new LocalStorageDatasource());

export const controllers = {
  standing: standingController,
};
