import Dexie from "dexie";
import { Score } from "./types";

interface ScoreDto {
  id: string;
  data: Score;
}

class ScoreDB extends Dexie {
  scoreStore: Dexie.Table<ScoreDto>;

  constructor() {
    super("ScoreDB");
    this.version(1).stores({
      scoreStore: "id, data",
    });
    this.scoreStore = this.table("scoreStore");
  }
}

const db = new ScoreDB();
export default db;
