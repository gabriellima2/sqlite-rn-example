import { StyleSheet, Text, TextProps } from "react-native";

type BaseLabelProps = TextProps;

export const BaseLabel = (props: BaseLabelProps) => {
	const { style, ...rest } = props;
	return <Text {...rest} style={[style, styles.label]} />;
};

const styles = StyleSheet.create({
	label: {
		fontWeight: "500",
		color: "#111111",
	},
});
