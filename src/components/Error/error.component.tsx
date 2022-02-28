import { memo } from "react";
import { ErrorContainer, ErrorMessage } from "./error.styles";
import Icon from "../Icon/icon.component";

function Error() {
	console.log("Error component");

	return (
		<ErrorContainer>
			<Icon name="alert-triangle" color="currentColor" size={20} />
			<ErrorMessage>
				No recipes found for your query. Please try again!
			</ErrorMessage>
		</ErrorContainer>
	);
}

export default memo(Error);
