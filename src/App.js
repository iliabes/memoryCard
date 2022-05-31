import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import React, { useState } from 'react';
import { store } from './store/store';
import Impi from './Impi/Impi';


function App() {
let [fraction, setFraction] = useState(store.getState().fraction.value)
store.subscribe(() => {console.log('index.js',store.getState().fraction.value);setFraction(store.getState().fraction.value)})


 
    return (
      <div className='wraper'>
        <Impi/>
        <Header/>
        <Content fraction={fraction}></Content>
        <Footer/>
      </div>
    )
  }

  // onClick={()=>{setBla(false)}}

export default App;
