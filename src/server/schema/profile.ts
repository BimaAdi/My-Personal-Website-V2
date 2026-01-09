import z from "zod";

export const myProfileSchema = z.object({
	name: z.string(),
	role: z.string(),
});
