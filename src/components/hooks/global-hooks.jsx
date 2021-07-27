import { AVAILABLE_GAMES } from '../../mockdata/mock-games';
import { GGS_CHARACTERS } from '../../mockdata/mock-characters';
import { useState, useEffect } from 'react';

export const GlobalHooks = () => {
    const [myCount, setMyCount] = useState(0);
    const [yourCount, setYourCount] = useState(0);

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

    //handle Changes
    const defaultGameOption = { id: 'placeholder', title: 'Select Your Game'};
    const defaultCharacterOption = { id: 'placeholder', title: 'Select Your Character'};
    const defaultPlayerOption = {id: 'placeholder', title: 'Select Your Player'};

    const [myOption, setMyOption] = useState('placeholder');

    const renderedOptions = [ defaultGameOption, ...AVAILABLE_GAMES];

        
    const handleChange = (e) => {        
        console.log(GGS_CHARACTERS);
        const test = Object.entries(GGS_CHARACTERS);
        console.log('test', test);
        setMyOption(e.target.value);
    };


    return({
        myCount,
        yourCount,
        myOption,
        renderedOptions,
        clearCounter,
        incrementMyCounter,
        incrementYourCounter,
        handleChange
    })
}