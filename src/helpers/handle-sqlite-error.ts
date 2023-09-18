import { SQLError } from "expo-sqlite";

export function handleSQLiteError(
	error: SQLError,
	reject: (reason?: string) => void
) {
	reject(error.message);
	return false;
}
