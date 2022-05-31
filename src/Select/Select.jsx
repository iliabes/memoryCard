import  './Select.sass'
import { useState } from 'react';
import Select1 from 'react-select'

import { store } from '../store/store';

const options = [
  { value: 'space marine', label: 'Space Marine' },
  { value: 'orks', label: 'Orks' },
  { value: 'tau', label: 'Tau' },
]



const customStyles = {
  menuList: () => ({
    backgroundColor: '#4a1f1f',
    color: '#fff',
    border: '1px solid orange'
  }),
  placeholder: () => ({
    color: 'green'
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#4a1f1f',
    border: '1px solid orange'
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#fff',
  }),
}


function Select(props) {
  let  [selected,setSelected]=useState(options[store.getState().fraction.value].label)
  store.subscribe(() => {

    setSelected(options[store.getState().fraction.value].label)
  })
  console.log('selected',selected);

  const onChange = (e)=> {
    console.log(e.value)
    setSelected(e.value);
   
    switch(e.value){
      
      case 'space marine':store.dispatch({ type: 'space marine', });break;
      case 'tau':store.dispatch({ type: 'tau', });break;
      case 'orks':store.dispatch({ type: 'orks', });break;
      case 'plus':store.dispatch({ type: 'plus', });break;
    }
  }

  const getValue = ()=> {
    console.log('getVallue');
    return { value: 'space marine', label: selected }
  }

  return (
    <Select1 onChange={onChange} value={{ value: 'space marine', label: selected }}  defaultValue={getValue} theme={'danger'} styles={customStyles} options={options} />
  );
}

export default Select;
