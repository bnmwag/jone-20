"use client";

import { useRef, type FC } from "react";

export const AccessBtn: FC = () => {
	const audioRef = useRef<HTMLAudioElement>(null);

	const playTrack = () => {
		if (audioRef.current) {
			audioRef.current.play();
		}
	};

	return (
		<>
			{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
			<audio
				src="/ElevenLabs_2025-02-03T20_31_35_Liam_pre_s50_sb75_se0_b_m2.mp3"
				ref={audioRef}
			/>
			<button
				type="button"
				onClick={playTrack}
				className="scale-150 border border-neutral-200 rounded-md p-1"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-accessibility"
				>
					<title>Accessibility</title>
					<circle cx="16" cy="4" r="1" />
					<path d="m18 19 1-7-6 1" />
					<path d="m5 8 3-3 5.5 3-2.36 3.5" />
					<path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
					<path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
				</svg>
			</button>
		</>
	);
};
