/* eslint-disable no-useless-concat */
/* eslint-disable camelcase */
import React from 'react';
import style from './Card.module.css';
import CardTitle from './CardTitle/CardTitle';
import CardSubitle from './CardSubtitle/CardSubtitle';
import BeerImage from './BeerImage/BeerImage';
import CardDescription from './CardDescription/CardDescription';
import CardIngredients from './CardIngredients/CardIngredients';
import CardProperties from './CardProperties/CardProperties';

interface Ingredients {
  name: string,
  amount: {
    value: number,
    unit: string
  },
  add?: string,
  attribute?: string
}

interface CardProps {
  name: string,
  tagline: string,
  first_brewed: string,
  image_url: string,
  description: string,
  abv: number,
  ibu: number,
  target_fg: number,
  target_og: number,
  ebc: number,
  srm: number,
  ph: number,
  attenuation_level: number,
  boil_volume: {
    value: number,
    unit: string
  },
  volume: {
    value: number,
    unit: string
  },
  ingredients: {
    malt: Array <Ingredients>,
    hops: Array <Ingredients>,
    yeast: string
  },
  food_pairing: Array<string>,
  brewers_tips: string,
  onCardClicked: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, status: boolean) => void,
  id: string,
  basketClicked: boolean
}

const Card: React.FC<CardProps> = ({
  name,
  tagline,
  first_brewed,
  image_url,
  description,
  abv,
  ibu,
  target_fg,
  target_og,
  ebc,
  srm,
  ph,
  attenuation_level,
  boil_volume,
  volume,
  ingredients,
  food_pairing,
  brewers_tips,
  onCardClicked,
  id,
  basketClicked
}:CardProps) => {
  return (
    <div className={`${style.card} ` + 'card'} id={id}>
      <CardTitle
        name={name}
        firstBrewed={first_brewed}
      />

      <CardSubitle tagline={tagline} />

      <BeerImage imageUrl={image_url} />

      <CardDescription description={description} />

      <CardProperties
        volume={volume}
        abv={abv}
        ibu={ibu}
        targetFg={target_fg}
        targetOg={target_og}
        ebc={ebc}
        srm={srm}
        ph={ph}
        boilVolume={boil_volume}
        attenuationLevel={attenuation_level}
      />

      <CardIngredients
        ingredients={ingredients}
        brewersTips={brewers_tips}
        foodPairing={food_pairing}
      />

      <button
        type="button"
        onClick={(e) => onCardClicked(e, basketClicked)}
        className={basketClicked ? style.cardInBasket : style.cardAdd}
      >
        {basketClicked ? 'Добавлено в корзину' : 'Добавить'}
      </button>
    </div>
  );
};

export default Card;
