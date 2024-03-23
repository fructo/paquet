import "dotenv";

export const APP = {
	version: "5.2.2",
	codename: "Fabiana",
	githubRepo: "https://github.com/roseto/paquet",
	umamiUrl: Deno.env.get("UMAMI_URL"),
	umamiId: Deno.env.get("UMAMI_ID"),
};

export const DEV = !Deno.env.get("DENO_DEPLOYMENT_ID");
