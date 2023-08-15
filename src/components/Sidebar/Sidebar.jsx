import React from 'react'
import style from './Sidebar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeMenu } from '../../toolkitRedux/toolkitSlice'
import { Link } from 'react-router-dom'
import { changeInput } from '../../toolkitRedux/toolkitSearch'

function Sidebar() {


  const  dispatch = useDispatch()
    
  return (
    <div className={style.container}>
        <div className={style.containerTitle}>
            <div className={style.containerBtnX}>
                <Link className={style.text} to='/'>Apple</Link>

                <img className={style.BtnX } src={require('../../assets/img/BtnX.png')} alt="" width={30} height={30}
                onClick={()=>dispatch(changeMenu())}/>
            </div>
            <hr />
            <div className={ style.containerSearch}>
                <input className={style.search} type="search" placeholder='Search'
                onChange={(e)=>dispatch(changeInput(e.target.value))}/>
            </div>
            <hr />
            <div className={style.containerMenu}>

                <div className={style.containerIphone }>
                    <img src={require('../../assets/img/iphone.png')} 
                    width={40} alt="" />
                    <Link className={style.link} to="/IPhoneMain">Iphone</Link>
                </div>

                <div className={style.containerIpad}>
                    <img src={require('../../assets/img/ipad.png')} 
                    width={40} alt="" />
                    <Link className={style.link} to="/IPadMain">IPade</Link>
                </div>

                <div className={style.containerMac}>
                    <img src={require('../../assets/img/macbook.png')} 
                    width={40} alt="" />
                    <Link className={style.link} to="/MacMain">Mac</Link>
                </div>

                <div className={style.containerAirPods}>
                    <img src={require('../../assets/img/airpoods.png')} 
                    width={30} alt="" />
                    <Link className={style.link} to="/AppleWatchMain">AppleWatch</Link>
                </div>

                <div className={style.containerAppleWatch}>
                    <img src={require('../../assets/img/watch.png')} 
                    width={40} alt="" />
                    <Link className={style.link} to="/AirPodsMain">AirPods</Link>
                </div>

                <div className={style.containerIphoneby}>
                    <img src={require('../../assets/img/iphone.png')} 
                    width={40} alt="" />
                    <Link className={style.link} to="/Appleby">Iphoneб б/у</Link>
                </div>

                <hr />

                <div className={style.containerRepair}>
                    <img src={require('../../assets/img/repair.png')} 
                    width={40} alt="" />
                    <Link className={style.link} to="/Appleby">Ремонт</Link>
                </div>

                <div className={style.containerRepair}>
                    <img src={require('../../assets/img/traide.png')} 
                    width={30} alt="" />
                    <Link className={style.link} to="/Appleby">Traide</Link>
                </div>
                <hr />

            </div>
            

        </div>


    </div>
  )
}

export default Sidebar
