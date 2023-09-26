import { useState, useEffect, useRef, type MutableRefObject } from "react";
import { Keyboard, type TextInput } from "react-native";

import {
	TaskFormActions,
	useTaskFormStore,
	type TaskFormFields,
} from "../../../store/task-form-store";
import { useTaskStore } from "../../../store/task-store";
import { focusField } from "../../../helpers/focus-field";

type UseTaskFormReturn = {
	values: TaskFormFields;
	isSubmitting: boolean;
	buttonText: string;
	descriptionFieldRef: MutableRefObject<TextInput | null>;
	handleSubmit: () => void;
	handleChange: (value: string, field: keyof TaskFormFields) => void;
	focusDescriptionField: () => void;
};

export function useTaskForm(): UseTaskFormReturn {
	const { action, taskThatWillBeUpdated, clearForm } = useTaskFormStore(
		(state) => state
	);
	const { insert: insertTask, update: updateTask } = useTaskStore(
		(state) => state
	);
	const descriptionFieldRef = useRef<null | TextInput>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [values, setValues] = useState<TaskFormFields>({
		title: "",
		description: "",
	});

	const focusDescriptionField = () => focusField(descriptionFieldRef);

	const handleChange = (value: string, field: keyof TaskFormFields) => {
		setValues((prevState) => ({ ...prevState, [field]: value }));
	};

	const clear = () => {
		clearForm();
		setValues({ title: "", description: "" });
		Keyboard.dismiss();
	};

	const handleSubmit = async () => {
		if (isSubmitting) return;
		setIsSubmitting(true);
		if (action === TaskFormActions.Create) {
			await insertTask({ ...values, is_completed: 0 });
		}
		if (action === TaskFormActions.Update && taskThatWillBeUpdated) {
			await updateTask({ ...taskThatWillBeUpdated, ...values });
		}
		clear();
		setIsSubmitting(false);
	};

	useEffect(() => {
		setValues({
			title: taskThatWillBeUpdated?.title ?? "",
			description: taskThatWillBeUpdated?.description ?? "",
		});
	}, [taskThatWillBeUpdated?.id]);

	const buttonTextOptions = { create: "Adicionar", update: "Atualizar" };
	const buttonText = buttonTextOptions[action];

	return {
		values,
		buttonText,
		isSubmitting,
		descriptionFieldRef,
		handleChange,
		handleSubmit,
		focusDescriptionField,
	};
}
