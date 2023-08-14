import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainCard from '../MainCard/MainCard'
import style from './CanvasMainCard.module.css'
import Prelovder from '../Prelovder/Prelovder';

function CanvasMainCard(props) {

    const[data, setData] = useState([])
    const[isLoading,setIsLoading]=useState(false)
  
    useEffect(()=>{
      setIsLoading(true)
      axios.get(props.link)
      .then((res)=>setData(res.data)).catch(error => {
        // handle any errors/rejected Promises
      })
      .finally(() => setIsLoading(false)); 
      // complete loading success/fail
      
    },[])


    


  return (
    <div className={style.container}>
        {isLoading && <Prelovder/>}
        {data.map((obj,index)=>(<MainCard key={index} text={obj.text}  link={obj.link}
        imgUrl={obj.imgUrl} />))}

        
    </div>
  )
}

export default CanvasMainCard