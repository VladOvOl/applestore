import React, { useState } from 'react'
import style from './CardNews.module.css'

function CardNews(props) {

  const[onFocus,setOnFocus]=useState(false)

  return (
    <div className={style.container} 
        onMouseEnter={()=>setOnFocus(true)}
        onMouseLeave={()=>setOnFocus(false)}>

        <div className={style.containerImg}>
            <img src={props.img} 
            alt=""  width={200}/>
        </div>
        <div className={onFocus ? [style.activeBtn] : [style.passiveBtn]}>
          <button className={style.btn}>{props.btn}</button>

        </div>
        <div className={style.containerText}>
          <p className={style.text}>{props.text}</p>
        </div>
    </div>
  )
}

export default CardNews