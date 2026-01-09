import { OpenAPIHono } from "@hono/zod-openapi";
import { myProfileSchema } from "../schema/profile";

const profileApp = new OpenAPIHono();

profileApp.openapi(
	{
		method: "get",
		path: "/my-profile",
		responses: {
			200: {
				description: "Successful response",
				content: {
					"application/json": {
						schema: myProfileSchema,
					},
				},
			},
		},
		tags: ["Profile"],
	},
	(c) => {
		return c.json(
			{
				name: "Muhammad Bima Adi Prabowo",
				role: "Software Engineer / Fullstack Developer",
			},
			200,
		);
	},
);

export default profileApp;
