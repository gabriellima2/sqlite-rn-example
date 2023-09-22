import { FlatList, StyleSheet } from "react-native";

import { Task } from "./components";
import { useTaskStore } from "../../store/task-store";

export const Tasks = () => {
	const { tasks } = useTaskStore((state) => state);
	return (
		<FlatList
			data={tasks}
			keyExtractor={({ id }) => id.toString()}
			renderItem={({ item }) => (
				<Task
					title={item.title}
					description={item.description}
					isCompleted={!!item.is_completed}
				/>
			)}
			contentContainerStyle={styles.content}
			showsVerticalScrollIndicator={false}
			style={styles.list}
		/>
	);
};

const styles = StyleSheet.create({
	list: {},
	content: {
		gap: 12,
	},
});
