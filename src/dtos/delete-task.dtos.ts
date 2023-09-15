import { TaskEntity } from "../entities";

export type DeleteTaskInputDTO = Pick<TaskEntity, "id">;
export type DeleteTaskOutputDTO = TaskEntity;
