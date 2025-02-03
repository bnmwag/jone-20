"use client";

import type { FC } from "react";
import Confetti from "react-confetti-boom";

export const Confet: FC = () => {
	return (
		<Confetti
			mode="boom"
			shapeSize={25}
			particleCount={100}
			x={0.5}
			y={0.3}
			colors={["#f43f5e", "#10b981", "#eab308"]}
		/>
	);
};
