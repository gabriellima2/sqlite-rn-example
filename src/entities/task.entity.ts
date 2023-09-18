export interface TaskEntity {
	id: string;
	title: string;
	description?: string;
	is_completed: 0 | 1;
	created_at: string;
	updated_at: string;
}
