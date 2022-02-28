import { memo } from "react";
import UploadStyles from "./add-recipe.styles";

interface IAddRecipeProps {
	labelName: string;
	inputName: string;
	type?: "text" | "number";
	placeholder?: boolean;
	// value?: string;
}

function FormGroup({
	labelName,
	inputName,
	type,
	placeholder,
}: IAddRecipeProps) {
	console.log("FormGroup component");

	return (
		<UploadStyles.FormGroup>
			<UploadStyles.UploadLabel>{labelName}</UploadStyles.UploadLabel>
			<UploadStyles.UploadInput
				type={type === "text" ? "text" : "number"}
				required
				name={inputName}
				// value={value ? value : ""}
				placeholder={
					placeholder
						? "Format: 'Quantity,Unit,Description'"
						: `Enter ${labelName}`
				}
			/>
		</UploadStyles.FormGroup>
	);
}

export default memo(FormGroup);
