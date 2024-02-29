import { title } from "@/components/primitives";
import Image from 'next/image'

export default function AboutPage() {
	return (
		<div className="flex flex-col items-center ">
			{/* <Image
				src={""}
				width={500}
				height={500}
				alt="Picture of the author"
    		/> */}
			<h3 className={title({ color: "violet" })}>About Us</h3>
			<h3>We Are Ready To Making You In A Shape</h3>
			<p>
				
				Finding motivation to work out can be challenging. There are so many
            distractions and less physically demanding alternatives to spending
            an hour at the gym or working out at home.
			You need to understand that Strength does not come from physical
            capacity. It comes from an indomitable will.
			</p>
		</div>
	);
}
