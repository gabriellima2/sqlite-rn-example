import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
	NativeModules,
	Platform,
	SafeAreaView,
	StyleSheet,
	View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { TaskForm, Tasks } from "./src/components";

import { WithTaskStorePopulated } from "./src/store/task-store";
import { useShowTaskError } from "./src/store/task-store";

import { bootstrapDB } from "./src/configs";
import { theme } from "./src/styles";

bootstrapDB();

function App() {
	useShowTaskError();
	return (
		<>
			<StatusBar style="inverted" />
			<View style={styles.screen}>
				<SafeAreaView style={styles.container}>
					<GestureHandlerRootView style={styles.content}>
						<TaskForm />
						<Tasks />
					</GestureHandlerRootView>
				</SafeAreaView>
			</View>
		</>
	);
}

export default WithTaskStorePopulated(App);

const SPACING_TOP = Math.round(
	Platform.OS === "ios" ? 20 : NativeModules.StatusBarManager.HEIGHT + 20
);

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: theme.background,
	},
	container: {
		flex: 1,
		paddingTop: SPACING_TOP,
		paddingHorizontal: 12,
	},
	content: {
		flex: 1,
		gap: 12,
	},
});
