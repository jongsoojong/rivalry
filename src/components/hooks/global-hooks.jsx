import { useState, useEffect } from 'react';


export const GlobalHooks = () => {
    const [myCount, setMyCount] = useState(0);
    const [yourCount, setYourCount] = useState(0);

    // TODO - move 'placeholder' to a const to avoid repetition for default state
    const [selectedGame, setSelectedGame] = useState('placeholder');

    const [playerOneOption, setPlayerOne] = useState('placeholder');
    const [playerTwoOption, setPlayerTwo] = useState('placeholder');

    const [playerOneCharacterOption, setCharacterOne] = useState('placeholder');
    const [playerTwoCharacterOption, setCharacterTwo] = useState('placeholder');


    // TODO - Consolidate this into one counter function
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

        /*
            NOTES:
            because we're treating this like we're going to change the query to some remote database, we aren't going to be able to simply filter by an id / hash value
            therefore, a switch statement (or extended if / else if) is needed to dynamically return characters back given a specific game
            for the game, you can reference selectedGame directly because it's within scope but I would move this function to a helper so it would need to be passed in as argument
        */

        switch(game) {
            case 'GAME 1': return(/*CHARACTERS A */);
            break;

            case 'GAME 2': return(/* CHARACTERS B */);
            break;

            default: return(/* NO CHARACTERS */);
        }
    };


    const gameCharacters = findCharactersFromGame(selectedGame);

    // TODO - complete filter function
    const filterPlayer = (selectedPlayer) => {
    };

    const handlePlayerChange = (playerIndex) => (e) => {
        playerIndex === 1 ? setPlayerOne(e.target.value) : setPlayerTwo(e.target.value);
    };

    const handleCharacterChange = (playerIndex) => (e) => {
        playerIndex === 1 ? setCharacterOne(e.target.value) : setCharacterTwo(e.target.value);
    };
    
    return({
        myCount,
        yourCount,
        selectedGame,
        playerOneOption,
        playerTwoOption,
        playerOneCharacterOption,
        playerTwoCharacterOption,
        // pass these arguments back to the render to handle the rendered select options
        gameCharacters,
        clearCounter,
        incrementMyCounter,
        incrementYourCounter,
        handlePlayerChange,
        // use this to handle onChange for each character select dropdown
        handleCharacterChange,
        filterPlayer,
    })
}