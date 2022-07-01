import type { Category } from "../types/Category.ts";

export const categories: Category[] = [
	{
		id: "social",
		name: "Social",
		icon: "group"
	},
	{
		id: "music",
		name: "Music",
		icon: "music_note"
	},
	{
		id: "games",
		name: "Games",
		icon: "stadia_controller"
	},
	{
		id: "dev",
		name: "Development",
		icon: "code"
	},
];

export const getCategory = (id: string) => {
	return categories.find((value) => value.id === id) || null;
};