import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core'

export const GenericSelect = ({options, value, onChange}) => {
    return(
        <FormControl>
            <Select
                value={value}
                onChange={onChange}
            >
                {
                    options.map((option) => {
                        return <MenuItem disabled={option.id === 'placeholder'} key={option.id} value={option.id}> {option.title} </MenuItem>
                    })
                }

            </Select>
        </FormControl>
    );
};