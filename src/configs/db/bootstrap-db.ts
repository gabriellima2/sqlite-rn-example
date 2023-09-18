import { db } from "./db";
import { taskMigration } from "../../migrations";

export function bootstrapDB() {
	db.transaction((tx) => {
		tx.executeSql(
			`CREATE TABLE IF NOT EXISTS ${taskMigration}`,
			[],
			undefined,
			(_, error) => {
				throw new Error(error.message);
			}
		);
	});
}
