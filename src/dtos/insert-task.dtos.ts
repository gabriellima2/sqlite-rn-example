import { TaskEntity } from "../entities";

export type InsertTaskInputDTO = Omit<
	TaskEntity,
	"id" | "created_at" | "update_at"
>;
export type InsertTaskOutputDTO = TaskEntity;
