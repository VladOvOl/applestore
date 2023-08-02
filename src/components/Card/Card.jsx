import React from 'react'
import style from './Card.module.css'

function Card(props) {
   
  return (
    <div className={style.container}>
        <div className={style.containerCard}>
            <div className={style.containerImg}>
                <img src={props.imgUrl} alt="" 
                width={150}/>
            </div>

            <div className={style.containerText}>
                <p className={style.text}>{props.text}</p>
            </div>

            <div className={style.containerPrice}>
                <p className={style.price}>{props.price} грн</p>
            </div>
            <div className={style.containerBtn}>
                <button className={style.btn}> Купить</button>
            </div>
        </div>
    </div>
   
  )
}

export default Card