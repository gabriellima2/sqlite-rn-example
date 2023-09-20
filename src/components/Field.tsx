import { StyleSheet, View } from "react-native";

import { BaseInput, type BaseInputProps } from "./BaseInput";
import { BaseErrorText } from "./BaseErrorText";
import { BaseLabel } from "./BaseLabel";

type FieldProps = Omit<BaseInputProps, "nativeID" | "aria-labelledby"> & {
	labelText?: string;
	nativeID?: string;
	errorMessage?: string;
};

export const Field = (props: FieldProps) => {
	const { labelText, nativeID, errorMessage, ...rest } = props;
	return (
		<View style={styles.container}>
			{labelText && <BaseLabel nativeID={nativeID}>{labelText}</BaseLabel>}
			<BaseInput {...rest} aria-labelledby={nativeID} />
			<BaseErrorText message={errorMessage} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		gap: 6,
	},
});
