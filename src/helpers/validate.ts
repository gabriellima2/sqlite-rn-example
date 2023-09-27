import * as z from "zod";

type ValidateReturn = {
	message?: string;
};

export function validate(fields: unknown, schema: z.Schema): ValidateReturn {
	const validated = schema.safeParse(fields);
	if (validated.success) return {};
	return { message: validated.error.issues[0].message };
}
