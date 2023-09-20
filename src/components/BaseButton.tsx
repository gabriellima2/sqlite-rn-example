import {
	Text,
	StyleSheet,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";
import { theme } from "../styles";

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
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		padding: 12,
		backgroundColor: theme.brand,
	},
	text: {
		color: theme.text.primary,
		fontWeight: "500",
	},
});
