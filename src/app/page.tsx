"use client";

import { useState } from "react";
import { ScoreButton } from "./components/scoreButton";
import { INITIAL_SCORE_STATE, Score } from "./types";
import { B_KEY, CHLO_KEY } from "./constants";

export default function Home() {
  const [score, setScore] = useState<Score>(INITIAL_SCORE_STATE);

  const handleValueChange = (key: keyof Score) => {
    setScore((prevState: Score) => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
    console.log(score);
  };

  return (
    <div className="min-h-screen align-content flex flex-col items-center justify-center font-press">
      <div className="flex flex-col items-center space-y-10">
        <h1 className="underline decoration-1 hover:decoration-cyan-300 decoration-bold decoration-pink-500 text-2xl font-bold mb-6 text-center">
          Crossword Scoreboard
        </h1>
        <div className="flex justify-center space-x-4">
          <div className="flex flex-col items-center">
            <div className="mb-10">{score[CHLO_KEY]}</div>
            <ScoreButton
              name={CHLO_KEY}
              onChange={() => handleValueChange(CHLO_KEY)}
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-10">{score[B_KEY]}</div>
            <ScoreButton
              name={B_KEY}
              onChange={() => handleValueChange(B_KEY)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
