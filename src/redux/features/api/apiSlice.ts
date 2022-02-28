import { API_URL, KEY } from "../../app/common";
import { Recipe } from "../../../types/globalTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints(builder) {
		return {
			getAllRecipes: builder.query<Recipe[], any>({
				query: (searchTerm: string) => `?search=${searchTerm}?key=${KEY}`,
			}),

			getSingleRecipe: builder.query<Recipe, any>({
				query: (id: string) => `/${id}?key=${KEY}`,
			}),
		};
	},
});

export const { useGetAllRecipesQuery, useGetSingleRecipeQuery } = apiSlice;
