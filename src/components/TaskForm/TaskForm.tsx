import { StyleSheet, View } from "react-native";
import { BaseButton } from "../BaseButton";
import { Field } from "../Field";

export const TaskForm = () => {
	return (
		<View style={styles.container}>
			<Field
				labelText="Título"
				nativeID="task-title"
				placeholder="Ex: Passear com os cachorros"
			/>
			<Field
				labelText="Descrição"
				nativeID="task-title"
				placeholder="Ex: Parque do centro"
			/>
			<BaseButton>Adicionar</BaseButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		gap: 12,
	},
});
