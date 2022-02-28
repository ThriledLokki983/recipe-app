import { memo } from "react";
import headerStyles from "./header.styles";
import Icon from "../Icon/icon.component";

interface IProps {
	handleBookmarkClick: (e: any) => void;
	handleAddRecipeClick: (e: any) => void;
}

function Navigation({ handleBookmarkClick, handleAddRecipeClick }: IProps) {
	return (
		<headerStyles.Navigation>
			<headerStyles.NavList>
				<headerStyles.NavItem>
					<headerStyles.NavButton onClick={handleAddRecipeClick}>
						<Icon name="edit" color="currentColor" size={20} />
						<span>Add recipe</span>
					</headerStyles.NavButton>
				</headerStyles.NavItem>
				<headerStyles.NavItem>
					<headerStyles.NavButton onClick={handleBookmarkClick}>
						<Icon name="bookmark" color="currentColor" size={20} />
						<span>Bookmarks</span>
					</headerStyles.NavButton>
				</headerStyles.NavItem>
			</headerStyles.NavList>
		</headerStyles.Navigation>
	);
}

export default memo(Navigation);
