export interface TaskEntity {
	id: string;
	title: string;
	description?: string;
	is_completed: boolean;
	created_at: string;
	updated_at: string;
}
