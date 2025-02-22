import styled from "styled-components";
import mixings from "../../assets/styles/mixins";

interface ICancelOrSaveButton {
	answer: string;
}

export const BackgroundForm = styled.div`
	height: auto;
	width: 75rem;
	padding: 1em;
	background: #252525;
	border-radius: 1em;
	box-shadow: 1px 1px 4px 1px ${mixings.colors.primaryColor};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-content: center;
	align-items: center;

	div {
		display: flex;
		flex-direction: column;
	}
	#buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	h1 {
		font-size: 4em;
	}
	label {
		text-transform: capitalize;
		font-size: 1.5em;
		margin-bottom: 0.7em;
		color: ${mixings.colors.primaryColor};
	}

	input {
		height: 2em;
		margin-bottom: 0.7em;
		background: ${mixings.colors.baseBg2Dark};
		color: gray;
		border: none;
		border-radius: 0.5em;
		padding-left: 1em;
		outline: 0;
	}
`;

export const SCancelOrSaveButton = styled.button`
	height: 2em;
	width: 6em;
	background: ${(props: ICancelOrSaveButton): string => (props.answer === "save" ? "#6cea69" : "#ff5555")};
	color: ${mixings.colors.contrast1};
	border: none;
	border-radius: 2em;
	margin-top: 1em;
	font-family: ${mixings.constants.FontFamily};
	font-size: 16px;
	cursor: pointer;

	&:hover {
		transform: scale(0.98);
	}
`;

export const ContainerVerification = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const VerificationResponse = styled.span`
	font-size: 2.5em;
	font-style: italic;
	margin: 0 1em 1em 1.5em;
`;
