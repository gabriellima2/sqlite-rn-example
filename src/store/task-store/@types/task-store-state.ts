import type {
	InsertTaskInputDTO,
	UpdateTaskInputDTO,
	DeleteTaskInputDTO,
} from "../../../dtos";
import type { TaskEntity } from "../../../entities";

export interface TaskStoreState {
	tasks: TaskEntity[] | null;
	error: string | null;
	isLoading: boolean;
	insert: (params: InsertTaskInputDTO) => Promise<void>;
	update: (params: UpdateTaskInputDTO) => Promise<void>;
	delete: (params: DeleteTaskInputDTO) => Promise<void>;
	getAll: () => Promise<void>;
}
