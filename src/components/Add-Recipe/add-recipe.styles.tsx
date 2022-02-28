import styled from "styled-components";

const AddRecipeContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100rem;
	background-color: white;
	border-radius: 9px;

	padding: 5rem 6rem;
	box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.25);
	z-index: 1000;
	transition: all 0.5s;

	> button {
		font-family: inherit;
		color: inherit;
		position: absolute;
		top: 0.5rem;
		right: 1.6rem;
		font-size: 3.5rem;
		cursor: pointer;
		border: none;
		background: none;
		transition: all 0.3s ease-in-out;

		&:hover {
			color: var(--color-primary);
		}
	}
`;

const CloseModal = styled.button``;

const UploadForm = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4rem 6rem;
`;

const UploadColumn = styled.div`
	display: grid;
	grid-template-columns: 1fr 2.8fr;
	align-items: center;
	gap: 1.5rem;
`;

const UploadLabel = styled.label`
	font-size: 1.5rem;
	font-weight: 600;
	color: inherit;
`;

const UploadInput = styled.input`
	font-size: 1.5rem;
	padding: 0.8rem 1rem;
	border: 1px solid #ddd;
	border-radius: 0.5rem;
	transition: all 0.2s;

	&::placeholder {
		color: $color-grey-light-3;
	}

	&:focus {
		outline: none;
		border: 1px solid $color-primary;
		background-color: $color-grey-light-1;
	}
`;

const FormGroup = styled.div``;

const UploadButton = styled.button`
	background-image: var(--gradient);
	border-radius: 10rem;
	border: none;
	text-transform: uppercase;
	color: #fff;
	cursor: pointer;
	display: flex;
	align-items: center;
	transition: all 0.2s;
	padding: 1.5rem 4rem;
	font-size: 1.5rem;
	font-weight: 600;

	svg {
		height: 2.25rem;
		width: 2.25rem;
		fill: currentColor;
	}

	&:hover {
		transform: scale(1.05);
	}

	&:focus {
		outline: none;
	}

	& > *:first-child {
		margin-right: 1rem;
	}

	grid-column: 1 / span 2;
	justify-self: center;
	margin-top: 1rem;
`;

const UploadHeader = styled.h3`
	font-size: 2.25rem;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 1rem;
	grid-column: 1/-1;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	AddRecipeContainer,
	CloseModal,
	UploadForm,
	UploadColumn,
	UploadLabel,
	UploadInput,
	FormGroup,
	UploadButton,
	UploadHeader,
};
