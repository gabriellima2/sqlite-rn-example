import * as z from "zod";

import { taskIdConstraint } from "../constraints";
import type { DeleteTaskInputDTO } from "../../../dtos";

export const deleteTaskSchema: z.ZodType<DeleteTaskInputDTO> = z.object({
	id: taskIdConstraint,
});
