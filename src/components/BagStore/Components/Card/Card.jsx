import React from 'react'
import style from './Card.module.css'
import { useDispatch } from 'react-redux'
import { removeFrombag } from '../../../../toolkitRedux/bagItems'

function Card(props) {

  const dispatch = useDispatch()

  return (
    <div className={style.container}>
        <div className={style.containerImg}>
            <img className={style.img}src={props.imgUrl} alt="" 
            width={150}/>
        </div>

        <div className={style.containerText}>
            <p className={style.text}>{props.text}</p>
        </div>

        <div className={style.containerPrice}>
            <p className={style.price}>{props.price} грн</p>
        </div>

        <button onClick={()=>dispatch(removeFrombag())}></button>
    </div>
  )
}

export default Card