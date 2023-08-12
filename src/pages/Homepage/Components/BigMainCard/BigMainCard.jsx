import React from 'react'
import style from './BigMainCard.module.css'
import { NavLink } from 'react-router-dom'

function BigCardNews(props) {


    return (
        <NavLink to={props.link} className={style.container}>
            <div className={style.containerImg}>
                <img className={style.Img}src={props.imgUrl} 
                alt="" width={props.width} height={200}/>
            </div>

            <div className={style.containerText}>
                <p className={style.text}>{props.text}</p>
            </div>
        </NavLink>
    )
  }

export default BigCardNews