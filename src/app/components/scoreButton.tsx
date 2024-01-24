import React from "react";
interface scoreButtonProps {
	name: string;
	onChange: () => void;
}

export const ScoreButton = ({ name, onChange }: scoreButtonProps) => {
	return (
		<button
			className="bg-pink-400 hover:bg-pink-500 text-white text-m rounded"
			onClick={onChange}
		>
			{name}
		</button>
	);
};
