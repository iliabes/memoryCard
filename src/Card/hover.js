import {useState, useEffect} from "react";

export default function useHover(ref){
    const [isHover , setHover] = useState(true)


    function on(){ setHover(true)}
    function off(){ setHover(false)}

    useEffect(()=>{
        
        if(!ref.current){
            return
        }
        const elem = ref.current;

        elem.addEventListener('mouseenter',on)
        elem.addEventListener('mouseleave',on)
        elem.addEventListener('mousemove',off)
        

        return ()=>{
            elem.removeEventListener('mouseenter',on)
            elem.removeEventListener('mouseleave',on)
            elem.removeEventListener('mousemove',off)
        }

    },[])

    return isHover
}