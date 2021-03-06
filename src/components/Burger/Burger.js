import React from 'react';
import styles from './Burger.module.css';

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map((ingKey) => {
            return [...Array(props.ingredients[ingKey])].map((_, index) => {
                return <BurgerIngredient key={ingKey+index} type={ingKey}/>;
            });
        }).reduce((prev, current) => {
            return prev.concat(current);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }
    
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;