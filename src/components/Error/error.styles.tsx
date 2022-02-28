import styled from "styled-components";

export const ErrorContainer = styled.div`
	max-width: 40rem;
	margin: 0 auto;
	padding: 5rem 4rem;

	display: flex;

	svg {
		height: 3rem;
		width: 3rem;
		fill: $color-primary;
		transform: translateY(-0.3rem);
	}
`;

export const ErrorMessage = styled.p`
	margin-left: 1.5rem;
	font-size: 1.8rem;
	line-height: 1.5;
	font-weight: 600;
`;
