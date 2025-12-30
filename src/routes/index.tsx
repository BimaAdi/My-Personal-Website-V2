import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/routes/home/Hero";
import { TechStack } from "@/components/routes/home/TechStack";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="relative px-4">
			<Hero />
			<TechStack />
		</main>
	);
}
