import { Text } from "react-native";
import type { ComponentType } from "react";

import { usePopulateTaskStore } from "../hooks";
import { useTaskStore } from "../task.store";

export function WithTaskStorePopulated<P extends {}>(
	Component: ComponentType<P>
) {
	return function hoc(props: P) {
		usePopulateTaskStore();
		const { isLoading, tasks, error } = useTaskStore((state) => state);
		if (isLoading) return <Text>Loading...</Text>;
		if (!isLoading && !tasks && error) return <Text>{error}</Text>;
		return <Component {...(props as P)} />;
	};
}
