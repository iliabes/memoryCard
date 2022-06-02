import './Preloader.sass'
import { useState } from 'react';

import { useEffect } from 'react';

import PacmanLoader from "react-spinners/PacmanLoader"

export default function Preloader(props) { 
    console.log('123123');
    let [loading, setLoading] = useState(true);
    useEffect(() => {
     
        window.addEventListener('load',()=>{
       
          setLoading(false)

        })
      });


    return (
        <div  className={loading ? "preloader preloader-show" : "preloader preloader-hide" }>
          <PacmanLoader color='gold'  loading={loading} size={25} margin={2} />
        </div>
    );
}