import { useState, useEffect } from 'react';

import { AVAILABLE_GAMES } from '../../mockdata/mock-games';

import { GGS_CHARACTERS } from '../../mockdata/mock-characters';
import { SFV_CHARACTERS } from '../../mockdata/mock-characters';
import { SELECT_VALUES } from '../../utils/enums';


export const GlobalHooks = () => {

    // MAIN MATCH HISTORY STATE
    const [matchHistory, setMatchHistory] = useState({});

    const [myCount, setMyCount] = useState(0);
    const [yourCount, setYourCount] = useState(0);

    // TODO - move 'placeholder' to a enums file to avoid repetition for default state
    const [selectedGame, setSelectedGame] = useState(SELECT_VALUES['PLACEHOLDER']);

    const [playerOneOption, setPlayerOne] = useState(SELECT_VALUES['PLACEHOLDER']);
    const [playerTwoOption, setPlayerTwo] = useState(SELECT_VALUES['PLACEHOLDER']);

    const [playerOneCharacterOption, setCharacterOne] = useState(SELECT_VALUES['PLACEHOLDER']);
    const [playerTwoCharacterOption, setCharacterTwo] = useState(SELECT_VALUES['PLACEHOLDER']);

    // TODO - move to constants file
    const defaultCharacterOption = { id: SELECT_VALUES['PLACEHOLDER'], title: 'Select Your Character' };

    // TODO - Consolidate this into one counter function
    // Look at line 68 use player index
    const incrementMyCounter = () => {
        setMyCount(myCount + 1);
    }

    const incrementYourCounter = () => {
        setYourCount(yourCount + 1);
    }
    const clearCounter = () => {
        setMyCount(0);
        setYourCount(0);
    };

    const findCharactersFromGame = (game) => {
        const defaultCharacterOption = { id: 'placeholder', title: 'Select Your Character' };

        switch (game) {
            case 'GUILTY_GEAR_STRIVE':
                return ([defaultCharacterOption, ...GGS_CHARACTERS]);
                break;

            case 'STREET_FIGHTER_5':
                return ([defaultCharacterOption, ...SFV_CHARACTERS]);
                break;

            default:
                return ([]);
        }
    };

    const gameCharacters = findCharactersFromGame(selectedGame);

    const handleGameChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedGame(selectedValue);
    };

    const handlePlayerChange = (playerIndex) => (e) => {
        playerIndex === 1 ? setPlayerOne(e.target.value) : setPlayerTwo(e.target.value);
    };

    const handleCharacterChange = (playerIndex) => (e) => {
        playerIndex === 1 ? setCharacterOne(e.target.value) : setCharacterTwo(e.target.value);
    };

    const handleWinsChange = (playerIndex) => (e) => {
        console.log('pindex', playerIndex)
        playerIndex === 1 ? setMyCount(myCount + 1) : setYourCount(yourCount + 1);
        console.log('mycount', myCount);
        console.log('yourcount', yourCount)
    }

    const updateMatchHistory = () => {
        /*
        TODO 
        - create functional logic to store match history details into local state
        - sync local state with remote DB (extra credit project)
        - ?GRAPHQL layer?

        const gameId = generateRandomId();

        const exampleID = 2021-11-3-11:45:113456-XX-XX-XXXXXXXXXX;

        const gameInfo = {
            players: {
                PLAYER_ID_1: {
                    characterSelected: CHARACTER_ID_X,
                    color: 3,
                    etc...
                },
                PLAYER_ID_2: {},
                PLAYER_ID_N: {},
            },
            meta: {
                matchDate: 2021-11-16-11:45:113456,
                numRounds: NUMBER,
                matchWinnerID: PLAYER_X_ID,
                players: [ID_1, ID_2, ID_N],
                matchOutcomes: [
                    {
                        roundNumber: 1,
                        matchTime: MATCH_TIME,
                        matchOutcome: WINNING_PLAYER_ID,
                    },
                    {
                        roundNumber: 2,
                        matchTime: MATCH_TIME,
                        matchOutcome: WINNING_PLAYER_ID,
                    },
                ],

            },
        };

        const updatedMatchHistory = matchHistory;

        updatedMatchHistory[gameId] = gameInfo;

        setMatchHistory(updatedMatchHistory);

        */

    };

    return ({
        myCount,
        yourCount,
        selectedGame,
        gameCharacters,
        playerOneOption,
        playerTwoOption,
        playerOneCharacterOption,
        playerTwoCharacterOption,
        // pass these arguments back to the render to handle the rendered select options
        gameCharacters,
        clearCounter,
        incrementMyCounter,
        incrementYourCounter,
        handleWinsChange,
        handlePlayerChange,
        // use this to handle onChange for each character select dropdown
        handleCharacterChange,
        handleGameChange,
    });
}