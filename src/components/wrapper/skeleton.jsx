import React from 'react';

import defaultImage from '../../assets/snorlax.png';
import versusImage from '../../assets/versus.png';

import { Block as PlayerBlock } from '../global/block';
import { Button as ClearButton } from '../global/button';
import { GenericSelect as Select } from '../global/dropdown';
import { GlobalHooks } from '../hooks/global-hooks';
import { AVAILABLE_GAMES } from '../../mockdata/mock-games';
import { GGS_CHARACTERS } from '../../mockdata/mock-characters';
import { SFV_CHARACTERS } from '../../mockdata/mock-characters';
import { PLAYERS } from '../../mockdata/mock-players';

// TO DO - REMOVE AND MIGRATE INTO global-hooks.jsx
import { useState, useEffect } from 'react';


export const Skeleton = () => {
    const {
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
    } = GlobalHooks();

    const defaultGameOption = { id: 'placeholder', title: 'Select Your Game'};
    const defaultCharacterOption = { id: 'placeholder', title: 'Select Your Character'};
    const defaultPlayerOption = {id: 'placeholder', title: 'Select Your Player'};

    
    const renderedGameOptions = [ defaultGameOption, ...AVAILABLE_GAMES];
    const renderedCharacterOptionsGG = [defaultCharacterOption, ...GGS_CHARACTERS];
    const renderedCharacterOptionsSFV = [defaultCharacterOption, ...SFV_CHARACTERS];

    const renderedCharacterOptionsObject =  {
        'GUILTY_GEAR_STRIVE': renderedCharacterOptionsGG,
        'STREET_FIGHTER_5': renderedCharacterOptionsSFV
    }

    const renderedPlayerOptions = [defaultPlayerOption, ...PLAYERS];
    
    // SHOULD BE HANDLED IN THE HOOKS / HELPERS
    let setCharacters = '';
    
    // SHOULD BE HANDLED IN THE HOOKS / HELPERS - SKELETON SHOULD NOT HAVE STATE - SHOULD ONLY HAVE RENDER LAYOUTS / COMPONENT ARCHITECTURE
    const [myOption, setMyOption] = useState('placeholder');

    // SHOULD BE HANDLED IN THE HOOKS / HELPERS
    const handleChange = (e) => {        
        const test = Object.entries(AVAILABLE_GAMES);
        const selectValue = e.target.value;
        console.log('test', selectValue);
        setMyOption(e.target.value);

        setCharacters = selectValue;
    };

    // NO NEED TO COMBINE
    const selectedOptions = [playerOneOption, playerTwoOption];
    // NO NEED TO COMBINE
    const selectedCharacterOptions = [ playerOneCharacterOption, playerTwoCharacterOption ]


    return (
        <div className="site-container">
            <div className="selectContainer">
                <Select options={renderedGameOptions} value={myOption} onChange={handleChange}  />

                {/* <Select options={renderedPlayerOptions} value={playerOneOption} onChange={handlePlayerChangeOne}  /> */}

            </div>
            <div className="playerBlocksContainer">

                {
                    /*
                        NOTES:
                        note the composition of the player blocks and how they relate to the ids of the player
                        i.e. one block only has information about player 1 and the other only has information about player 2
                        shared options / choices are globals so think about how that relates to a character select screen (are mirror matches possible or is it a draft pick style?)
                        if mirror matches exist, they should pull from the same pool
                        if draft pick, they need to be filtered just the like the players / users
                    */
                }

                <PlayerBlock 
                    image={defaultImage}  
                    count={myCount}
                    value={playerOneOption}
                    selectedValues={selectedOptions}
                    options={renderedPlayerOptions}
                    onChange={handlePlayerChange(1)} 
                    incrementFunction={ incrementMyCounter } 
                    setCharacters = { setCharacters }
                    characterValue = { playerOneCharacterOption }
                    characterSelectedValues= { selectedCharacterOptions }
                    characterOptions = { renderedCharacterOptionsObject }
                    characterOnChange ={ handleCharacterChange(1) }
                />
                
                <img className="playerBlockVersus" src={versusImage} alt="VERSUS"/>

                <PlayerBlock 
                    image={defaultImage}  
                    count={myCount}
                    value={playerTwoOption}
                    selectedValues={selectedOptions}
                    options={renderedPlayerOptions}
                    onChange={handlePlayerChange(2)} 
                    incrementFunction={ incrementYourCounter } 
                    setCharacters = { setCharacters }
                    characterValue = { playerOneCharacterOption }
                    characterSelectedValues= { selectedCharacterOptions }
                    characterOptions = { renderedCharacterOptionsObject }
                    characterOnChange ={ handleCharacterChange(1) }
                />
                
                {/*
                <PlayerBlock image={defaultImage} count={yourCount} incrementFunction={ incrementYourCounter } playerObject={ playerTwoObject } />
                */}
                </div>
            <div className="resetButtonContainer">
                <ClearButton text="NEW SET" onClick={clearCounter} />
            </div>
        </div>
    );
}
