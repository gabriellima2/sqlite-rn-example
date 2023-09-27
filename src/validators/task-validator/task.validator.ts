import {
	insertTaskSchema,
	updateTaskSchema,
	deleteTaskSchema,
} from "./schemas";
import { validate } from "../../helpers/validate";

import type {
	DeleteTaskInputDTO,
	InsertTaskInputDTO,
	UpdateTaskInputDTO,
} from "../../dtos";

export class TaskValidator {
	insert(params: InsertTaskInputDTO) {
		return validate(params, insertTaskSchema);
	}
	update(params: UpdateTaskInputDTO) {
		return validate(params, updateTaskSchema);
	}
	delete(params: DeleteTaskInputDTO) {
		return validate(params, deleteTaskSchema);
	}
}
