import React from 'react';
import style from './CardDescription.module.css';

interface Ingredients {
  name: string,
  amount: {
    value: number,
    unit: string
  },
  add?: string,
  attribute?: string
}

interface ingredient {
  title: string,
  ingredient: Array <Ingredients>,
  createId: () => any
}

const ingredient: React.FC<ingredient> = ({ title, ingredient, createId }:ingredient) => (
  <>
    {title}

    <span>
      {
      ingredient.map((item) => (
        <span key={createId()}>
          <span>{item.name}</span>
          <span>
            {` ${item.amount.value} `}
            {` ${item.amount.unit} `}
          </span>
        </span>
      ))
    }
    </span>
  </>
);

export default ingredient;
