import { TaskEntity } from "../entities";

export type UpdateTaskInputDTO = Pick<TaskEntity, "id" | "title"> &
	Partial<Omit<TaskEntity, "id" | "title" | "created_at" | "updated_at">>;
export type UpdateTaskOutputDTO = TaskEntity;
