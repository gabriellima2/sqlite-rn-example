import { StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { theme } from "../../../styles";

type EditButtonProps = Omit<
	BaseButtonProps,
	"style" | "activeOpacity" | "children" | "accessibilityLabel"
>;

export const EditButton = (props: EditButtonProps) => {
	return (
		<BaseButton
			style={styles.button}
			accessibilityLabel="Editar tarefa"
			{...props}
		>
			<MaterialIcons name="edit" size={18} color={theme.text.primary} />
		</BaseButton>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: theme.brand + "80",
	},
});
