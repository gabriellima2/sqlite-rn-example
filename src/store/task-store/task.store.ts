import { create } from "zustand";

import { makeTaskRepositoryImpl } from "../../factories/repositories";

import type {
	InsertTaskInputDTO,
	InsertTaskOutputDTO,
	UpdateTaskInputDTO,
	UpdateTaskOutputDTO,
	DeleteTaskInputDTO,
	DeleteTaskOutputDTO,
} from "../../dtos";
import type { TaskStoreState } from "./@types/task-store-state";

const repository = makeTaskRepositoryImpl();

export const useTaskStore = create<TaskStoreState>((set) => ({
	tasks: null,
	error: null,
	isLoading: true,
	insert: (params: InsertTaskInputDTO): Promise<InsertTaskOutputDTO> => {},
	update: (params: UpdateTaskInputDTO): Promise<UpdateTaskOutputDTO> => {},
	delete: (params: DeleteTaskInputDTO): Promise<DeleteTaskOutputDTO> => {},
	getAll: async () => {
		try {
			const tasks = await repository.getAll();
			set({ tasks, isLoading: false });
		} catch (err) {
			set({ error: (err as Error).message, isLoading: false });
		}
	},
}));
