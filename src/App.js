import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import React from 'react';
import Impi from './Impi/Impi';
import Preloader from './Preloader/Preloader';



function App() {




 
    return (
      <React.Fragment>
      <div className='wraper'>
        <Impi/>
        <Header/>
        <Content ></Content>
        <Footer/>
      </div>
      </React.Fragment>
    )
  }

  // onClick={()=>{setBla(false)}}

export default App;
