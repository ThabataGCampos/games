import React from "react";
import { ApiGames, ApiGenres } from "./api";

export interface GameProviderData {
	allGenres: ApiGenres[];
	gamesByGender: ApiGames[];
	allGames: ApiGames[];
	lastValidPage: boolean;
	setLastValidPage: React.Dispatch<React.SetStateAction<boolean>>;
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	status: boolean;
	games: ApiGames[];
	handleGetGameById: (id: string) => Promise<ApiGames | undefined>;
	handleGetServerStatus: () => void;
	handleGetGamesByGenre: (id: string) => Promise<void>;
}

export interface ICardGames {
	id?: string;
	title?: string;
	image?: string;
	description?: string;
	year?: string;
	score?: string;
	trailer?: string;
	gameplay?: string;
	genres?: ApiGenres[];
	genreId?: string;
}

export interface IAdminGames {
	createGame: (data: ICardGames) => Promise<void>;
	editGame: (id: string, data: ICardGames) => Promise<void>;
	deleteGame: (id: string) => Promise<void>;
}

export interface IStyleScore {
	score: number;
}
