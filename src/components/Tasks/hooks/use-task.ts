import { useTaskFormStore } from "../../../store/task-form-store";
import { useTaskStore } from "../../../store/task-store";

import { SwipeDirections } from "../@types/swipe-directions";
import type { Directions } from "../@types/directions";
import type { TaskEntity } from "../../../entities";

export type UseTaskParams = Pick<TaskEntity, "id" | "title" | "description"> & {
	title: string;
	description?: string;
	isCompleted: boolean;
};

export function useTask(params: UseTaskParams) {
	const { isLoading, delete: deleteTask } = useTaskStore((state) => state);
	const { prepareTaskFormToUpdateTask, clearForm } = useTaskFormStore(
		(state) => state
	);

	const handleEdit = () => {
		prepareTaskFormToUpdateTask({
			...params,
			is_completed: params.isCompleted ? 1 : 0,
		});
	};

	const handleRemove = async () => {
		if (isLoading) return;
		await deleteTask({ id: params.id });
	};

	const handleSwipeableOpen = (direction: Directions) => {
		if (direction === SwipeDirections.Right) return handleRemove();
		if (direction === SwipeDirections.Left) return handleEdit();
	};

	const handleSwipeableClose = (direction: Directions) => {
		if (direction === SwipeDirections.Left) return clearForm();
	};

	return {
		handleEdit,
		handleRemove,
		handleSwipeableOpen,
		handleSwipeableClose,
	};
}
