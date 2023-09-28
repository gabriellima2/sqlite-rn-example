import * as z from "zod";

export const taskTitleConstraint = z.string().nonempty({
	message: "O campo título é obrigatório",
});
