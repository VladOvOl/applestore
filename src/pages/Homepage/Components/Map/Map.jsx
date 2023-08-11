import React from 'react'
import style from './Map.module.css'


function Map() {
    const[showMap,setShowMap] = React.useState(false)
  return (
    <>
        <div className={style.containerTitle}>
            <p className={style.title}>Як знайти наш магазин?</p>
        </div>
        <div className={style.container}>
            <div className={style.containerText}>
                <div className={style.containerTextLeft}>
                        <p className={style.text}>м.Одесса, ТРЦ "Odessa"</p>
                        <p className={style.text}>+380-99-44-33-533</p>
                </div>

                <div className={style.containerTextRight}>
                        <p className={style.text}>Щодня з 10:00 до 21:00.</p>
                        <img className={showMap ? style.activeBtn: style.passiveBtn} src={require('../../../../assets/img/homepage/open.png')} alt="" 
                        width={40} height={40} onClick={()=>setShowMap(!showMap)}/>
                </div>
            </div>
                
            <div className={showMap  ? style.containerMapActive : style.containerMapPassive}>
                {showMap && <iframe className={style.map} style={{border: 0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5495.163589105477!2d30.72709918750304!3d46.47679110000002!2m3!1f0!2f0!3f0!3m2!1i1024 ! 2i768!4f13.1!3m3!1m2!1s0x40c6319a74300857%3A0xdc41cc58027fe9b7!2sInweb!5e0!3m2!1sen!2sua!4v1688986013576!5m2!1sen!2sua" allowfullscreen="allowfullscreen" lazy="" referrerpolicy="no-referrer-when -downgrade"></iframe>}
            </div>
        </div>
    </>
    
    
  )
}

export default Map