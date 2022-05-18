
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import React from 'react';




function App() {



 
    return (
      <div className='wraper'>
        <Header/>
        <Content></Content>
        <Footer/>
      </div>
    )
  }

  // onClick={()=>{setBla(false)}}

export default App;
