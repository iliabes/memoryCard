import  './Select.sass'
import { useState } from 'react';
import Select1 from 'react-select'


const options = [
  { value: 'Space Marine', label: 'Space Marine' },
  { value: 'Chaos', label: 'Chaos' },
  { value: 'Orks', label: 'Orks' }
]



const customStyles = {
  menuList: () => ({
    backgroundColor: '#4a1f1f',
    color: '#fff',
    border: '1px solid orange'
  }),
  placeholder: () => ({
    color: 'white'
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#4a1f1f',
    color: 'green',
    border: '1px solid orange'
  }),
}


function Select(props) {
  let  [selected,setSelected]=useState('Space Marine')
  console.log('selected',selected);
  return (
    <Select1  defaultValue={{ label: 'Space Marine', value: 'Space Marine' }} theme={'danger'} styles={customStyles} options={options} />
  );
}

export default Select;
