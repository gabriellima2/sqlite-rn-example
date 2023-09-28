import * as z from "zod";

import {
	taskDescriptionConstraint,
	taskIsCompletedConstraint,
	taskTitleConstraint,
	taskIdConstraint,
} from "../constraints";
import type { UpdateTaskInputDTO } from "../../../dtos";

export const updateTaskSchema: z.ZodType<UpdateTaskInputDTO> = z.object({
	id: taskIdConstraint,
	title: taskTitleConstraint,
	description: taskDescriptionConstraint.optional(),
	is_completed: taskIsCompletedConstraint.optional(),
});
