/* eslint-disable camelcase */

import React from 'react';
import nextId from 'react-id-generator';
import style from './Card.module.css';

interface IArray {
  name: string,
  amount: {
    value: number,
    unit: string,
  },
  add?: string,
  attribute?: string,
}

interface IProps {
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
    malt: Array <IArray>,
    hops: Array <IArray>,
    yeast: string,
    map: any,
  },
  food_pairing: Array<string>,
  brewers_tips: string,
}

const Card = (
  {
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
  }: IProps,
) => {
  const createId = () => nextId();
  return (
    <div className={style.card}>
      <div className={style.cardTitle}>
        {`${name} `}
        <span className={style.cardBrewed}>
            (
          {first_brewed.replace(/\//g, '.')}
            )
        </span>
      </div>

      <div className={style.cardSubtitle}>
        {tagline}
      </div>

      <img className={style.cardImage} alt="beer" src={image_url} />

      <div className={style.cardDescription}>
        {description}
      </div>

      <div className={style.cardProperties}>
        <span>
            VOLUME -
          <span>{` ${volume.value} ${volume.unit}`}</span>
        </span>

        <span>
            ABV -
          <span>{` ${abv}`}</span>
        </span>

        <span>
            IBU -
          <span>{` ${ibu}`}</span>
        </span>

        <span>
            TARGET FG -
          <span>{` ${target_fg}`}</span>
        </span>

        <span>
            TARGET OG -
          <span>{` ${target_og}`}</span>
        </span>

        <span>
            EBC -
          <span>{` ${ebc}`}</span>
        </span>

        <span>
            SRM -
          <span>{` ${srm}`}</span>
        </span>

        <span>
            PH -
          <span>{` ${ph}`}</span>
        </span>

        <span>
            BOIL VOLUME -
          <span>{` ${boil_volume.value} ${boil_volume.unit}`}</span>
        </span>

        <span>
            ATTENUATION LEVEL -
          <span>{` ${attenuation_level}`}</span>
        </span>
      </div>

      <div className={style.cardIngredients}>
        MALT:
        <span>
          {
            ingredients.malt.map((item) => (
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

        HOPS:
        <span>
          {
            ingredients.hops.map((item) => (
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

        YEAST:
        <span>{ingredients.yeast}</span>

        FOOD PAIRING:
        <span>
          {
            food_pairing.map((item) => <span key={createId()}>{item}</span>)
          }
        </span>

        BREWERS TIPS:
        <span>
          {brewers_tips}
        </span>
      </div>

    </div>
  );
};

export default Card;
