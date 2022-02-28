import { memo } from "react";
import Icon from "../Icon/icon.component";
import UploadStyles from "./add-recipe.styles";
import FormGroup from "./form-group.component";

interface IAddRecipeProps {
	isActive: boolean;
	handleIsActiveState: (e: any) => void;
}

function AddRecipe({ isActive, handleIsActiveState }: IAddRecipeProps) {
	console.log("AddRecipe component");

	return (
		<UploadStyles.AddRecipeContainer className={isActive ? "" : "hidden"}>
			<UploadStyles.CloseModal onClick={handleIsActiveState}>
				&times;
			</UploadStyles.CloseModal>
			<UploadStyles.UploadForm>
				{/* Column 1 */}
				<UploadStyles.UploadColumn>
					<UploadStyles.UploadHeader>Recipe data</UploadStyles.UploadHeader>
					<FormGroup labelName="Title" inputName="title" type="text" />
					<FormGroup labelName="URL" inputName="sourceUrl" type="text" />
					<FormGroup labelName="Image URL" inputName="image" type="text" />
					<FormGroup labelName="Publisher" inputName="publisher" type="text" />
					<FormGroup
						labelName="Prep time"
						inputName="cooking time"
						type="text"
					/>
					<FormGroup labelName="Servings" inputName="servings" type="number" />
				</UploadStyles.UploadColumn>

				{/* Column 2 */}
				<UploadStyles.UploadColumn>
					<UploadStyles.UploadHeader>Ingredients</UploadStyles.UploadHeader>
					<FormGroup
						labelName="Ingredient 1"
						inputName="ingredient-1"
						// value="0.5, kg, Rice"
						type="text"
						placeholder={true}
					/>
					<FormGroup
						labelName="Ingredient 2"
						inputName="ingredient-2"
						// value="1,,Avocado"
						type="text"
						placeholder={true}
					/>
					<FormGroup
						labelName="Ingredient 3"
						inputName="ingredient-3"
						// value=",,salt"
						type="text"
						placeholder={true}
					/>
					<FormGroup
						labelName="Ingredient 4"
						inputName="ingredient-4"
						type="text"
						placeholder={true}
					/>
					<FormGroup
						labelName="Ingredient 5"
						inputName="ingredient-5"
						type="text"
						placeholder={true}
					/>
					<FormGroup
						labelName="Ingredient 6"
						inputName="ingredient-6"
						type="text"
						placeholder={true}
					/>
				</UploadStyles.UploadColumn>
				<UploadStyles.UploadButton>
					<Icon name="upload-cloud" color="currentColor" size={20} />
					<span>Upload</span>
				</UploadStyles.UploadButton>
			</UploadStyles.UploadForm>
		</UploadStyles.AddRecipeContainer>
	);
}

export default memo(AddRecipe);
