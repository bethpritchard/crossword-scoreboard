import db from "./db";
import { Score } from "./types";

const DB_ID = "scores";

export const storeScore = (score: Score) => {
	return db.scoreStore.put({ id: DB_ID, data: score });
};

export const getScore = () => {
	return db.scoreStore.get(DB_ID).then((result) => result?.data);
};

export const clearScore = () => {
	return db.scoreStore.clear();
};
