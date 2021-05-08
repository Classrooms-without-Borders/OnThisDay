import React from 'react';
import { constants } from '../styling/Constants.js';
import '../styling/Searchbar.css';

import { TextInput } from '../components/Input';
import { StyledButton } from '../components/Button';

function Searchbar({ location=null, date=null }) {
    return (
        <div class='searchbar'>
            <div>
                <p>What happened in </p>
                <TextInput label='City, Country' />
                <p> on </p>
                <TextInput label='Date' />
                <p>?</p>
                <div class='searchbar-btn-div'>
                    <StyledButton color={constants.color.dark}>
                        Search
                    </StyledButton>
                    <a>Advanced Search</a>
                </div>
            </div>
        </div>
    )
}

export default Searchbar;