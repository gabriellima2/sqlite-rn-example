import { StyleSheet, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { RemoveButton } from "./RemoveButton";
import { EditButton } from "./EditButton";

import { theme } from "../../../styles";

type TaskProps = {
	title: string;
	description?: string;
	isCompleted: boolean;
};

export const Task = (props: TaskProps) => {
	const { title, description, isCompleted } = props;
	return (
		<Swipeable
			renderLeftActions={() => <EditButton />}
			renderRightActions={() => <RemoveButton />}
			onSwipeableOpen={(direction) => console.log(direction)}
		>
			<View
				style={[styles.container, isCompleted && styles.isCompletedContainer]}
			>
				<View style={styles.content}>
					<Text style={[styles.title, isCompleted && styles.isCompletedText]}>
						{title}
					</Text>
					<Text
						style={[styles.description, isCompleted && styles.isCompletedText]}
					>
						{description}
					</Text>
				</View>
			</View>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 12,
		borderRadius: 8,
		backgroundColor: theme.overlay,
	},
	content: {
		paddingHorizontal: 4,
		gap: 4,
	},
	title: {
		fontWeight: "600",
		color: theme.text.primary,
	},
	description: {
		color: theme.text.tertiary,
	},
	isCompletedContainer: {
		opacity: 0.4,
	},
	isCompletedText: {
		textDecorationLine: "line-through",
		opacity: 0.5,
	},
});
