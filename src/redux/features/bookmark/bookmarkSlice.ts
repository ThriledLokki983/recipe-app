import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../../types/globalTypes";

interface BookmarkState {
	bookmarks: Recipe[] | undefined;
}

const initialState: BookmarkState = {
	bookmarks: [],
};

const bookmarkSlice = createSlice({
	name: "Bookmarks",
	initialState,
	reducers: {
		setStateBookmarks: (state, action: PayloadAction<Recipe[]>) => {
			state.bookmarks = action.payload;
		},

		getAllBookmarks: (state) => {
			return state.bookmarks as any;
		},

		addToBookmarks: (state, action: PayloadAction<Recipe>) => {
			// check if the recipe is already in the bookmarks
			const isBookmarked = state.bookmarks?.some(
				(bookmark) => bookmark.id === action.payload.id
			);
			if (!isBookmarked) {
				state.bookmarks?.push(action.payload);
			} else {
				console.log("already bookmarked");
				// TODO: remove from bookmarks
			}
		},

		removeFromBookmarks: (state, action: PayloadAction<Recipe>) => {
			state.bookmarks?.splice(state.bookmarks?.indexOf(action.payload), 1);
		},
	},
});

export const {
	setStateBookmarks,
	getAllBookmarks,
	addToBookmarks,
	removeFromBookmarks,
} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
