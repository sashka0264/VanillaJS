/* eslint-disable camelcase */
import React from 'react';
import nextId from 'react-id-generator';
import style from './Card.module.css';
import noPhoto from './img/noPhoto.png';
import Element from './Element/Element';

interface Ingredients {
  name: string,
  amount: {
    value: number,
    unit: string,
  },
  add?: string,
  attribute?: string,
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
    unit: string,
  },
  volume: {
    value: number,
    unit: string,
  },
  ingredients: {
    malt: Array <Ingredients>,
    hops: Array <Ingredients>,
    yeast: string,
  },
  food_pairing: Array<string>,
  brewers_tips: string,
  onCardClicked: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, status: boolean) => void,
  id: string,
  basketClicked: boolean,
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
  basketClicked,
}:CardProps) => {
  const createId = () => nextId();
  return (
    // eslint-disable-next-line no-useless-concat
    <div className={`${style.card} ` + 'card'} id={id}>
      <div className={style.cardTitle}>
        {`${name} `}
        <span className={style.cardBrewed}>{`(${first_brewed.replace(/\//g, '.')})`}</span>
      </div>

      <div className={style.cardSubtitle}>{tagline}</div>

      <img className={image_url ? style.cardImage : style.NoCardImage} alt="beer" src={image_url || noPhoto} />

      <div className={style.cardDescription}>{description}</div>

      <div className={style.cardProperties}>
        <Element title="VOLUME - " wrapper value={`${volume.value} ${volume.unit}`} />
        <Element title="ABV - " wrapper value={abv} />
        <Element title="IBU - " wrapper value={ibu} />
        <Element title="TARGET FG - " wrapper value={target_fg} />
        <Element title="TARGET OG - " wrapper value={target_og} />
        <Element title="EBC - " wrapper value={ebc} />
        <Element title="SRM - " wrapper value={srm} />
        <Element title="PH - " wrapper value={ph} />
        <Element title="BOIL VOLUME - " wrapper value={`${boil_volume.value} ${boil_volume.unit}`} />
        <Element title="ATTENUATION LEVEL - " wrapper value={attenuation_level} />
      </div>

      <div className={style.cardIngredients}>
        <Element
          title="MALT:"
          value={ingredients.malt.map((item) => (
            <span key={createId()}>
              <span>{item.name}</span>
              <span>
                {` ${item.amount.value} `}
                {` ${item.amount.unit} `}
              </span>
            </span>
          ))}
        />
        <Element
          title="HOPS:"
          value={ingredients.hops.map((item) => (
            <span key={createId()}>
              <span>{item.name}</span>
              <span>
                {` ${item.amount.value} `}
                {` ${item.amount.unit} `}
              </span>
            </span>
          ))}
        />
        <Element title="YEAST:" value={ingredients.yeast} />
        <Element title="FOOD PAIRING:" value={food_pairing.map((item) => <span key={createId()}>{item}</span>)} />
        <Element title="BREWERS TIPS:" value={brewers_tips} />
      </div>

      <button
        type="button"
        onClick={(e) => (basketClicked ? onCardClicked(e, false) : onCardClicked(e, true))}
        className={basketClicked ? style.cardInBasket : style.cardAdd}
      >
        {basketClicked ? 'Добавлено в корзину' : 'Добавить'}
      </button>
    </div>
  );
};

export default Card;
