import { useEffect, useState } from "react";
import { useGetSingleRecipeQuery } from "../redux/features/api/apiSlice";
import { useAppDispatch } from "../redux/app/hooks";
import { setSingleRecipe } from "../redux/features/recipe/recipeSlice";

export const useSetRecipeData = (recipeId: string) => {
	const dispatch = useAppDispatch();
	const [currentRecipeData, setCurrentRecipeData] = useState<any>({});
	const { currentData } = useGetSingleRecipeQuery(recipeId);
	// console.log(currentData);

	useEffect(() => {
		if (currentData && (currentData as any)?.data) {
			const { recipe } = (currentData as any)?.data;
			if (recipe) {
				setCurrentRecipeData(recipe);
				dispatch(setSingleRecipe(recipe));
				// console.log(currentRecipeData);
			} else {
				console.log("no recipe");
			}
		}
	}, [currentData, recipeId, dispatch, currentRecipeData]);

	// return status;
};
