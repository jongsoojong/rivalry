import React from 'react';

import defaultImage from '../../assets/snorlax.png';
import versusImage from '../../assets/versus.png';

import { Block as PlayerBlock } from '../global/block';
import { Button as ClearButton } from '../global/button';
import { GenericSelect as Select } from '../global/dropdown';
import { GlobalHooks } from '../hooks/global-hooks';
import { AVAILABLE_GAMES } from '../../mockdata/mock-games';
import { GGS_CHARACTERS } from '../../mockdata/mock-characters';


import { useState, useEffect } from 'react';


export const Skeleton = () => {
    const {
        myCount,
        yourCount,
        clearCounter,
        incrementMyCounter,
        incrementYourCounter,
        
    } = GlobalHooks();

    const defaultGameOption = { id: 'placeholder', title: 'Select Your Game'};
    const defaultCharacterOption = { id: 'placeholder', title: 'Select Your Character'};
    const defaultPlayerOption = {id: 'placeholder', title: 'Select Your Player'};

    
    const renderedOptions = [ defaultGameOption, ...AVAILABLE_GAMES];
    
    const [myOption, setMyOption] = useState('placeholder');

    
    const handleChange = (e) => {        
        console.log(GGS_CHARACTERS);
        const test = Object.entries(GGS_CHARACTERS);
        console.log('test', test);
        setMyOption(e.target.value);
    };


    return (
        <div className="site-container">
            <div className="selectContainer">
                <Select options={renderedOptions} value={myOption} onChange={handleChange} />
            </div>
            <div className="playerBlocksContainer">
                <PlayerBlock image={defaultImage} playerName="Jong" count={myCount} incrementFunction={ incrementMyCounter }/>
                
                <img className="playerBlockVersus" src={versusImage} alt="VERSUS"/>

                <PlayerBlock image={defaultImage} playerName="Doug" count={yourCount} incrementFunction={ incrementYourCounter }/>
            </div>
            <div className="resetButtonContainer">
                <ClearButton text="NEW SET" onClick={clearCounter} />
            </div>
        </div>
    );
}
