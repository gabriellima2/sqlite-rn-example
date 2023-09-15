import { TaskEntity } from "../entities";

export type UpdateTaskInputDTO = Pick<TaskEntity, "id"> &
	Partial<Omit<TaskEntity, "id" | "created_at" | "updated_at">>;
export type UpdateTaskOutputDTO = TaskEntity;
