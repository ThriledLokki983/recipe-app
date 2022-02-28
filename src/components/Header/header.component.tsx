import { useState, useCallback } from "react";
import headerStyles from "./header.styles";
import Search from "./search.component";
import Navigation from "./navigation.component";
import BookMarks from "./bookmarks.component";
import AddRecipe from "../../components/Add-Recipe/add-recipe.component";
import logo from "../../img/logo.png";

function Header() {
	const [searchValue, setSearchValue] = useState("");
	const [isBookmarkActive, setIsBookmarkActive] = useState(false);
	const [isAddRecipeActive, setIsAddRecipeActive] = useState(false);
	console.log("Header component");

	const handleSearch = useCallback(
		(e: any) => {
			e.preventDefault();
			return searchValue;
		},
		[searchValue]
	);

	const handleChange = useCallback((e: any) => {
		if (e.target.value.length >= 3) {
			setSearchValue(e.target.value);
		}
	}, []);

	const handleBookmarkClick = useCallback(
		(e: any) => {
			e.preventDefault();
			setIsBookmarkActive(!isBookmarkActive);
		},
		[isBookmarkActive]
	);

	const handleAddRecipeClick = useCallback(
		(e: any) => {
			e.preventDefault();
			setIsAddRecipeActive(!isAddRecipeActive);
		},
		[isAddRecipeActive]
	);

	return (
		<headerStyles.HeaderContainer>
			<headerStyles.Logo src={logo} alt="Forkify" />
			<Search getValue={handleChange} getSearchValue={handleSearch} />
			<Navigation
				handleBookmarkClick={handleBookmarkClick}
				handleAddRecipeClick={handleAddRecipeClick}
			/>
			<BookMarks isActive={isBookmarkActive} />
			<AddRecipe
				isActive={isAddRecipeActive}
				handleIsActiveState={handleAddRecipeClick}
			/>
		</headerStyles.HeaderContainer>
	);
}

export default Header;
