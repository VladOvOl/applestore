import React from 'react'
import style from './MainCard.module.css'
import { Link } from 'react-router-dom'


function MainCard(props) {
  return (
    
    <Link to={props.link}className={style.container}>
        <div className={style.containerImg}>
            <img className={style.img}src={props.imgUrl}  alt=""/>
        </div>

        <div className={style.containerText}>
            <p className={style.text}>{props.text}</p>

        </div>
    </Link>


    
  )
}


export default MainCard