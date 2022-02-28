import styled from "styled-components";

const RecipeContainer = styled.div`
	background-color: var(--color-grey-light-1);
`;

const RecipeFigure = styled.figure`
	height: 32rem;
	position: relative;
	// transform: scale(1.04) translateY(-1px);
	transform-origin: top;

	&::before {
		content: "";
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-image: linear-gradient(
			to right bottom,
			var(--color-grad-1),
			var(--color-grad-2)
		);
		opacity: 0.6;
	}
`;

const RecipeImage = styled.img`
	width: 100%;
	display: block;
	height: 100%;
	object-fit: cover;
`;

const RecipeTitle = styled.h1`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 20%) skewY(-6deg);
	color: #fff;
	font-weight: 700;
	font-size: 3.25rem;
	text-transform: uppercase;
	width: 50%;
	line-height: 1.95;
	text-align: center;

	span {
		-webkit-box-decoration-break: clone;
		box-decoration-break: clone;
		padding: 1.3rem 2rem;
		background-image: linear-gradient(
			to right bottom,
			var(--color-grad-1),
			var(--color-grad-2)
		);
	}

	@media only screen and (max-width: var(--bp-medium)) {
		width: 70%;
	}
`;

const MainRecipeDetails = styled.div`
	display: flex;
	align-items: center;
	padding: 7.5rem 8rem 3.5rem 8rem;
`;

const RecipeInfo = styled.div`
	font-size: 1.65rem;
	text-transform: uppercase;
	display: flex;
	align-items: center;

	&:not(:last-child) {
		margin-right: 4.5rem;
	}

	svg {
		height: 2.35rem;
		width: 2.35rem;
		fill: var(--color-primary);
		margin-right: 1.15rem;
	}
`;

const RecipeInfoData = styled.span`
	margin-right: 0.5rem;
	font-weight: 700;
`;

const RecipeInfoButtonContainer = styled.div`
	display: flex;
	margin-left: 1.6rem;
	transform: translateY(-1px);
`;

const RecipeInfoButton = styled.button`
	height: 2rem;
	width: 2rem;
	border: none;
	background: none;
	cursor: pointer;

	svg {
		height: 100%;
		width: 100%;
		fill: var(--color-primary);
		transition: all 0.3s;
	}

	&:focus {
		outline: none;
	}

	&:hover svg {
		fill: var(--color-grad-2);
		transform: translateY(-1px);
	}

	&:active svg {
		fill: var(--color-grad-2);
		transform: translateY(0);
	}

	&:not(:last-child) {
		margin-right: 0.3rem;
	}
`;

const RecipeUser = styled.div`
	background-color: darken(var(--color-grey-light-2), 2%);

	display: flex;
	align-items: center;
	justify-content: center;
	height: 4rem;
	width: 4rem;
	border-radius: 10rem;

	margin-left: auto;
	margin-right: 1.75rem;

	svg {
		height: 2.25rem;
		width: 2.25rem;
		fill: var(--color-primary);
	}
`;

const RecipeButtonRound = styled.button`
	background-image: var(--gradient);
	border-radius: 50%;
	border: none;
	cursor: pointer;
	height: 3.5rem;
	width: 3.5rem;
	// margin-left: auto;
	transition: all 0.2s;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		transform: scale(1.07);
	}

	&:focus {
		outline: none;
	}

	svg {
		height: 2.5rem;
		width: 2.5rem;
		fill: #fff;
	}
`;

const RecipeIngredients = styled.div`
	padding-inline: 8rem;
	padding-block-end: 6rem;
	padding-block-start: 5rem;
	font-size: 1.6rem;
	line-height: 1.4;
	background-color: var(--color-grey-light-2);
	display: flex;
	flex-direction: column;
	align-items: center;
	max-height: 22vh;
	overflow-y: scroll;
`;

const Heading = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	color: $color-primary;
	text-transform: uppercase;
	margin-bottom: 2.5rem;
	text-align: center;
	// transform: skewY(-3deg);
`;

const RecipeIngredientsList = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2.5rem 3rem;
	list-style: none;
`;

const RecipeIngredient = styled.li`
	display: flex;
`;

const RecipeQuantity = styled.div`
	margin-right: 0.5rem;
	flex: 0 0 auto;
`;

const RecipeDescription = styled.div``;

const RecipeUnit = styled.span``;

const RecipeDirections = styled.div`
	padding: 5rem 10rem;
	padding-bottom: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const RecipeDirectionsText = styled.p`
	font-size: 1.7rem;
	text-align: center;
	margin-bottom: 3.5rem;
	color: var(--color-grey-dark-2);
`;

const RecipeLink = styled.a`
	background-image: var(--gradient);
	border-radius: 10rem;
	border: none;
	text-transform: uppercase;
	color: #fff;
	cursor: pointer;
	display: flex;
	align-items: center;
	transition: all 0.2s;
	justify-content: center;
    width: fit-content;
    margin-inline: auto;
	margin-block-start: 1.5rem;
}

	&,
	&:link,
	&:visited {
		font-size: 1.4rem;
		font-weight: 600;
		padding: 1.25rem 2.25rem;
		text-decoration: none;

		svg {
			height: 1.75rem;
			width: 1.75rem;
			fill: currentColor;
		}
	}

	&:hover {
		transform: scale(1.05);
	}

	&:focus {
		outline: none;
	}
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	RecipeContainer,
	RecipeFigure,
	RecipeImage,
	RecipeTitle,
	MainRecipeDetails,
	RecipeInfo,
	RecipeInfoData,
	RecipeInfoButtonContainer,
	RecipeInfoButton,
	RecipeUser,
	RecipeButtonRound,
	RecipeIngredients,
	Heading,
	RecipeIngredientsList,
	RecipeIngredient,
	RecipeQuantity,
	RecipeDescription,
	RecipeUnit,
	RecipeDirections,
	RecipeDirectionsText,
	RecipeLink,
};
