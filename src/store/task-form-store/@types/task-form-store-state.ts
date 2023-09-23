import type { UpdateTaskInputDTO } from "../../../dtos";
import { TaskFormActions } from "./task-form-actions";

export type TaskFormStoreState = {
	action: TaskFormActions.Create | TaskFormActions.Update;
	taskThatWillBeUpdated: UpdateTaskInputDTO | null;
	prepareTaskFormToUpdateTask: (task: UpdateTaskInputDTO) => void;
	clearForm: () => void;
};
