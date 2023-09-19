import {
	InsertTaskInputDTO,
	DeleteTaskInputDTO,
	UpdateTaskInputDTO,
	GetAllTasksOutputDTO,
	UpdateTaskOutputDTO,
	DeleteTaskOutputDTO,
	InsertTaskOutputDTO,
	FindTaskByIDInput,
	FindTaskByIDOutput,
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
					(_, result) => {
						if (!result.insertId) return;
						resolve(this.findByID(result.insertId));
					},
					(_, err) => handleSQLiteError(err, reject)
				);
			});
		});
	}
	delete(params: DeleteTaskInputDTO): Promise<DeleteTaskOutputDTO> {
		const { id } = params;
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					"SELECT * FROM tasks WHERE id = ?;",
					[id],
					(_, result) => {
						const task = result.rows._array[0] as TaskEntity;
						if (!task) return reject(new Error());
						tx.executeSql(
							"DELETE FROM tasks WHERE id = ?;",
							[id],
							() => resolve(task),
							(_, err) => handleSQLiteError(err, reject)
						);
					},
					(_, err) => handleSQLiteError(err, reject)
				);
			});
		});
	}
	update(params: UpdateTaskInputDTO): Promise<UpdateTaskOutputDTO> {
		const { id, title, description, is_completed } = params;
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					"UPDATE tasks SET title = COALESCE(?, title), description = COALESCE(?, description), is_completed = COALESCE(?, is_completed), updated_at = CURRENT_TIMESTAMP WHERE id = ?;",
					[title ?? null, description ?? null, is_completed ?? null, id],
					() => resolve(this.findByID(id)),
					(_, err) => handleSQLiteError(err, reject)
				);
			});
		});
	}
	getAll(): Promise<GetAllTasksOutputDTO> {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					"SELECT * FROM tasks;",
					[],
					(_, result) => resolve(result.rows._array as TaskEntity[]),
					(_, err) => handleSQLiteError(err, reject)
				);
			});
		});
	}
	findByID(id: FindTaskByIDInput): Promise<FindTaskByIDOutput> {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					"SELECT * FROM tasks WHERE id = ?;",
					[id],
					(_, result) => {
						const task = result.rows._array[0] as TaskEntity;
						if (!task) return reject(new Error());
						resolve(task);
					},
					(_, err) => handleSQLiteError(err, reject)
				);
			});
		});
	}
}
