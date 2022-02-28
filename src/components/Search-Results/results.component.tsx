import { useCallback, useEffect, useState, memo } from "react";
import ResultsStyles from "./results.styles";
import { RES_PER_PAGE } from "../../redux/app/common";
import { useAppSelector } from "../../redux/app/hooks";

import { useSetRecipeData } from "../../customHooks/useSetRecipeData";

// Preview Component
import Preview from "../Preview/preview.component";
import Pagination from "./pagination.component";
import Spinner from "../Spinner/spinner.component";

function SearchResults() {
	console.log("SearchResults component");
	const [data, setData] = useState([]);
	const [recipeId, setRecipeId] = useState("5ed6604691c37cdc054bd068");
	const numberOfPages = Math.ceil(data && data.length / (RES_PER_PAGE - 1));
	const [prevIndexPage, setPrevIndexPages] = useState<number>(0);
	const [nextIndexPage, setNextIndexPages] = useState<number>(RES_PER_PAGE);
	const [currentRecipes, setCurrentRecipes] = useState([]);
	useSetRecipeData(recipeId);
	const allRecipes = useAppSelector((state) => state.recipe);

	const handlePrevPage = useCallback(
		(e: any) => {
			const buttonId = parseInt(e.target.parentElement.dataset.goto);

			if (buttonId <= numberOfPages && buttonId > 0) {
				setNextIndexPages(nextIndexPage - RES_PER_PAGE);
				setPrevIndexPages(prevIndexPage - RES_PER_PAGE);
			} else {
				e.target.parentElement.disabled = true;
			}
		},
		[nextIndexPage, prevIndexPage, numberOfPages]
	);

	const handleNextPage = useCallback(
		(e: any) => {
			const buttonId = parseInt(e.target.parentElement.dataset.goto);

			if (buttonId <= numberOfPages) {
				setNextIndexPages(nextIndexPage + RES_PER_PAGE);
				setPrevIndexPages(prevIndexPage + RES_PER_PAGE);
			} else {
				e.target.parentElement.disabled = true;
			}
		},
		[nextIndexPage, prevIndexPage, numberOfPages]
	);

	const getCurrentRecipeId = useCallback((e: any) => {
		e.preventDefault();
		setRecipeId(window.location.href.split("/").at(-1)!);
	}, []);

	useEffect(() => {
		setCurrentRecipes(data && data.slice(prevIndexPage, nextIndexPage));
	}, [data, prevIndexPage, nextIndexPage]);

	useEffect(() => {
		setData(allRecipes && (allRecipes as unknown as any)?.recipes);
	}, [allRecipes]);

	return (
		<ResultsStyles.MainSearchResults>
			<ResultsStyles.Results>
				{currentRecipes ? (
					currentRecipes.map((recipe: any) => (
						<Preview
							key={recipe.id}
							data={recipe}
							handleClick={getCurrentRecipeId}
						/>
					))
				) : (
					<Spinner />
				)}
			</ResultsStyles.Results>
			<Pagination
				numberOfPages={numberOfPages}
				handleCalcOfNextPage={handleNextPage}
				handleCalcOfPrevPage={handlePrevPage}
			/>
			<ResultsStyles.Copyright>
				&copy; Forkify 2022.
				<a
					href="https://github.com/ThriledLokki983"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					Gideon Nimoh
				</a>{" "}
				<span>
					All rights reserved. Use for learning or your portfolio. Don't use to
					teach. Don't claim as your own.
				</span>
			</ResultsStyles.Copyright>
		</ResultsStyles.MainSearchResults>
	);
}

export default memo(SearchResults);
