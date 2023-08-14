import React from 'react'
import style from './Card.module.css'
import { useDispatch } from 'react-redux'
import { addTobag ,addToprice} from '../../toolkitRedux/bagItems'

function Card(props) {

    const dispatch = useDispatch()

    function addTobasket(){
        dispatch(addTobag({text:props.text, imgUrl:props.imgUrl, price:props.price}))
        console.log('dvdvd')
        dispatch(addToprice(props.price))
        

    }
   

  return (
    <div className={style.container}>
        <div className={style.containerCard}>
            <div className={style.containerImg}>
                <img src={props.imgUrl} alt="" 
                width={150}/>
            </div>

            <div className={style.containerMain}>

                <div className={style.containerText}>
                    <p className={style.text}>{props.text}</p>
                </div>

                <div className={style.containerPrice}>
                    <p className={style.price}>{props.price} грн</p>
                </div>
            
            </div>
            
            <div className={style.containerBtn}>
                <button className={style.btn} onClick={addTobasket}> Купить</button>
            </div>
        </div>

    </div>
   
  )
}

export default Card