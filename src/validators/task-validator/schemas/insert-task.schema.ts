import * as z from "zod";

import {
	taskDescriptionConstraint,
	taskIsCompletedConstraint,
	taskTitleConstraint,
} from "../constraints";
import { InsertTaskInputDTO } from "../../../dtos";

export const insertTaskSchema: z.ZodType<InsertTaskInputDTO> = z.object({
	title: taskTitleConstraint.nonempty({
		message: "O campo título é obrigatório",
	}),
	description: taskDescriptionConstraint.max(50, {
		message: "O campo descrição deve ter até 50 caracteres",
	}),
	is_completed: taskIsCompletedConstraint,
});
