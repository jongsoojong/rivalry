import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core'

// options = [object]
// value = string
// selectedValues = [string]
// onChange = () => {}

export const GenericSelect = ({options, value, selectedValues, onChange}) => {

    /*
        NOTES:
        functionality should be moved to a helper
        might also be nice to assign a boolean to see if disabling options is required (nice to have)
    */
    const disableOption = (option) => {
        if(selectedValues && selectedValues.length) {
            const isDisabled = selectedValues.find((entry) => {
                if(entry === option || option === 'placeholder') {
                    return true;
                }
                return false;
            });
            return isDisabled;    
        }
    };

    return(
        <FormControl>
            <Select
                value={value}
                onChange={onChange}
            >
                {
                    options.map((option) => {
                        const { id, title } = option;
                        return( 
                            <MenuItem 
                                disabled={ disableOption(id) } 
                                key={id} 
                                value={id}
                            > 
                                    {title} 
                            </MenuItem>
                        );
                    })
                }

            </Select>
        </FormControl>
    );
};