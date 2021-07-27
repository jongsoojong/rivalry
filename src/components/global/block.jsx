import React from 'react';
import { Button as CounterButton } from './button';
import { GenericSelect as Select } from '../global/dropdown';
import { Counter as WinCounter } from './counter';


export const Block = ({ image,  count, incrementFunction, dropDownFunction }) => {

    return (
        <div className="blockContainer">
            <p className="blockPlayerName">{ playerName }</p>
            <Select options={renderedOptions} value={myOption} onChange={handleChange}  />
            <img src={ image } alt="" className="blockImage"/>
            <p className="blockPlayerWinCounter"> WINS: <WinCounter count={ count } /> </p>

            <CounterButton text="WON A MATCH" onClick={incrementFunction}/>
        </div>
    );
};