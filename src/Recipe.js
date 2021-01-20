import React from 'react';
import style from './recipe.module.css';





const Recipe =({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.name}>{title}</h1>
            <ol className={style.ingredients}>
                {ingredients.map(ingredient =>(
                    <li className={style.singleIngredient}>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}>Calories: {Math.round(calories)}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
};

export default Recipe;