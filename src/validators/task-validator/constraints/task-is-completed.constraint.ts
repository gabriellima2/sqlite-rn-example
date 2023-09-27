import * as z from "zod";

enum Completed {
	Incomplete = 0,
	Complete = 1,
}

export const taskIsCompletedConstraint = z.nativeEnum(Completed);
