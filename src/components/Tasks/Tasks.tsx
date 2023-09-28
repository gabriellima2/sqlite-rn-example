import { FlatList, StyleSheet } from "react-native";

import { Task, TasksQuantity } from "./components";
import { useTaskStore } from "../../store/task-store";

export const Tasks = () => {
	const { tasks } = useTaskStore((state) => state);
	return (
		<FlatList
			data={tasks}
			keyExtractor={({ id }) => id.toString()}
			renderItem={({ item }) => (
				<Task
					id={item.id}
					title={item.title}
					description={item.description}
					isCompleted={!!item.is_completed}
				/>
			)}
			contentContainerStyle={styles.content}
			showsVerticalScrollIndicator={false}
			ListHeaderComponent={TasksQuantity}
			style={styles.list}
		/>
	);
};

const styles = StyleSheet.create({
	list: {},
	content: {
		gap: 12,
		paddingTop: 6,
		paddingBottom: 12,
	},
});
