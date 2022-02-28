import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import recipeReducer from "../features/recipe/recipeSlice";
import bookmarkReducer from "../features/bookmark/bookmarkSlice";
import { apiSlice } from "../features/api/apiSlice";

const reduces = combineReducers({
	recipe: recipeReducer,
	bookmark: bookmarkReducer,
	[apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
	reducer: reduces,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({ serializableCheck: false }).concat(
			apiSlice.middleware
		);
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
