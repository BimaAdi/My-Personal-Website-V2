import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/client/components/routes/home/Hero";
import { TechStacks } from "@/client/components/routes/home/TechStacks";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="relative px-4">
			<Hero />
			<TechStacks />
		</main>
	);
}
