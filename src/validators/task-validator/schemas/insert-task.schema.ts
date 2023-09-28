import * as z from "zod";

import {
	taskDescriptionConstraint,
	taskIsCompletedConstraint,
	taskTitleConstraint,
} from "../constraints";
import { InsertTaskInputDTO } from "../../../dtos";

export const insertTaskSchema: z.ZodType<InsertTaskInputDTO> = z.object({
	title: taskTitleConstraint,
	description: taskDescriptionConstraint,
	is_completed: taskIsCompletedConstraint,
});
