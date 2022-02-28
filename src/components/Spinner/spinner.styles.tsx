import styled from "styled-components";

export const SpinnerContainer = styled.div`
	margin: 5rem auto;
	text-align: center;

	svg {
		height: 6rem;
		width: 6rem;
		fill: $color-primary;
		animation: rotate 2s infinite linear;
	}
`;
