import { StyleSheet, Text, View } from "react-native";

import { useTaskStore } from "../../../store/task-store";
import { theme } from "../../../styles";

export const TasksQuantity = () => {
	const { total } = useTaskStore((state) => state);
	const complement = total === 1 ? "Tarefa" : "Tarefas";
	return (
		<View style={styles.container}>
			<Text style={styles.quantity}>{total}</Text>
			<Text style={styles.complement}>{complement}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	quantity: {
		color: theme.text.primary,
		fontSize: 20,
		fontWeight: "500",
	},
	complement: {
		color: theme.text.primary,
	},
});
