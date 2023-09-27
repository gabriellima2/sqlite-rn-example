import * as z from "zod";

export const taskIdConstraint = z
	.number()
	.int({ message: "O valor de ID deve ser inteiro" });
