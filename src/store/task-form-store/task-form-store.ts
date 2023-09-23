import { create } from "zustand";

import type { UpdateTaskInputDTO } from "../../dtos";
import { TaskFormActions, type TaskFormStoreState } from "./@types";

export const useTaskFormStore = create<TaskFormStoreState>((set) => ({
	taskThatWillBeUpdated: null,
	action: TaskFormActions.Create,
	prepareTaskFormToUpdateTask: (task: UpdateTaskInputDTO) => {
		set({
			action: TaskFormActions.Update,
			taskThatWillBeUpdated: task,
		});
	},
	clearForm: () => {
		set({
			taskThatWillBeUpdated: null,
			action: TaskFormActions.Create,
		});
	},
}));
