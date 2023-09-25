import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { forwardRef } from "react";

import { theme } from "../styles";

export type BaseInputProps = TextInputProps;
export type BaseInputRef = TextInput;

export const BaseInput = forwardRef<TextInput, BaseInputProps>((props, ref) => {
	const { style, ...rest } = props;
	return (
		<TextInput
			{...rest}
			ref={ref}
			style={[style, styles.input]}
			placeholderTextColor={theme.text.tertiary}
		/>
	);
});

BaseInput.displayName = "BaseInput";

const styles = StyleSheet.create({
	input: {
		height: 60,
		backgroundColor: theme.overlay,
		padding: 12,
		paddingHorizontal: 16,
		fontSize: 14,
		color: theme.text.primary,
		borderRadius: 8,
	},
});
