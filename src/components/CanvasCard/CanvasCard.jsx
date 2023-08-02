import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import style from './CanvasCard.module.css'

function CanvasCard(props) {

  const[data, setData] = useState([])
  
    useEffect(()=>{
    axios.get(props.link)
    .then((res)=>setData(res.data))
    },[])

  return (
    <div className={style.container}>
        {data.map((obj)=>(<Card key={obj.id} text={obj.text} 
        imgUrl={obj.imgUrl} price={obj.price}/>))}

         
    </div>
  )
}

export default CanvasCard