import * as z from "zod";

const CHARS_LIMIT = 250;

export const taskDescriptionConstraint = z.string().max(CHARS_LIMIT, {
	message: `O campo descrição deve ter até ${CHARS_LIMIT} caracteres`,
});
