import { StyleSheet, Text } from "react-native";
import { theme } from "../styles";

type BaseErrorTextProps = {
	message?: string;
};

export const BaseErrorText = (props: BaseErrorTextProps) => {
	const { message } = props;
	if (!message) return;
	return (
		<Text style={styles.text} role="alert">
			{message}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		color: theme.utils.alert,
	},
});
