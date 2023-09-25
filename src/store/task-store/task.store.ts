import { create } from "zustand";

import { makeTaskRepositoryImpl } from "../../factories/repositories";

import type {
	InsertTaskInputDTO,
	UpdateTaskInputDTO,
	DeleteTaskInputDTO,
} from "../../dtos";
import type { TaskStoreState } from "./@types/task-store-state";

const repository = makeTaskRepositoryImpl();

export const useTaskStore = create<TaskStoreState>((set) => ({
	tasks: null,
	error: null,
	isLoading: true,
	insert: async (params: InsertTaskInputDTO) => {
		try {
			const task = await repository.insert(params);
			set((state) => {
				const refreshedTask = state.tasks ? [...state.tasks, task] : [task];
				return { ...state, tasks: refreshedTask, isLoading: false };
			});
		} catch (err) {
			set({ error: (err as Error).message, isLoading: false });
		}
	},
	update: async (params: UpdateTaskInputDTO) => {
		try {
			const updatedTask = await repository.update(params);
			set((state) => {
				const refreshedTask = state.tasks?.map((task) => {
					if (task.id !== updatedTask.id) return task;
					return updatedTask;
				});
				return { ...state, tasks: refreshedTask, isLoading: false };
			});
		} catch (err) {
			set({ error: (err as Error).message, isLoading: false });
		}
	},
	delete: async (params: DeleteTaskInputDTO) => {
		try {
			const deletedTask = await repository.delete(params);
			set((state) => {
				const refreshedTask = state.tasks?.filter(
					(task) => task.id !== deletedTask.id
				);
				return { ...state, tasks: refreshedTask, isLoading: false };
			});
		} catch (err) {
			set({ error: (err as Error).message, isLoading: false });
		}
	},
	getAll: async () => {
		try {
			const tasks = await repository.getAll();
			set({ tasks, isLoading: false });
		} catch (err) {
			set({ error: (err as Error).message, isLoading: false });
		}
	},
}));
