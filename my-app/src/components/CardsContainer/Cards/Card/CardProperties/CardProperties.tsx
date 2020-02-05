import React from 'react';
import Element from './Element/Element';
import style from './CardProperties.module.css';

interface CardProperties {
  volume: {
    value: number,
    unit: string
  },
  abv: number,
  ebc: number,
  srm: number,
  ph: number,
  ibu: number,
  targetFg: number,
  targetOg: number,
  boilVolume: {
    value: number,
    unit: string
  },
  attenuationLevel: number
}

const CardProperties: React.FC<CardProperties> = ({
  volume, abv, ibu, targetFg, targetOg, ebc, srm, ph, boilVolume, attenuationLevel
}:CardProperties) => (
  <div className={style.cardProperties}>
    <Element title="VOLUME - " value={`${volume.value} ${volume.unit}`} />
    <Element title="ABV - " value={abv} />
    <Element title="IBU - " value={ibu} />
    <Element title="TARGET FG - " value={targetFg} />
    <Element title="TARGET OG - " value={targetOg} />
    <Element title="EBC - " value={ebc} />
    <Element title="SRM - " value={srm} />
    <Element title="PH - " value={ph} />
    <Element title="BOIL VOLUME - " value={`${boilVolume.value} ${boilVolume.unit}`} />
    <Element title="ATTENUATION LEVEL - " value={attenuationLevel} />
  </div>
);

export default CardProperties;
