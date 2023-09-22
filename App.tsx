import {
	NativeModules,
	Platform,
	SafeAreaView,
	StyleSheet,
	View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { TaskForm } from "./src/components";
import { WithTaskStorePopulated } from "./src/store/task-store";

import { bootstrapDB } from "./src/configs";
import { theme } from "./src/styles";

bootstrapDB();

function App() {
	return (
		<>
			<StatusBar style="inverted" />
			<View style={styles.screen}>
				<SafeAreaView style={styles.container}>
					<TaskForm />
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
		paddingTop: SPACING_TOP,
		paddingHorizontal: 12,
	},
});
