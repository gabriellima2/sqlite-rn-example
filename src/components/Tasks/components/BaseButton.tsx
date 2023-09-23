import {
	TouchableOpacity,
	Text,
	StyleSheet,
	type TouchableOpacityProps,
} from "react-native";
import { theme } from "../../../styles";

export type BaseButtonProps = TouchableOpacityProps;

export const BaseButton = (props: BaseButtonProps) => {
	const { children, style } = props;
	return (
		<TouchableOpacity style={[style, styles.button]} activeOpacity={0.8}>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: "95%",
		justifyContent: "center",
		paddingHorizontal: 20,
		borderRadius: 8,
	},
	text: {
		color: theme.text.primary,
		fontWeight: "500",
	},
});
