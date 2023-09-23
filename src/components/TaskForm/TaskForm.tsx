import { StyleSheet, View } from "react-native";

import { BaseButton } from "../BaseButton";
import { Field } from "../Field";

import { useTaskForm } from "./hooks";

export const TaskForm = () => {
	const { values, buttonText, handleChange, handleSubmit } = useTaskForm();
	return (
		<View style={styles.container}>
			<Field
				value={values.title}
				labelText="Título"
				nativeID="task-title"
				placeholder="Ex: Passear com os cachorros"
				onChangeText={(value) => handleChange(value, "title")}
			/>
			<Field
				value={values.description}
				labelText="Descrição"
				nativeID="task-title"
				placeholder="Ex: Parque do centro"
				onChangeText={(value) => handleChange(value, "description")}
			/>
			<BaseButton onPress={handleSubmit}>{buttonText}</BaseButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		gap: 12,
	},
});
