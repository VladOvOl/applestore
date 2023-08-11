import React from 'react'
import style from './MainCard.module.css'
import { NavLink } from 'react-router-dom'

function MainCard(props) {
  return (
    <NavLink to={props.link} className={style.container}>
        <div className={style.containerImg}>
            <img src={props.imgUrl} 
            alt="" width={200} height={200}/>
        </div>

        <div className={style.containerText}>
            <p className={style.text}>{props.text}</p>
        </div>
    </NavLink>

  )
}

export default MainCard