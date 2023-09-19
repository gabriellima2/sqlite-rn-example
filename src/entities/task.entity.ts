export interface TaskEntity {
	id: number;
	title: string;
	description?: string;
	is_completed: 0 | 1;
	created_at: string;
	updated_at: string;
}
