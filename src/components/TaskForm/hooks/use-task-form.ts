import { useState, useEffect } from "react";

import {
	TaskFormActions,
	useTaskFormStore,
	type TaskFormFields,
} from "../../../store/task-form-store";
import { useTaskStore } from "../../../store/task-store";

type UseTaskFormReturn = {
	values: TaskFormFields;
	buttonText: string;
	handleSubmit: () => void;
	handleChange: (value: string, field: keyof TaskFormFields) => void;
};

export function useTaskForm(): UseTaskFormReturn {
	const { action, taskThatWillBeUpdated, clearForm } = useTaskFormStore(
		(state) => state
	);
	const { insert: insertTask, update: updateTask } = useTaskStore(
		(state) => state
	);
	const [values, setValues] = useState<TaskFormFields>({
		title: "",
		description: "",
	});

	const handleChange = (value: string, field: keyof TaskFormFields) => {
		setValues((prevState) => ({ ...prevState, [field]: value }));
	};

	const handleSubmit = () => {
		if (action === TaskFormActions.Create) {
			insertTask({ ...values, is_completed: 0 });
		}
		if (action === TaskFormActions.Update && taskThatWillBeUpdated) {
			updateTask({ ...taskThatWillBeUpdated, ...values });
		}
		clearForm();
	};

	useEffect(() => {
		if (!taskThatWillBeUpdated) return;
		setValues({
			title: taskThatWillBeUpdated.title ?? "",
			description: taskThatWillBeUpdated.description ?? "",
		});
	}, [taskThatWillBeUpdated?.id]);

	const buttonTextOptions = { create: "Adicionar", update: "Atualizar" };
	const buttonText = buttonTextOptions[action];

	return {
		values,
		buttonText,
		handleChange,
		handleSubmit,
	};
}
