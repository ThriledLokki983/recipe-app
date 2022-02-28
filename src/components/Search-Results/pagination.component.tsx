import { useState, useEffect } from "react";
import ResultsStyles from "./results.styles";
import Icon from "../Icon/icon.component";

interface IResultsProps {
	numberOfPages: number;
	handleCalcOfNextPage: (e: any) => void;
	handleCalcOfPrevPage: (e: any) => void;
}

function Pagination({
	numberOfPages,
	handleCalcOfNextPage,
	handleCalcOfPrevPage,
}: IResultsProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const [prevPage, setPrevPage] = useState(1);
	const [nextPage, setNextPage] = useState(1);

	console.log("Pagination component");

	// handle loading of previous page
	const handlePrevPage = (e: any) => {
		const button = e.target.parentElement;

		if (currentPage === numberOfPages && numberOfPages > 1) {
			button.disabled = false;
			setCurrentPage(currentPage - 1);
		} else if (currentPage > 1) {
			button.disabled = false;
			setCurrentPage(currentPage - 1);
		} else {
			button.disabled = true;
		}
	};

	// handle loading of next page
	const handleNextPage = (e: any) => {
		const button = e.target.parentElement;

		if (currentPage === 1 && numberOfPages > 1) {
			button.disabled = false;
			setCurrentPage(currentPage + 1);
		} else if (currentPage < numberOfPages) {
			button.disabled = false;
			setCurrentPage(currentPage + 1);
		} else {
			button.disabled = true;
		}
	};

	useEffect(() => {
		setPrevPage(currentPage - 1);
		setNextPage(currentPage + 1);
	}, [currentPage]);

	return (
		<ResultsStyles.PaginationContainer>
			<ResultsStyles.PaginationPrevButton
				onClick={(e) => {
					handlePrevPage(e);
					handleCalcOfPrevPage(e);
				}}
				data-goto={prevPage}
			>
				<Icon name="arrow-left" color="currentColor" size={20} />
				<span>Page-{prevPage}</span>
			</ResultsStyles.PaginationPrevButton>
			<ResultsStyles.CurrentPageButton>
				<span>{currentPage}</span>
			</ResultsStyles.CurrentPageButton>
			<ResultsStyles.PaginationNextButton
				onClick={(e) => {
					handleNextPage(e);
					handleCalcOfNextPage(e);
				}}
				data-goto={nextPage}
			>
				<span>Page-{nextPage}</span>
				<Icon name="arrow-right" color="currentColor" size={20} />
			</ResultsStyles.PaginationNextButton>
		</ResultsStyles.PaginationContainer>
	);
}

export default Pagination;
