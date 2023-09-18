import { TaskEntity } from "../entities";

export type InsertTaskInputDTO = Omit<
	TaskEntity,
	"id" | "created_at" | "updated_at"
>;
export type InsertTaskOutputDTO = TaskEntity;
