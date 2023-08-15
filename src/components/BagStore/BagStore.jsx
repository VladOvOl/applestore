import React, { useState } from 'react'
import style from './BagStore.module.css'
import Card from './Components/Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import {changeBag} from '../../toolkitRedux/storebagSlice'
import { clearItems } from '../../toolkitRedux/bagItems'


function BagStore() {

    const  dispatch = useDispatch()
    const cartItems=useSelector(state => state.bagItems.items)
    const price = useSelector(state => state.bagItems.price)

    const [btn,setBtn]=useState(false)

    function onCkickBuy(){
        dispatch(clearItems())
        setBtn(!btn)
        alert("Дякуємо за замовлення")
    }

  return (
    <div className={style.container}>
        <div className={style.containerBtn}>

            <img className={style.BtnClose} src={require('../../assets/img/BtnX.png')} alt="" width={30} height={30}
            onClick={()=>dispatch(changeBag())}/>

            <p className={style.title}>Shopping Basket</p>
            
        </div>
        <hr />
        <div className={style.containerCard}>
          { cartItems.length > 0 ?  cartItems.map((obj)=><Card 
            text={obj.text} imgUrl={obj.imgUrl} price ={obj.price}/>):
            <div>
                <img src={require('../../assets/img/basketBagStore.png')} alt="" width={200} height={200}/>
                <p className={style.text}>Кошик пустий</p>
            </div>}
        </div>

        <hr />
        <div className={style.containerPrice}>
          
          <button className={style.btnBuy} onClick={onCkickBuy}>Оформити замовлення</button>
          <p className={style.price}>{price} грн</p>
        </div>
        
    </div>
  )
}

export default BagStore

