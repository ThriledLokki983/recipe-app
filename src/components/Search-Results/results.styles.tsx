import styled from "styled-components";

const MainSearchResults = styled.div`
	border-top: 1px solid var(--color-grey-light-1);
	padding-bottom: 3rem;
	display: flex;
	flex-direction: column;
`;

const Results = styled.ul`
	list-style: none;
	margin-bottom: 2rem;
`;

const Pagination = styled.div`
	margin-top: auto;
	padding: 0 3.5rem;

	&::after {
		content: "";
		display: table;
		clear: both;
	}

	// &__btn {
	// 	&--prev {
	// 		float: left;
	// 	}
	// 	&--next {
	// 		float: right;
	// 	}
	// }
`;

const Copyright = styled.p`
	color: var(--color-grey-dark-2);
	border-top: 1px solid var(--color-grey-light-1);
	font-size: 1.2rem;
	padding: 0 3.5rem;
	margin-top: 3rem;
	padding-top: 1rem;

	a {
		color: var(--color-primary);

		&:hover {
			color: var(--color-primary-dark);
		}
	}

	a:link,
	a:visited {
		color: var(color-grey-dark-2);
	}

	p {
		max-width: 90%;
	}
`;

const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: auto;
	padding: 0 3.5rem;
`;

const PaginationButton = styled.button`
	color: var(--color-primary);
	font-size: 1.3rem;
	font-weight: 600;
	border: none;
	background-color: var(--color-grey-light-1);
	padding: 0.8rem 1.2rem;
	border-radius: 10rem;
	cursor: pointer;

	display: flex;
	align-items: center;
	transition: all 0.2s;

	svg {
		height: 1.6rem;
		width: 1.6rem;
		fill: currentColor;
		margin: 0 0.2rem;
	}

	span {
		margin: 0 0.4rem;
	}

	&:hover {
		color: var(--color-white);
		background-image: var(--gradient);
	}

	&:focus {
		outline: none;
	}

	&:disabled {
		color: var(--color-grad-2);
		background-color: var(--color-grey-light-1);
		cursor: not-allowed;
	}
`;

const PaginationPrevButton = styled(PaginationButton)``;

const PaginationNextButton = styled(PaginationButton)``;

const CurrentPageButton = styled(PaginationButton)`
	color: var(--color-grad-2);
	background-color: var(--color-grey-light-2);
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	MainSearchResults,
	Results,
	Pagination,
	Copyright,
	PaginationContainer,
	PaginationPrevButton,
	PaginationNextButton,
	CurrentPageButton,
};
