import { StyleSheet, View } from "react-native";
import { forwardRef } from "react";

import { BaseInput, type BaseInputProps, type BaseInputRef } from "./BaseInput";
import { BaseErrorText } from "./BaseErrorText";
import { BaseLabel } from "./BaseLabel";

type FieldProps = Omit<BaseInputProps, "nativeID" | "aria-labelledby"> & {
	labelText?: string;
	nativeID?: string;
	errorMessage?: string;
};

export const Field = forwardRef<BaseInputRef, FieldProps>((props, ref) => {
	const { labelText, nativeID, errorMessage, ...rest } = props;
	return (
		<View style={styles.container}>
			{labelText && <BaseLabel nativeID={nativeID}>{labelText}</BaseLabel>}
			<BaseInput {...rest} aria-labelledby={nativeID} ref={ref} />
			<BaseErrorText message={errorMessage} />
		</View>
	);
});

Field.displayName = "Field";

const styles = StyleSheet.create({
	container: {
		gap: 8,
	},
});
