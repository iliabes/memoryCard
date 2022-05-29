import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import React, { useState } from 'react';
import { store } from './store/reduser';
import Impi from './Impi/Impi';


function App() {
let [fraction, setFraction] = useState(store.getState().fraction.value)
store.subscribe(() => setFraction(store.getState().fraction.value))


 
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
