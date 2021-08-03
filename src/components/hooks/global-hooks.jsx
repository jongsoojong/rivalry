import { useState, useEffect } from 'react';


export const GlobalHooks = () => {
    const [myCount, setMyCount] = useState(0);
    const [yourCount, setYourCount] = useState(0);

    const [playerOneOption, setPlayerOne] = useState('placeholder');
    const [playerTwoOption, setPlayerTwo] = useState('placeholder');

    const [playerOneCharacterOption, setCharacterOne] = useState('placeholder');
    const [playerTwoCharacterOption, setCharacterTwo] = useState('placeholder');
// Consolidate this into one. The counters
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
        playerOneOption,
        playerTwoOption,
        playerOneCharacterOption,
        playerTwoCharacterOption,
        clearCounter,
        incrementMyCounter,
        incrementYourCounter,
        handlePlayerChange,
        handleCharacterChange,
        filterPlayer,
    })
}