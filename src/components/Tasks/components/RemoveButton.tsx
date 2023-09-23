import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { theme } from "../../../styles";

type RemoveButtonProps = Omit<
	BaseButtonProps,
	"style" | "activeOpacity" | "children" | "accessibilityLabel"
>;

export const RemoveButton = (props: RemoveButtonProps) => {
	return (
		<BaseButton
			style={styles.button}
			accessibilityLabel="Remover tarefa"
			{...props}
		>
			<Ionicons name="remove-circle" size={18} color={theme.text.primary} />
		</BaseButton>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "flex-end",
		backgroundColor: theme.utils.alert + "80",
	},
});
