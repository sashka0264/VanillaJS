import React from 'react';
import style from './SearchPanel.module.css';

const SearchPanel = ({inputs, set, startSearch}) => {
  let list: Array<any> = [];
  for (let key in inputs) list.push(<input key={key} placeholder={key} onInput={set[key]} value={inputs[key]} />);
  console.log(inputs)
  return (
    <div className={style.panel}>
      {list}

      <button onClick={startSearch}>SEARCH</button>
    </div>
  )
}

export default SearchPanel;
