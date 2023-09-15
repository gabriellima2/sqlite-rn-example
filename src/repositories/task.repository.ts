import type {
	DeleteTaskInputDTO,
	DeleteTaskOutputDTO,
	GetAllTasksOutputDTO,
	InsertTaskInputDTO,
	InsertTaskOutputDTO,
	UpdateTaskInputDTO,
	UpdateTaskOutputDTO,
} from "../dtos";

export interface TaskRepository {
	insert: (params: InsertTaskInputDTO) => Promise<InsertTaskOutputDTO>;
	delete: (params: DeleteTaskInputDTO) => Promise<DeleteTaskOutputDTO>;
	update: (params: UpdateTaskInputDTO) => Promise<UpdateTaskOutputDTO>;
	getAll: () => Promise<GetAllTasksOutputDTO>;
}
