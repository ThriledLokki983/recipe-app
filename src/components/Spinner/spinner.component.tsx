import { memo } from "react";
import { SpinnerContainer } from "./spinner.styles";
import Icon from "../Icon/icon.component";

function Spinner() {
	console.log("Spinner component");

	return (
		<SpinnerContainer>
			<Icon name="loader" color="currentColor" size={20} />
		</SpinnerContainer>
	);
}

export default memo(Spinner);
