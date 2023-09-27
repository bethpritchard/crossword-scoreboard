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
    <div>
      <h1>Crossword Scoreboard</h1>
      <ScoreButton
        name={CHLO_KEY}
        onChange={() => handleValueChange(CHLO_KEY)}
      />
      <ScoreButton name={B_KEY} onChange={() => handleValueChange(B_KEY)} />
    </div>
  );
}
