import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import profileApp from "./routes/profile";

const app = new OpenAPIHono().route("/api/profile", profileApp);

const docPath = "/api/openapi.json";
app.doc(docPath, {
	openapi: "3.0.0",
	info: {
		title: "Bima Adi API",
		version: "3.0.0",
		description: "bima adi api documentation",
	},
});

app.get("/api/docs", swaggerUI({ url: docPath }));

export default app;
