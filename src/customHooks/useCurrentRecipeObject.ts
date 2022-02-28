import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/app/hooks";

export const useCurrentRecipeObject = () => {
	const [currentRecipeObject, setCurrentRecipeObject] = useState<any>({});
	const currentRecipe = useAppSelector((state) => state.recipe.recipe);

	useEffect(() => {
		if (currentRecipe !== undefined) {
			setCurrentRecipeObject(currentRecipe);
		}
	}, [currentRecipe]);

	return [currentRecipeObject];
};
