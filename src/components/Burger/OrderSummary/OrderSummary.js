import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((ingredientKey) => {
       return (
           <li key={ingredientKey}><span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}</li>
       );
    });

    return(
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button buttonType='Danger' clicked={}>Cancel</Button>
            <Button buttonType='Success' clicked={}>Continue</Button>
        </>
    );
};

export default orderSummary;