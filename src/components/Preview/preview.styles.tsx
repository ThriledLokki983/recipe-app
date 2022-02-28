import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PreviewItem = styled.li``;

const PreviewLink = styled(NavLink)`
	display: flex;
	padding: 1rem 0;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:link,
	&:visited {
		display: flex;
		align-items: center;
		// padding: 1.5rem 3.25rem;
		transition: all 0.3s;
		border-right: 1px solid #fff;
		text-decoration: none;
	}

	&:hover {
		background-color: var(--color-grey-light-1);
		// transform: translateY(2px);
	}

	// &--active {
	// 	background-color: $color-grey-light-1;
	// }
`;

const PreviewFigure = styled.figure`
	flex: 0 0 5.8rem;
	border-radius: 50%;
	overflow: hidden;
	height: 5.8rem;
	margin-inline: 2rem;
	position: relative;
	backface-visibility: hidden;

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
		opacity: 0.4;
	}
`;

const PreviewImg = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: all 0.3s;
`;

const PreviewContent = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 2rem;
	row-gap: 0.1rem;
	align-items: center;
	margin-inline-end: 2rem;
`;

const PreviewTitle = styled.h4`
	grid-column: 1/-1;
	font-size: 1.45rem;
	color: var(--color-primary);
	text-transform: uppercase;
	font-weight: 600;

	// This is how text is truncated!
	text-overflow: ellipsis;
	max-width: 25rem;
	white-space: nowrap;
	overflow: hidden;
`;

const PreviewPublisher = styled.p`
	font-size: 1.15rem;
	color: var(--color-grey-dark-2);
	text-transform: uppercase;
	font-weight: 600;
`;

const PreviewUser = styled.div`
	background-color: darken(var(--color-grey-light-2), 2%);

	display: flex;
	align-items: center;
	justify-content: center;
	height: 2rem;
	width: 2rem;
	border-radius: 10rem;

	margin-left: auto;
	// margin-right: 1.75rem;

	svg {
		height: 1.5rem;
		width: 1.5rem;
		fill: var(--color-primary);
	}
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	PreviewItem,
	PreviewLink,
	PreviewFigure,
	PreviewImg,
	PreviewContent,
	PreviewTitle,
	PreviewPublisher,
	PreviewUser,
};
