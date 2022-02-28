import { useState, memo, useCallback, useEffect } from "react";
import RecipeStyles from "./recipe.styles";
import Icon from "../Icon/icon.component";
import Ingredient from "./ingredient.component";
import RecipeButton from "./recipeButton.component";

// import { setBookmarkProperty } from "../../redux/features/recipe/recipeSlice";
// import { useAppDispatch } from "../../redux/app/hooks";

interface IRecipeProps {
	recipeObject: any;
}

function RecipeDetails({ recipeObject }: IRecipeProps) {
	const [currentRecipe, setCurrentRecipe] = useState(recipeObject);
	// const dispatch = useAppDispatch();

	console.log("RecipeDetails component");

	const [servings, setServings] = useState(
		recipeObject && recipeObject.servings
	);

	const handleServings = useCallback(() => {
		if (servings > 1) {
			setServings(servings - 1);
		}
	}, [servings]);

	// const handleBookmarkState = useCallback(() => {
	// 	dispatch(setBookmarkProperty(recipeObject));
	// }, [dispatch, recipeObject]);

	useEffect(() => {
		setCurrentRecipe(recipeObject);
	}, [recipeObject]);

	return (
		<>
			<RecipeStyles.RecipeFigure>
				<RecipeStyles.RecipeImage
					src={currentRecipe && currentRecipe.image_url}
				/>
			</RecipeStyles.RecipeFigure>
			<RecipeStyles.MainRecipeDetails>
				<RecipeStyles.RecipeInfo>
					<Icon name="clock" color="currentColor" size={20} />
					<RecipeStyles.RecipeInfoData>
						{currentRecipe && currentRecipe.cooking_time}
					</RecipeStyles.RecipeInfoData>
					<RecipeStyles.RecipeInfoData>Minutes</RecipeStyles.RecipeInfoData>
				</RecipeStyles.RecipeInfo>
				<RecipeStyles.RecipeInfo>
					<Icon name="users" color="currentColor" size={20} />
					<RecipeStyles.RecipeInfoData>
						{servings ? servings : 0}
					</RecipeStyles.RecipeInfoData>
					<RecipeStyles.RecipeInfoButtonContainer>
						<RecipeStyles.RecipeInfoButton onClick={handleServings}>
							<Icon name="minus-circle" color="currentColor" size={20} />
						</RecipeStyles.RecipeInfoButton>
						<RecipeStyles.RecipeInfoButton
							onClick={() => setServings(servings + 1)}
						>
							<Icon name="plus-circle" color="currentColor" size={20} />
						</RecipeStyles.RecipeInfoButton>
					</RecipeStyles.RecipeInfoButtonContainer>
				</RecipeStyles.RecipeInfo>
				<RecipeStyles.RecipeUser>
					<Icon name="user" color="currentColor" size={20} />
				</RecipeStyles.RecipeUser>
				<RecipeButton recipeData={currentRecipe} />
			</RecipeStyles.MainRecipeDetails>
			<RecipeStyles.RecipeIngredients>
				<RecipeStyles.Heading>Recipe ingredients.</RecipeStyles.Heading>
				<RecipeStyles.RecipeIngredientsList>
					{currentRecipe ? (
						currentRecipe.ingredients.map((ingredient: any, index: number) => (
							<Ingredient data={ingredient} key={index} />
						))
					) : (
						<p>No ingredients</p>
					)}
				</RecipeStyles.RecipeIngredientsList>
			</RecipeStyles.RecipeIngredients>
			<RecipeStyles.RecipeIngredients className="no-tb-padding">
				<RecipeStyles.RecipeDirections>
					<RecipeStyles.Heading>How to cook it.</RecipeStyles.Heading>
					<RecipeStyles.RecipeDirectionsText>
						This recipe was carefully designed and tested by{" "}
						<span>{currentRecipe && currentRecipe.publisher}</span>. Please
						check out directions at their website.
						<RecipeStyles.RecipeLink
							href={`${currentRecipe && currentRecipe.source_url}`}
							target="_blank"
						>
							<span>Directions</span>
							<Icon name="arrow-right" color="currentColor" size={20} />
						</RecipeStyles.RecipeLink>
					</RecipeStyles.RecipeDirectionsText>
				</RecipeStyles.RecipeDirections>
			</RecipeStyles.RecipeIngredients>
		</>
	);
}

export default memo(RecipeDetails);
