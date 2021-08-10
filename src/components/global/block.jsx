import React from 'react';
import { Button as CounterButton } from './button';
import { GenericSelect as Select } from '../global/dropdown';
import { Counter as WinCounter } from './counter';


export const Block = ({ image,  count, value, options, selectedValues, onChange, incrementFunction, setCharacters, characterValue, characterSelectedValues, characterOptions, characterOnChange }) => {    
    console.log('dataSet', setCharacters);
    console.log('dataValue', characterValue);
    console.log('dataSelected', characterSelectedValues);
    console.log('dataOptions', characterOptions);
    console.log('dataChange', characterOnChange );
    return (
        <div className="blockContainer">
            <div>
            <Select 
                options={ options } 
                value={ value } 
                selectedValues={selectedValues} 
                onChange={ onChange }
            />
            {
                /*
                    NOTES:
                    2 Selects are needed with either a map or a loop needed to render the number of characters dynamically but let's start with hardcoding 2 character selects in with a unique index
                    options should be based the game regardless of player currently selected character and must be an array
                    value should be the player in question's selected character id
                    selectedValues is an array but it is optional based on mirror match vs draft pick decision so be mindful of if it is a requirement for your given use case
                    onChange must be a function with a state update

                */
            }

            {/* <Select 
                options={ characterOptions } 
                value={ characterValue } 
                selectedValues={ characterSelectedValues } 
                onChange={ characterOnChange }
            /> */}
            </div>
            <img src={ image } alt="" className="blockImage"/>
            <p className="blockPlayerWinCounter"> WINS: <WinCounter count={ count } /> </p>

            <CounterButton text="WON A MATCH" onClick={incrementFunction}/>
        </div>
    );
};