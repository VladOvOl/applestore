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

               
                <Link className={style.link} to="/IPhoneMain" onClick={()=>dispatch(changeMenu())}> 
                    <div className={style.containerIphone }>
                        <img src={require('../../assets/img/iphone.png')} width={40} alt="" /> 
                        iPhone
                    </div>
                </Link>
            
                <Link className={style.link} to="/IPadMain" onClick={()=>dispatch(changeMenu())}>
                    <div className={style.containerIpad}>
                        <img src={require('../../assets/img/ipad.png')} width={40} alt="" />
                        iPade
                    </div>
                </Link>

                <Link className={style.link} to="/MacMain" onClick={()=>dispatch(changeMenu())}>
                    <div className={style.containerMac}>
                        <img src={require('../../assets/img/macbook.png')} width={40} alt="" />
                        Mac
                    </div>
                </Link>
                
                <Link className={style.link} to="/AppleWatchMain" onClick={()=>dispatch(changeMenu())}>
                    <div className={style.containerAirPods}>
                        <img src={require('../../assets/img/watch.png')} width={40} alt="" />
                        AppleWatch
                    </div>
                </Link>

                <Link className={style.link} to="/AirPodsMain" onClick={()=>dispatch(changeMenu())}>
                    <div className={style.containerAppleWatch}>
                        <img src={require('../../assets/img/airpoods.png')} width={30} alt="" />
                        AirPods
                    </div>
                </Link>

                <Link className={style.link} to="/Appleby" onClick={()=>dispatch(changeMenu())}>
                    <div className={style.containerIphoneby}>
                        <img src={require('../../assets/img/iphone.png')} width={40} alt="" />
                        Iphoneб б/y
                    </div>
                </Link>


                <hr />

                <Link className={style.link} to="/Appleby" onClick={()=>dispatch(changeMenu())}>
                    <div className={style.containerRepair}>
                        <img src={require('../../assets/img/repair.png')} width={40} alt="" />
                        Ремонт
                    </div>
 
                </Link>
                

                <Link className={style.link} to="/Appleby" onClick={()=>dispatch(changeMenu())}>                
                    <div className={style.containerRepair}>
                        <img src={require('../../assets/img/traide.png')} width={30} alt="" />
                        Traide
                    </div>
                </Link>

                <hr />

            </div>
            

        </div>


    </div>
  )
}

export default Sidebar
