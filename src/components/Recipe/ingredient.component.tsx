import { memo } from "react";
import { Fraction } from "fractional";
import RecipeStyles from "./recipe.styles";
import Icon from "../Icon/icon.component";

interface IProps {
	data: any;
}

function Ingredient({ data }: IProps) {
	console.log("Ingredient component");

	return (
		<RecipeStyles.RecipeIngredient>
			<Icon name="check" color="currentColor" size={20} />
			<RecipeStyles.RecipeQuantity>
				{data.quantity && new Fraction(data.quantity).toString()}
			</RecipeStyles.RecipeQuantity>
			<RecipeStyles.RecipeDescription>
				<RecipeStyles.RecipeUnit>{data.unit}</RecipeStyles.RecipeUnit>
				{data.description}
			</RecipeStyles.RecipeDescription>
		</RecipeStyles.RecipeIngredient>
	);
}

export default memo(Ingredient);
