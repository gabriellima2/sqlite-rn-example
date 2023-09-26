import { useEffect } from "react";

import { useTaskStore } from "../task.store";
import { showAlert } from "../../../helpers/show-alert";

export function useShowTaskError() {
	const { error } = useTaskStore((state) => state);

	useEffect(() => {
		if (!error) return;
		showAlert(error);
	}, [error]);
}
