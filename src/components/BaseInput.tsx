import { StyleSheet, TextInput, TextInputProps } from "react-native";

type BaseInputProps = TextInputProps;

export const BaseInput = (props: BaseInputProps) => {
	const { style, ...rest } = props;
	return (
		<TextInput
			{...rest}
			style={[style, styles.input]}
			placeholderTextColor="#00000075"
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 45,
		borderBottomWidth: 1,
		borderBottomColor: "#d4d4d4",
		padding: 12,
		fontSize: 14,
	},
});
