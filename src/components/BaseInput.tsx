import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { theme } from "../styles";

export type BaseInputProps = TextInputProps;

export const BaseInput = (props: BaseInputProps) => {
	const { style, ...rest } = props;
	return (
		<TextInput
			{...rest}
			style={[style, styles.input]}
			placeholderTextColor={theme.text.secondary}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 60,
		backgroundColor: theme.overlay,
		padding: 12,
		paddingHorizontal: 16,
		fontSize: 14,
		borderRadius: 20,
	},
});
