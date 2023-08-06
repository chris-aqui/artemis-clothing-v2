export interface Category {
	id: number;
	title: string;
	imageUrl: string;
}

export interface DefaultFormField {
	displayName?: string;
	email: string;
	password: string;
	confirmPassword?: string;
}