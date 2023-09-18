import {
	InsertTaskInputDTO,
	DeleteTaskInputDTO,
	UpdateTaskInputDTO,
	GetAllTasksOutputDTO,
	UpdateTaskOutputDTO,
	DeleteTaskOutputDTO,
	InsertTaskOutputDTO,
} from "../dtos";
import { TaskRepository } from "./task.repository";
import { TaskEntity } from "../entities";

import { handleSQLiteError } from "../helpers/handle-sqlite-error";
import { db } from "../configs";

export class TaskRepositoryImpl implements TaskRepository {
	insert(params: InsertTaskInputDTO): Promise<InsertTaskOutputDTO> {
		const { title, description, is_completed } = params;
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					"INSERT INTO tasks (title, description, is_completed, updated_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP);",
					[title, description ?? null, is_completed],
					(tx, result) => {
						if (!result.insertId) return;
						return tx.executeSql(
							"SELECT * FROM tasks WHERE id = ?;",
							[result.insertId],
							(_, result) => {
								const { rows } = result;
								if (rows._array.length === 0) return reject(new Error());
								resolve(rows._array[0] as TaskEntity);
							},
							(_, err) => handleSQLiteError(err, reject)
						);
					},
					(_, err) => handleSQLiteError(err, reject)
				);
			});
		});
	}
	delete(params: DeleteTaskInputDTO): Promise<DeleteTaskOutputDTO> {
		throw new Error("Method not implemented");
	}
	update(params: UpdateTaskInputDTO): Promise<UpdateTaskOutputDTO> {
		throw new Error("Method not implemented");
	}
	getAll(): Promise<GetAllTasksOutputDTO> {
		throw new Error("Method not implemented");
	}
}
