import React from 'react';

import defaultImage from '../../assets/snorlax.png';
import versusImage from '../../assets/versus.png';

import { Block as PlayerBlock } from '../global/block';
import { Button as ClearButton } from '../global/button';
import { GenericSelect as Select } from '../global/dropdown';
import { GlobalHooks } from '../hooks/global-hooks';
import { AVAILABLE_GAMES } from '../../mockdata/mock-games';
import { PLAYERS } from '../../mockdata/mock-players';

// TODO HOMEWORK - ADD BUTTON TO USE NEW MATCH HISTORY FUNCTION TO SAVE MATCH TO LOCAL STATE
// EXTRA CREDIT - ADD VALIDATION CHECKS TO BUTTON RENDER UI TO ENSURE ALL DATA IS CAPTURED PROPERLY 

export const Skeleton = () => {
    const {
        myCount,
        yourCount,
        selectedGame,
        gameCharacters,
        playerOneOption,
        playerTwoOption,
        playerOneCharacterOption,
        playerTwoCharacterOption,
        clearCounter,
        incrementMyCounter,
        incrementYourCounter,
        handleWinsChange,
        handlePlayerChange,
        handleCharacterChange,
        handleGameChange,
        filterPlayer,
    } = GlobalHooks();

    const defaultGameOption = { id: 'placeholder', title: 'Select Your Game'};
    const defaultCharacterOption = { id: 'placeholder', title: 'Select Your Character'};
    const defaultPlayerOption = {id: 'placeholder', title: 'Select Your Player'};

    
    const renderedGameOptions = [ defaultGameOption, ...AVAILABLE_GAMES];

    const renderedPlayerOptions = [defaultPlayerOption, ...PLAYERS];
    
    const selectedOptions = [playerOneOption, playerTwoOption];

    return (
        <div className="site-container">
            <div className="selectContainer">
                <Select options={renderedGameOptions} value={selectedGame} onChange={handleGameChange}  />
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
                    incrementFunction={ handleWinsChange(1) } 
                    characterValue = { playerOneCharacterOption }
                    gameCharacters={ gameCharacters }
                    characterOnChange ={ handleCharacterChange(1) }
                />
                
                <img className="playerBlockVersus" src={versusImage} alt="VERSUS"/>

                <PlayerBlock 
                    image={defaultImage}  
                    count={yourCount}
                    value={playerTwoOption}
                    selectedValues={selectedOptions}
                    options={renderedPlayerOptions}
                    onChange={handlePlayerChange(2)} 
                    incrementFunction={ handleWinsChange(2) } 
                    characterValue={ playerTwoCharacterOption }
                    gameCharacters={ gameCharacters }
                    characterOnChange={ handleCharacterChange(2) }
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
