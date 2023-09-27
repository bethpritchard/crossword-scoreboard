import { B_KEY, CHLO_KEY } from "./constants";

export interface Score {
  [B_KEY]: number;
  [CHLO_KEY]: number;
}

export const INITIAL_SCORE_STATE: Score = {
  [B_KEY]: 0,
  [CHLO_KEY]: 0,
};
