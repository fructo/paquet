import { Handler } from "@/types/Handler.ts";
import { CSS as gfmCSS } from "gfm";

const CSS = `${gfmCSS}

ol.nested {
	counter-reset: item;
}

ol.nested li {
	display: block;
}

ol.nested li:before {
	font-feature-settings: "kern" 1, "tnum" 1;
	-webkit-font-feature-settings: "kern" 1, "tnum" 1;
	-ms-font-feature-settings: "kern" 1, "tnum" 1;
	-moz-font-feature-settings: "kern" 1, "tnum" 1;
	content: counters(item, ".") ". ";
	counter-increment: item;
}

.markdown-body {
	font-family: "Poppins", sans-serif !important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}

.markdown-body ul {
	list-style: disc;
}

.markdown-body ol {
	list-style: numeric;
}

.toggle:checked + .toggled {
	display: block;
}

.markdown-body a {
	color: #8267be
}

@media (prefers-color-scheme: dark) {
	[data-color-mode=auto][data-dark-theme=dark] {
		--color-canvas-subtle: #212121
	}
}

@media (prefers-color-scheme: light) {
	[data-color-mode=auto][data-dark-theme=dark] {
		--color-canvas-subtle: #f0f0f0
	}
}

`;

export const handler: Handler = () =>
	new Response(CSS, {
		headers: {
			"content-type": "text/css",
			"cache-control": "public, max-age=31536000, immutable",
		},
	});
