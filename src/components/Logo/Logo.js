import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => {

    return (
        <div>
            <img src={burgerLogo} alt="Burger Logo" />
        </div>
    );
};

export default logo;