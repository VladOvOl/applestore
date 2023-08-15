import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../../../components/Card/Card';
import style from './CanvasCard.module.css'
import Prelovder from '../../../../components/Prelovder/Prelovder';
import { useSelector } from 'react-redux';

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
    
  let inputSearch = useSelector(state => state.toolkitSearch.inputText)

  return (
        <div className={style.container}>
            {isLoading && <Prelovder/>}
            {data.filter((obj)=>obj.text.toLowerCase().includes(inputSearch.toLowerCase())).sort(() => Math.random() - 0.5).map((obj,index)=>(<Card key={index} text={obj.text} 
            imgUrl={obj.imgUrl} price={obj.price}/>))}
    </div>
        
    
  )
}

export default CanvasCard