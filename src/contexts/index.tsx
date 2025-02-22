import { OrderSettingsProvider } from "./OrderSettingsContext";
import { FavoritesProvider } from "./FavoritesContext";
import { ProfilesProvider } from "./ProfilesContext";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AccountContext";
import { GamesProvider } from "./GamesContext";
import { AdminGamesProvider } from "./AdminGamesContext";
import { ReactNode } from "react";
import { ConfigUserProvider } from "./ConfigUserContext";
interface ProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<ConfigUserProvider>
					<ProfilesProvider>
						<FavoritesProvider>
							<OrderSettingsProvider>
								<GamesProvider>
									<AdminGamesProvider>{children}</AdminGamesProvider>
								</GamesProvider>
							</OrderSettingsProvider>
						</FavoritesProvider>
					</ProfilesProvider>
				</ConfigUserProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default Providers;
