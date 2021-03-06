import './Preloader.sass'
import { useState } from 'react';
import { useEffect } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader"


export default function Preloader(props) { 
    let [loading, setLoading] = useState(true);
    useEffect(() => {
      let timer = setInterval(()=>{setLoading(false)},2500)
      },[]);

    return (
        <div  className={loading ? "preloader preloader-show" : "preloader preloader-hide" }>
          <PacmanLoader color='gold'  loading={loading} size={25} margin={2} />
        </div>
    );
}