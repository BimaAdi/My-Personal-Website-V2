import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/api")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
