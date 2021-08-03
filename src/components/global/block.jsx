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