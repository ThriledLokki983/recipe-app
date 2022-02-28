/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";

const Container = styled.div`
	width: var(--main-content-size);
	min-height: 117rem;
	margin-block-start: 4vw;
	margin-inline: auto;
	background-color: #fff;
	border-radius: 9px;
	overflow: hidden;
	box-shadow: var(--box-shadow);

	display: grid;
	grid-template-rows: 10rem minmax(100rem, auto);
	grid-template-columns: 1fr 2fr;
	grid-template-areas:
		"head head"
		"list recipe";

	@media only screen and (max-width: var(--bp-large)) {
		max-width: 100%;
		margin: 0;
		border-radius: 0;
	}
`;

const Info = styled.div`
	max-width: 40rem;
	margin: 0 auto;
	padding: 5rem 4rem;

	display: flex;

	svg {
		height: 3rem;
		width: 3rem;
		fill: var(--color-primary);
		transform: translateY(-0.3rem);
	}

	p {
		margin-left: 1.5rem;
		font-size: 1.8rem;
		line-height: 1.5;
		font-weight: 600;
	}
`;

const Message = styled(Info)``;

const Error = styled(Info)``;

const OverLay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(4px);
	z-index: 100;
	transition: all 0.5s;
`;

export default {
	Container,
	Message,
	Error,
	OverLay,
};
