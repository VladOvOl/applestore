import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import style from './CanvasCard.module.css'
import Prelovder from '../Prelovder/Prelovder';

function CanvasCard(props) {

  const[isLoading,setIsLoading]=useState(false)
  const[data, setData] = useState([])
  

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
        {data.map((obj)=>(<Card key={obj.id} text={obj.text} 
        imgUrl={obj.imgUrl} price={obj.price}/>))}

         
    </div>
  )
}

export default CanvasCard