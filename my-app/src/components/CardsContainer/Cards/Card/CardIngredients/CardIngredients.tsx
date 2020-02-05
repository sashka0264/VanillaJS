import React from 'react';
import nextId from 'react-id-generator';
import style from './CardIngredients.module.css';
import Ingredient from './ingredient/Ingredient';

interface Ingredients {
  name: string,
  amount: {
    value: number,
    unit: string
  },
  add?: string,
  attribute?: string
}

interface CardIngredients {
  ingredients: {
    malt: Array <Ingredients>,
    hops: Array <Ingredients>,
    yeast: string
  },
  foodPairing: Array<string>,
  brewersTips: string
}

const CardIngredients: React.FC<CardIngredients> = ({
  ingredients,
  foodPairing,
  brewersTips
}:CardIngredients) => {
  const createId = () => nextId();

  return (
    <div className={style.cardIngredients}>
      <Ingredient title="MALT:" ingredient={ingredients.malt} createId={createId} />

      <Ingredient title="HOPS:" ingredient={ingredients.hops} createId={createId} />

      YEAST:
      <span>{ingredients.yeast}</span>

      FOOD PAIRING:
      <span>
        {
        foodPairing.map((item) => <span key={createId()}>{item}</span>)
        }
      </span>

      BREWERS TIPS:
      <span>
        {brewersTips}
      </span>
    </div>
  );
};

export default CardIngredients;
