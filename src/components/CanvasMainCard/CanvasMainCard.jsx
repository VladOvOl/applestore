import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainCard from '../MainCard/MainCard'
import style from './CanvasMainCard.module.css'
import { Link } from 'react-router-dom';

function CanvasMainCard(props) {

    const[data, setData] = useState([])
  
    useEffect(()=>{
    axios.get(props.link)
    .then((res)=>setData(res.data))
    },[])

  return (
    <div className={style.container}>
        {data.map((obj)=>(<MainCard key={obj.id} text={obj.text}  link={obj.link}
        imgUrl={obj.imgUrl} />))}
    </div>
  )
}

export default CanvasMainCard