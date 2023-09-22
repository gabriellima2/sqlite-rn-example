import { useEffect } from "react";
import { useTaskStore } from "../task.store";

export const usePopulateTaskStore = () => {
	const { getAll } = useTaskStore((state) => state);
	useEffect(() => {
		getAll();
	}, [getAll]);
};
