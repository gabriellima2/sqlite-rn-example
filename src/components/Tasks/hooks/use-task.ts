import { useState } from "react";

import { useTaskFormStore } from "../../../store/task-form-store";
import { useTaskStore } from "../../../store/task-store";

import { SwipeDirections } from "../@types/swipe-directions";
import type { Directions } from "../@types/directions";
import type { TaskEntity } from "../../../entities";

export type UseTaskParams = Pick<TaskEntity, "id" | "title" | "description"> & {
	isCompleted: boolean;
};

type UseTaskReturn = {
	isCompleted: boolean;
	handleEdit: () => void;
	handleRemove: () => void;
	handleSwipeableOpen: (direction: Directions) => void;
	handleSwipeableClose: () => void;
	handleIsCompletedChanges: () => void;
};

export function useTask(params: UseTaskParams): UseTaskReturn {
	const {
		isLoading,
		delete: deleteTask,
		update: updateTask,
	} = useTaskStore((state) => state);
	const { prepareTaskFormToUpdateTask, clearForm } = useTaskFormStore(
		(state) => state
	);
	const [isCompleted, setIsCompleted] = useState(params.isCompleted);

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

	const handleSwipeableClose = () => clearForm();

	const handleIsCompletedChanges = async () => {
		setIsCompleted((prevState) => !prevState);
		await updateTask({ ...params, is_completed: !isCompleted ? 1 : 0 });
	};

	return {
		isCompleted,
		handleEdit,
		handleRemove,
		handleSwipeableOpen,
		handleSwipeableClose,
		handleIsCompletedChanges,
	};
}
