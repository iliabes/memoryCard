import  './Select.sass'
import { useState } from 'react';
import Select1 from 'react-select'
import { current } from '@reduxjs/toolkit';
import { store } from '../store/store';

const options = [
  { value: 'space marine', label: 'Space Marine' },
  { value: 'tau', label: 'Tau' },
  { value: 'orks', label: 'Orks' },
  { value: 'plus', label: 'plus' }
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
  let  [selected,setSelected]=useState('space marine')


  const onChange = (e)=> {
    setSelected(e.value);
    switch(e.value){
      case 'space marine':store.dispatch({ type: 'space marine', });break;
      case 'tau':store.dispatch({ type: 'tau', });break;
      case 'orks':store.dispatch({ type: 'orks', });break;
      case 'plus':store.dispatch({ type: 'plus', });break;
    }
  }

  const getValue = ()=> {
    return selected ? options.find( val => val.value === selected) : ''
  }

  return (
    <Select1 onChange={onChange}  defaultValue={getValue} theme={'danger'} styles={customStyles} options={options} />
  );
}

export default Select;
