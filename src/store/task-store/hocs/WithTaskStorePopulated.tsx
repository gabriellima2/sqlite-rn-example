import { Text } from "react-native";
import type { ComponentType } from "react";

import { usePopulateTaskStore } from "../hooks";
import { useTaskStore } from "../task.store";

export function WithTaskStorePopulated<P extends {}>(
	Component: ComponentType<P>
) {
	return function hoc(props: P) {
		usePopulateTaskStore();
		const { isLoading, error } = useTaskStore((state) => state);
		if (isLoading) return <Text>Loading...</Text>;
		if (!isLoading && error) return <Text>{error}</Text>;
		return <Component {...(props as P)} />;
	};
}
