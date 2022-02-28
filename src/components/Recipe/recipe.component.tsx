import { memo } from "react";
import RecipeStyles from "./recipe.styles";
import CommonStyles from "../Common/common.styles";
import Icon from "../Icon/icon.component";

import { useCurrentRecipeObject } from "../../customHooks/useCurrentRecipeObject";

import RecipeDetails from "./recipe-details.component";
import Spinner from "../Spinner/spinner.component";

function Recipe() {
	const [recipeObject] = useCurrentRecipeObject();
	console.log("Recipe component");

	return (
		<RecipeStyles.RecipeContainer>
			{Object.keys(recipeObject).length > 0 ? (
				<RecipeDetails recipeObject={recipeObject && recipeObject} />
			) : recipeObject === undefined ? (
				<>
					<CommonStyles.Message>
						<div>
							<Icon name="smile" color="currentColor" size={20} />
						</div>
						<p>Start by searching for a recipe or an ingredient. Have fun!</p>
					</CommonStyles.Message>
				</>
			) : (
				<Spinner />
			)}
		</RecipeStyles.RecipeContainer>
	);
}

export default memo(Recipe);
