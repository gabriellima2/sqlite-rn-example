import {
	Text,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator,
	type TouchableOpacityProps,
} from "react-native";
import { theme } from "../styles";

type BaseButtonProps = TouchableOpacityProps & {
	loading?: boolean;
};

export const BaseButton = (props: BaseButtonProps) => {
	const { children, style, loading, ...rest } = props;
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			{...rest}
			style={[style, styles.button, loading && styles.disabled]}
			disabled={loading}
		>
			<Text style={styles.text}>
				{loading ? <ActivityIndicator /> : children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: "auto",
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		padding: 12,
		backgroundColor: theme.brand,
	},
	text: {
		color: theme.text.secondary,
		fontWeight: "500",
	},
	disabled: {
		pointerEvents: "none",
		opacity: 0.5,
	},
});
