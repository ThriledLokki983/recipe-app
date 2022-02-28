import { useState, useCallback, memo } from "react";
import RecipeStyles from "./recipe.styles";
import Icon from "../Icon/icon.component";
import { addToBookmarks } from "../../redux/features/bookmark/bookmarkSlice";
import {
	setBookmarkProperty,
	removeBookmarkProperty,
} from "../../redux/features/recipe/recipeSlice";
import { useAppDispatch } from "../../redux/app/hooks";

interface IRecipeProps {
	recipeData: any;
}

function RecipeButton({ recipeData }: IRecipeProps) {
	const dispatch = useAppDispatch();
	const [bookmarkState, setBookmarkState] = useState(recipeData.bookmark);

	const handleBookmark = useCallback(() => {
		dispatch(addToBookmarks(recipeData));
		if (recipeData.bookmark !== undefined || recipeData.bookmark !== false) {
			dispatch(setBookmarkProperty(recipeData));
			setBookmarkState(!bookmarkState);
		} else {
			dispatch(removeBookmarkProperty(recipeData));
			setBookmarkState(!bookmarkState);
		}
	}, [dispatch, recipeData, bookmarkState]);

	return (
		<RecipeStyles.RecipeButtonRound onClick={handleBookmark}>
			<Icon
				name={bookmarkState === true ? "bookmark-fill" : "bookmark"}
				color="currentColor"
				size={20}
			/>
		</RecipeStyles.RecipeButtonRound>
	);
}

export default memo(RecipeButton);
