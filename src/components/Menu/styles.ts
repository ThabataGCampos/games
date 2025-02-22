import { MenuItemButtonProps, ProfileItemProps } from "../../types/interfaces/system";
import styled, { css, Interpolation } from "styled-components";
import mixings from "../../assets/styles/mixins";

export const MenuContainer = styled.header`
	position: fixed;
	width: 100%;
	height: 10vh;
	background-color: rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
`;

export const MenuContent = styled.div`
	position: relative;
	width: calc(100% - 10rem);
	height: 8vh;
	max-width: 1600px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		font-size: 4rem;
		cursor: pointer;
	}
	div {
		width: 60%;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		label {
			display: none;
		}
		input {
			outline: none;
			border: none;
			height: calc(100% - 7rem);
			width: 100%;
			max-width: 400px;
			padding: 1.2rem;
			border-radius: 5px;
			background-color: ${mixings.colors.baseLine};
		}
	}
`;

export const LogoContainer = styled.header`
	max-height: 90%;
	width: 20%;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	img {
		margin-top: 0.8rem;
		max-height: 100%;
		max-width: 20rem;
		cursor: pointer;
		transition: 0.42s;
	}

	img:active {
		transform: scale(0.995);
	}
`;
export const MenuOptions = styled.nav<MenuItemButtonProps>`
	position: absolute;
	right: 0;
	top: 8vh;
	width: 20rem;
	background-color: ${mixings.colors.contrast1};
	display: flex;
	flex-direction: column;
	align-items: center;

	li {
		box-sizing: border-box;
		width: 100%;
		padding: 2rem;
		list-style-type: none;
		text-align: center;
		font-size: 2.5rem;
		cursor: pointer;

		:hover {
			background-color: ${mixings.colors.primaryColorOpacity};
		}
	}
`;

export const Profile = styled.article<ProfileItemProps>`
	width: 20%;
	display: flex;
	justify-content: flex-end;

	div#profileMenu {
		width: 7rem;
		height: 7rem;
		border-radius: 3.5rem;
		cursor: pointer;
		${({ backgroundImage }): Interpolation<ProfileItemProps> => {
			return css`
				background-image: url(${backgroundImage});
			`;
		}}
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	img {
		width: 3rem;
		height: 3rem;
		cursor: pointer;
	}
`;
