import React from "react";
interface scoreButtonProps {
	name: string;
	onChange: () => void;
}

export const ScoreButton = ({ name, onChange }: scoreButtonProps) => {
	return (
		<button
			className="w-40 md:w-60  bg-pink-400 hover:bg-pink-500 text-white  h-12 text-lg rounded
      "
			onClick={onChange}
		>
			{name}
		</button>
	);
};
