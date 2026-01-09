import { createFileRoute } from "@tanstack/react-router";
import app from "@/server";

export const Route = createFileRoute("/api/$")({
	server: {
		handlers: {
			OPTIONS: async ({ request }) => {
				return app.fetch(request);
			},
			GET: async ({ request }) => {
				return app.fetch(request);
			},
			POST: async ({ request }) => {
				return app.fetch(request);
			},
			PUT: async ({ request }) => {
				return app.fetch(request);
			},
			PATCH: async ({ request }) => {
				return app.fetch(request);
			},
			DELETE: async ({ request }) => {
				return app.fetch(request);
			},
		},
	},
});
