import React, { useState } from 'react'
import style from './Header.module.css'
import { NavLink, Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { change } from '../../toolkitRedux/toolkitSlice'


function Header(props) {

    let[btnShow,setBtnShow]=useState(false)
    let[btnClose,setBtnClose]=React.useState(false)

    const count = useSelector(state => state.toolkit.count)
    const  dispatch = useDispatch()

  return (
    <div>
        <div className={style.mainContainer}>
            <div className={style.container}>

            <div className={style.containerBtn}>
                <img src={require('../../assets/img/btn=.png')} alt="btn" width={30}
                onClick={()=>dispatch(change())}/>
            </div>

            <div className={style.containerLogo}>
                <NavLink to="/"className={style.Logo}>APPLE</NavLink>
            </div>

            <div className={style.containerLinks}>
                <NavLink className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/IPhoneMain">IPhone</NavLink>
                <NavLink className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/IPadMain" >IPad</NavLink>
                <NavLink className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/MacMain" >Mac</NavLink>
                <NavLink className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/AppleWatchMain" >AppleWatch</NavLink>
                <NavLink className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/AirPodsMain" >AirPods</NavLink>
                <NavLink className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/Appleby" >Apple б/у</NavLink>
            </div>

            <div className={ style.containerSearch}>
                <input className={style.search} type="search" placeholder='Search'/>
            </div>

            <div className={style.containerBasket}>
                <img src={require('../../assets/img/basket.png')} alt="basket" width={45} />
            </div>

            
            {count && <Sidebar className={style.jh}/>}
            
            
            


            </div>
        </div>

        <Outlet/>
    </div>


    
  )
}

export default Header