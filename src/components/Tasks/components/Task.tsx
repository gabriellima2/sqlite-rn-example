import { StyleSheet, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { RemoveButton } from "./RemoveButton";
import { EditButton } from "./EditButton";

import { useTask, type UseTaskParams } from "../hooks";

import { theme } from "../../../styles";
import type { Directions } from "../@types";

type TaskProps = UseTaskParams;

export const Task = (props: TaskProps) => {
	const { title, description } = props;
	const {
		isCompleted,
		handleEdit,
		handleRemove,
		handleIsCompletedChanges,
		handleSwipeableClose,
		handleSwipeableOpen,
	} = useTask(props);

	const tap = Gesture.Tap().numberOfTaps(2).onStart(handleIsCompletedChanges);

	return (
		<Swipeable
			renderLeftActions={() => <EditButton onPress={handleEdit} />}
			renderRightActions={() => <RemoveButton onPress={handleRemove} />}
			onSwipeableClose={handleSwipeableClose}
			onSwipeableOpen={(direction) =>
				handleSwipeableOpen(direction as Directions)
			}
		>
			<GestureDetector gesture={tap}>
				<View
					style={[styles.container, isCompleted && styles.isCompletedContainer]}
				>
					<View style={styles.content}>
						<Text style={[styles.title, isCompleted && styles.isCompletedText]}>
							{title}
						</Text>
						<Text
							style={[
								styles.description,
								isCompleted && styles.isCompletedText,
							]}
						>
							{description}
						</Text>
					</View>
				</View>
			</GestureDetector>
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
