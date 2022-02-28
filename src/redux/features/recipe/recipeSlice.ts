import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../../types/globalTypes";

// the shape of the Recipe state
interface RecipeState {
	recipes: Recipe[] | undefined;
	recipe: Recipe | undefined;
}

const initialState: RecipeState = {
	recipes: [],
	recipe: {} as Recipe,
};

const recipeSlice = createSlice({
	name: "Recipe",
	initialState,
	reducers: {
		setStateRecipes: (state, action: PayloadAction<Recipe[]>) => {
			state.recipes = action.payload;
		},

		getAllRecipes: (state) => {
			return state.recipes as any;
		},

		setSingleRecipe: (state, action: PayloadAction<any>) => {
			state.recipe = action.payload;
		},

		setBookmarkProperty: (state, action: PayloadAction<Recipe>) => {
			state.recipe = action.payload;
			state.recipe.bookmark = true;
		},

		removeBookmarkProperty: (state, action: PayloadAction<Recipe>) => {
			state.recipe = action.payload;
			state.recipe.bookmark = false;
		},
	},
});

export const {
	setStateRecipes,
	getAllRecipes,
	setSingleRecipe,
	setBookmarkProperty,
	removeBookmarkProperty,
} = recipeSlice.actions;
export default recipeSlice.reducer;
