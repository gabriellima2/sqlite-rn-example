import { StyleSheet, View } from "react-native";

import { BaseButton } from "../BaseButton";
import { Field } from "../Field";

import { useTaskForm } from "./hooks";

export const TaskForm = () => {
	const {
		values,
		buttonText,
		isSubmitting,
		descriptionFieldRef,
		handleChange,
		handleSubmit,
		focusDescriptionField,
	} = useTaskForm();
	return (
		<View style={styles.container}>
			<Field
				value={values.title}
				labelText="Título"
				nativeID="task-title"
				placeholder="Ex: Passear com os cachorros"
				returnKeyType="next"
				onSubmitEditing={focusDescriptionField}
				onChangeText={(value) => handleChange(value, "title")}
			/>
			<Field
				ref={descriptionFieldRef}
				value={values.description}
				labelText="Descrição"
				nativeID="task-title"
				placeholder="Ex: Parque do centro"
				returnKeyType="send"
				onSubmitEditing={handleSubmit}
				onChangeText={(value) => handleChange(value, "description")}
			/>
			<BaseButton onPress={handleSubmit} loading={isSubmitting}>
				{buttonText}
			</BaseButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		gap: 12,
	},
});
