import { LogoContainer, MenuContainer, MenuContent, MenuOptions, Profile } from "./styles";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useProfiles } from "../../contexts/ProfilesContext";
import triangule from "../../assets/icons/triangulo.png";
import { useAuth } from "../../contexts/AccountContext";
import logo from "../../assets/images/gamedevs.png";
import { MenuProps } from "../../types/types";
import { useEffect, useState } from "react";
import Input from "../Input";
import { useConfigUser } from "src/contexts/ConfigUserContext";

const Menu = ({ path }: MenuProps): JSX.Element => {
	const { logout } = useAuth();
	const { currentProfile } = useProfiles();
	const { functions } = useConfigUser();
	const navigate: NavigateFunction = useNavigate();
	const [active, setActive] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [search, setSearch] = useState("");

	return (
		<MenuContainer>
			<MenuContent>
				<LogoContainer>
					<img
						onClick={(): void => {
							navigate("/");
						}}
						src={logo}
						alt="GameDevs Logo"
					/>
				</LogoContainer>
				{Boolean(path === "home" || path === "/game/:id") && (
					<Input
						label="search"
						type="text"
						placeholder="Pesquisa"
						value={setSearch}
					/>
				)}
				{Boolean(path === "home" || path === "/game/:id") && currentProfile && (
					<Profile backgroundImage={currentProfile.imageUrl}>
						<div
							id="profileMenu"
							onClick={(): void => {
								setActive(!active);
							}}
						></div>
						<img
							src={triangule}
							alt="triangule"
							onClick={(): void => {
								setActive(!active);
							}}
						/>
					</Profile>
				)}
				{active ? (
					<MenuOptions>
						<li
							onClick={(): void => {
								navigate("/profile");
								setActive(!active);
							}}
						>
							Profiles
						</li>
						<li
							onClick={(): void => {
								navigate("/settings");
								functions.handdleConfigMenus();
								setActive(!active);
							}}
						>
							Settings
						</li>
						<li
							onClick={(): void => {
								logout();
								setActive(!active);
							}}
						>
							Logout
						</li>
					</MenuOptions>
				) : (
					<></>
				)}
			</MenuContent>
		</MenuContainer>
	);
};

export default Menu;
