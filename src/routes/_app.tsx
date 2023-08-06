import type { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Footer from "@/components/Footer.tsx";
import { APP } from "@/lib/app.ts";

export default function App({ Component, url }: AppProps) {
	if (url.pathname === "/kv-insights") {
		return <Component />;
	}

	return (
		<html>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=0"
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<link rel="apple-touch-icon" href="/icon.png" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					// @ts-ignore: Color is used in MacOS Safari
					color="#8267be"
				/>
				<meta name="msapplication-TileColor" content="#8267be" />
				<meta name="color-scheme" content="light dark" />
				<meta
					name="theme-color"
					media="(prefers-color-scheme: dark)"
					content="#121212"
				/>
				<meta
					name="theme-color"
					media="(prefers-color-scheme: light)"
					content="#dddddd"
				/>
				<meta
					name="description"
					content="Check out Paquet to find the best web apps on the open web."
				/>
				<meta property="og:image:width" content="1024" />
				<meta property="og:image:height" content="536" />
				<meta
					property="og:description"
					content="Check out Paquet to find the best web apps on the open web."
				/>
				<meta
					name="keywords"
					content="apps, PWA, web apps, shop, store, app store, app shop"
				/>
				<meta property="og:title" content="Paquet - The web app shop" />
				<meta property="og:url" content="https://paquet.app" />
				<meta
					property="og:image"
					content="https://paquet.app/og-image.jpg"
				/>

				<link rel="stylesheet" href="/fonts.css" />
				<link rel="stylesheet" href="/global.css" />
				<script
					src={APP.umamiUrl}
					data-website-id={APP.umamiId}
					data-domains="paquet.app"
				>
				</script>
			</Head>
			<main>
				<Component />
			</main>
			<Footer />
			{Deno.env.get("DENO_DEPLOYMENT_ID") && (
				<script type="text/javascript" src="/registerSw.js"></script>
			)}
		</html>
	);
}
