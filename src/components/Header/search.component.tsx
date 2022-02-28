import { useState, useEffect } from "react";
import headerStyles from "./header.styles";
import Icon from "../Icon/icon.component";

// REDUX
import { useGetAllRecipesQuery } from "../../redux/features/api/apiSlice";
import { useAppDispatch } from "../../redux/app/hooks";
import { setStateRecipes } from "../../redux/features/recipe/recipeSlice";

interface ISearchProps {
	getValue: (e: any) => void;
	getSearchValue: (e: any) => string;
}

function Search({ getValue, getSearchValue }: ISearchProps) {
	console.log("Search component");

	const dispatch = useAppDispatch();
	const [searchValue, setSearchValue] = useState("");
	const { data } = useGetAllRecipesQuery(searchValue);

	useEffect(() => {
		dispatch(setStateRecipes((data as unknown as any)?.data?.recipes));
	}, [data, dispatch]);

	return (
		<headerStyles.Search>
			<headerStyles.SearchField
				onChange={(e) => getValue(e)}
				type="text"
				placeholder="Search over 1,000,000 recipes..."
			/>
			<headerStyles.SearchButton
				onClick={(e) => {
					setSearchValue(getSearchValue(e));
				}}
			>
				<Icon name="search" color="currentColor" size={20} />
				<span>Search</span>
			</headerStyles.SearchButton>
		</headerStyles.Search>
	);
}

export default Search;
// export default React.memo(Search);
