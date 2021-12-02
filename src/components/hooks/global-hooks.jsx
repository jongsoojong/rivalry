import { useState, useEffect } from 'react';

import { AVAILABLE_GAMES } from '../../mockdata/mock-games';

import { GGS_CHARACTERS } from '../../mockdata/mock-characters';
import { SFV_CHARACTERS } from '../../mockdata/mock-characters';
import { SELECT_VALUES } from '../../utils/enums';


export const GlobalHooks = () => {
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
    })
}