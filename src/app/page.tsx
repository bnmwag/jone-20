import { AccessBtn } from "@/components/access-btn";
import { Confet } from "@/components/confetti";
import { Notable } from "@/components/notable";
import Image from "next/image";

export default function Home() {
	const images = [
		"34691e20-6215-4418-b746-bfe1dababfa9.JPG",
		"3b7f9f44-a831-4c50-95e1-ff60077cbf52.JPG",
		"4a346356-c771-4c95-a649-8d5f7d286096.JPG",
		"8aa97bbc-332c-469f-ae52-bf3ed2c776b9.JPG",
		"13fb6873-344f-404f-b34a-440375ad1135.JPG",
		"18a3b2d4-0029-4809-86ee-16f4cd1cb62e.JPG",
		"49c0b0dd-e1f5-4dc2-9477-4ad1bb258f9c.JPG",
		"80fe0ad2-2a03-4999-82db-be027a2b3492.JPG",
		"84ae6f42-91b3-4f35-a8df-2ce34538f0c0.JPG",
		"87fcff0b-575e-4be4-9ee8-ab0992cd5ea2.JPG",
		"102dc787-dee5-4a58-8d9f-bb60dd731982.JPG",
		"909c3326-435d-4a45-8cae-c1b8baed610b.JPG",
		"76427ae3-180c-45af-9f57-fdcbc0aab93c.JPG",
		"99732ac9-4ca5-4c10-ae49-c6833aaddfc7.JPG",
		"a38b149f-b562-4a99-acda-b588c08995c6.JPG",
		"ae5ed1d8-7a57-4ac1-9148-27a27c6a72ff.JPG",
		"e793d0b6-520f-4b99-a882-0e2966f70ab4.JPG",
		"ebce98ac-4fb0-429a-8880-dce3bb326cb4.JPG",
	];

	return (
		<main className="mx-auto my-32 w-full max-w-lg text-2xl md:text-4xl space-y-12 px-6">
			<Confet />
			<div className="flex items-center justify-between">
				<Notable r={0}>
					<h1 className="text-4xl ml-2 text-emerald-500">Unser Jonas</h1>
				</Notable>
				<AccessBtn />
			</div>
			<p>
				<Notable r={-4}>Jonas</Notable>, auch endlich{" "}
				<Notable r={2}>20 Jahr</Notable>, erkennt man unschwer an dem
				Körperhaar.
			</p>
			<p>
				Er fährt den Fiesta durch <Notable r={5}>Ennsdorfs</Notable> Hood, seit
				dem Bundesheer gehts im gar nicht gut.
			</p>
			<p>
				Für <Notable r={-7}>Drink</Notable> immer zu haben, trotz all der
				Plagen, können wir alle sagen, Joni mag das Bier vertragen.
			</p>
			<p>
				Wenns dann endlich mal soweit ist, sehen wir ihn auf dem{" "}
				<Notable r={3}>CLS500er</Notable> Sitz.
			</p>
			<p>
				Bis Dahin, gute Fahrt im Fiest, bis der{" "}
				<Notable r={-3}>Zahnriemen</Notable> fliegt oder das Getriebe spiest.
			</p>
			<p>
				So Jonas das wars, wir freuen uns mit dir,{" "}
				<Notable r={6}>ALLES GUTE</Notable> kumm trink ma a Bier.
			</p>
			{images.map((image, i) => (
				<Image
					alt={image}
					key={i + image}
					src={`/${image}`}
					width={1000}
					height={1000}
					className="w-full h-auto"
				/>
			))}
		</main>
	);
}
