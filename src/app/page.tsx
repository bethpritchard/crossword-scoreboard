"use client";

import React from "react";
import { useEffect, useState } from "react";
import { ScoreButton } from "./components/scoreButton";
import { INITIAL_SCORE_STATE, Score } from "./types";
import { B_KEY, CHLO_KEY } from "./constants";
import { downloadFile, uploadFile } from "./api/aws/api";

const KEY = "scores";

export default function Home() {
	const [score, setScore] = useState<Score>(INITIAL_SCORE_STATE);
	const [isLoading, setIsLoading] = useState(true);

	const downloadScore = async () => {
		const downloadedScore = await downloadFile(KEY);

		if (downloadedScore !== null) {
			setScore(downloadedScore);
		}
	};
	useEffect(() => {
		downloadScore().then(() => {
			setIsLoading(false);
		});
	}, []);

	const handleValueChange = (key: keyof Score) => {
		setScore((prevState: Score) => {
			const updatedScore = { ...prevState, [key]: prevState[key] + 1 };

			return updatedScore;
		});
	};

	const uploadScore = () => {
		uploadFile(KEY, score);
	};

	if (isLoading) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center align-content font-press text-cyan-300">
				Loading...
			</div>
		);
	}

	return (
		<div className="min-h-screen align-content flex flex-col items-center justify-center font-press">
			<div className="flex flex-col items-center space-y-10">
				<h1 className="underline decoration-1 hover:decoration-cyan-300 decoration-bold decoration-pink-500 text-2xl font-bold mb-6 text-center">
					Crossword Scoreboard
				</h1>
				<div className="flex justify-center space-x-4 mb-10">
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
				<div className="flex space-x-4 justify-center">
					<button
						className="w-20 md:w-40  bg-pink-400 hover:bg-pink-500 text-white  h-12 text-lg rounded"
						onClick={() => uploadScore()}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
}
