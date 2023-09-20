import { StyleSheet, Text } from "react-native";

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
		color: "#ec3535",
	},
});
