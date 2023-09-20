import {
	Text,
	StyleSheet,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

type BaseButtonProps = TouchableOpacityProps;

export const BaseButton = (props: BaseButtonProps) => {
	const { children, style, ...rest } = props;
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			{...rest}
			style={[style, styles.button]}
		>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: "auto",
		height: 45,
		alignItems: "center",
		justifyContent: "center",
		padding: 12,
		backgroundColor: "#111111",
	},
	text: {
		color: "#f1f1f1",
		fontWeight: "500",
	},
});
