import  './Select.sass'
import { useState } from 'react';
import Select1 from 'react-select'
import { current } from '@reduxjs/toolkit';


const options = [
  { value: 'space marine', label: 'Space Marine' },
  { value: 'chaos', label: 'Chaos' },
  { value: 'orks', label: 'Orks' }
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
  }

  const getValue = ()=> {
    return selected ? options.find( val => val.value === selected) : ''
  }

  return (
    <Select1 onChange={onChange}  defaultValue={getValue} theme={'danger'} styles={customStyles} options={options} />
  );
}

export default Select;
