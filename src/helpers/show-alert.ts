import { ToastAndroid, Platform, Alert } from "react-native";

const deviceOS = Platform.OS;

export const showAlert = (message: string) => {
	if (deviceOS === "android") return ToastAndroid.show(message, 1000);
	Alert.alert(message);
};
