import type {
	DeleteTaskInputDTO,
	DeleteTaskOutputDTO,
	FindTaskByIDInput,
	FindTaskByIDOutput,
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
	findByID: (id: FindTaskByIDInput) => Promise<FindTaskByIDOutput>;
	getAll: () => Promise<GetAllTasksOutputDTO>;
}
