import type {
	InsertTaskInputDTO,
	InsertTaskOutputDTO,
	UpdateTaskInputDTO,
	UpdateTaskOutputDTO,
	DeleteTaskInputDTO,
	DeleteTaskOutputDTO,
} from "../../../dtos";
import type { TaskEntity } from "../../../entities";

export interface TaskStoreState {
	tasks: TaskEntity[] | null;
	error: string | null;
	isLoading: boolean;
	insert: (params: InsertTaskInputDTO) => Promise<InsertTaskOutputDTO>;
	update: (params: UpdateTaskInputDTO) => Promise<UpdateTaskOutputDTO>;
	delete: (params: DeleteTaskInputDTO) => Promise<DeleteTaskOutputDTO>;
	getAll: () => Promise<void>;
}
