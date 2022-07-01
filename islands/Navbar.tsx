/**@jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useScroll } from "../hooks/useScroll.ts";
import { iconBtn } from "../utils/ui.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

type Props = {
	back?: boolean;
	rightIcon?: string;
	rightIconHref?: string;
}


export default function Navbar(props: Props) {
	const trigger = useScroll({
		threshold: 32
	})

	return (
		<div
			className={
				tw`
					fixed flex w-full bg-white dark:bg-dark
					items-center justify-between
					${trigger && "border-b-1 border-opacity-25 border-black dark:border-paper-dark"}
					px-2 py-2 z-50
				`
			}
		>
			<div>
				{props.back && (
					<button className={tw(iconBtn)} onClick={() => history.back()}>
						<span className="material-symbols-outlined">
							arrow_back
						</span>
					</button>
				)}
			</div>
			<div>
				<a className={tw(iconBtn)} href={props.rightIconHref}>
					<span className="material-symbols-outlined">
						{props.rightIcon}
					</span>
				</a>
			</div>
		</div>
	)
}