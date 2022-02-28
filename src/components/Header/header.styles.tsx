/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";

const HeaderContainer = styled.header`
	grid-area: head;
	background-color: $color-grey-light-1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;

const Logo = styled.img`
	margin-left: 4rem;
	height: 4.6rem;
	display: block;
`;

const Search = styled.form`
	background-color: var(--color-white);
	border-radius: 10rem;
	display: flex;
	align-items: center;
	padding-left: 3rem;
	transition: all 0.3s;

	&:focus-within {
		transform: translateY(-2px);
		box-shadow: 0 0.7rem 3rem rgba(var(--color-grey-dark-1), 0.08);
	}
`;

const SearchField = styled.input`
	border: none;
	background: none;
	font-family: inherit;
	color: inherit;
	font-size: 1.7rem;
	width: 30rem;

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: var(--color-grey-light-3);
	}

	@media only screen and (max-width: var(--bp-medium)) {
		width: auto;

		&::placeholder {
			color: white;
		}
	}
`;

const SearchButton = styled.button`
	background-image: var(--gradient);
	border-radius: 10rem;
	border: none;
	text-transform: uppercase;
	color: #fff;
	cursor: pointer;
	display: flex;
	align-items: center;
	padding: 1rem 4rem;
	font-weight: var(--font-weight-regular-bold);
	font-family: inherit;
	transition: all 0.2s;

	&:hover {
		transform: scale(1.05);
	}

	&:focus {
		outline: none;
	}

	& > *:first-child {
		margin-right: 1rem;
	}
`;

const Navigation = styled.nav`
	align-self: stretch;
	margin-right: 2.5rem;
`;

const NavList = styled.ul`
	list-style: none;
	display: flex;
	height: 100%;
`;

const NavItem = styled.li`
	position: relative;
`;

const NavButton = styled.button`
	height: 100%;
	font-family: inherit;
	color: inherit;
	font-size: 1.4rem;
	font-weight: var(--font-weight-bold);
	text-transform: uppercase;
	background: none;
	border: none;
	cursor: pointer;
	padding: 0 1.5rem;
	transition: all 0.3s;

	display: flex;
	align-items: center;

	svg {
		height: 2.4rem;
		width: 2.4rem;
		fill: var(--color-primary);
		margin-right: 0.7rem;
		transform: translateY(-1px);
	}

	&:focus {
		outline: none;
	}

	&:hover {
		background-color: var(--color-grey-light-2);
	}
`;

const BookMark = styled.div`
	padding: 1rem 0;
	position: absolute;
	top: 9rem;
	right: 0rem;
	z-index: 10;
	width: 40rem;
	background-color: var(--color-white);
	box-shadow: 0 0.8rem 5rem 2rem rgba(var(--color-grey-dark-1), 0.1);

	visibility: hidden;
	opacity: 0;
	transition: all 0.5s 0.2s;

	&:hover,
	${NavButton}:hover + & {
		visibility: visible;
		opacity: 1;
	}
`;

const BookMarkList = styled.ul`
	list-style: none;
`;

const BookMarkField = styled.li`
	cursor: pointer;
	padding: 0 4rem;

	display: flex;
	align-items: center;
	height: 100%;
	transition: all 0.3s;

	&:hover {
		background-color: var(--color-grey-light-2);
	}
`;

const Message = styled.div``;

export default {
	HeaderContainer,
	Logo,
	Search,
	SearchField,
	SearchButton,
	Navigation,
	NavList,
	NavItem,
	NavButton,
	BookMark,
	BookMarkList,
	BookMarkField,
	Message,
};
