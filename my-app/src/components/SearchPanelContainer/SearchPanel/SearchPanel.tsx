import React from 'react';
import style from './SearchPanel.module.css';
import searchImage from './img/search.png'

const SearchPanel = ({inputs, set, startSearch}) => {
  let list: Array<any> = [];
  for (let key in inputs) list.push(<input key={key} placeholder={key} onInput={set[key]} value={inputs[key]} />);
  console.log(inputs)
  return (
    <div className={style.panel}>
      {list}

      <button className={style.panelSearch} onClick={startSearch}>SEARCH <img src={searchImage}/></button>
    </div>
  )
}

export default SearchPanel;
