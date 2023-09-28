import { useState, useEffect, useRef, type MutableRefObject } from "react";
import { Keyboard, type TextInput } from "react-native";

import {
	TaskFormActions,
	useTaskFormStore,
	type TaskFormFields,
} from "../../../store/task-form-store";
import { useTaskStore } from "../../../store/task-store";

import {
	taskDescriptionConstraint,
	taskTitleConstraint,
} from "../../../validators/task-validator/constraints";
import { focusField } from "../../../helpers/focus-field";
import { validate } from "../../../helpers/validate";

type ValidationErrors = Record<keyof TaskFormFields, string | undefined>;

type UseTaskFormReturn = {
	values: TaskFormFields;
	isSubmitting: boolean;
	buttonText: string;
	validationErrors: ValidationErrors;
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
	const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
		title: undefined,
		description: undefined,
	});

	const focusDescriptionField = () => focusField(descriptionFieldRef);

	const handleChange = (value: string, field: keyof TaskFormFields) => {
		setValues((prevState) => ({ ...prevState, [field]: value }));
	};

	const clear = () => {
		clearForm();
		setValues({ title: "", description: "" });
		setValidationErrors({ title: undefined, description: undefined });
		Keyboard.dismiss();
	};

	const validateValues = () => {
		const results: ValidationErrors = {
			title: validate(values.title, taskTitleConstraint).message,
			description: validate(values.description, taskDescriptionConstraint)
				.message,
		};
		return results;
	};

	const handleSubmit = async () => {
		const errors = validateValues();
		if (Object.values(errors).some((error) => !!error))
			return setValidationErrors(errors);
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
		validationErrors,
		descriptionFieldRef,
		handleChange,
		handleSubmit,
		focusDescriptionField,
	};
}
