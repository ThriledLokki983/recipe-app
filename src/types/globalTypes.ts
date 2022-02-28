export type QueryArgs = {
	search?: string;
	key?: boolean;
};

export type Recipe = {
	publisher: string;
	image_url: string;
	title: string;
	id: string;
	bookmark: boolean;
};

export type QueryResult<T> = {
	data: {
		data: {
			recipe: T;
		};
	};
	loading: boolean;
	error: any;
};

export type RecipeObject = {
	publisher: string;
	ingredients: Ingredient[];
	image_url: string;
	source_url: string;
	title: string;
	id: string;
	cooking_time: string;
	servings: string;
};

type Ingredient = {
	quantity: number;
	unit: string;
	description: string;
};
