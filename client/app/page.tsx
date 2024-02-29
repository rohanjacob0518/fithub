import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Navbar } from "@/components/navbar";
import styles from "../styles/Home.module.scss";
import { GithubIcon } from "@/components/icons";
import { Divider } from "@nextui-org/react";
import AboutPage from "./about/page";

export default function Home() {
	return (
		<>
		
		<Navbar /><Divider/> 
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>One Step&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Towards A Healthy Lifestyles&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
					Healthy body is the secret of a healthy lifestyle. Start your day with fitness.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href="/login"
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
					Login
				</Link>
				<Link
					isExternal
					className={buttonStyles({ color:"primary", variant: "shadow", radius: "full",  })}
					href="/sign-up"
					>
					
					Sign Up
				</Link>
			</div>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
				<AboutPage/>
				</div>
			</section>
		</section>
					</>
	);
}
