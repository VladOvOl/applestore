import React, { useState } from 'react'
import style from './Header.module.css'
import { NavLink, Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { changeMenu } from '../../toolkitRedux/toolkitSlice'
import { changeBag } from '../../toolkitRedux/storebagSlice'
import BagStore from '../BagStore/BagStore'
import { changeInput } from '../../toolkitRedux/toolkitSearch'



function Header() {
    const countMenu = useSelector(state => state.toolkit.countMenu)
    const countBag = useSelector(state => state.bagstoreToolkit.countBag)

    const  dispatch = useDispatch()

    

  return (
    <>
        <div className={style.mainContainer}>
            <div className={style.container}>

            <div className={style.containerBtn}>
                <img src={require('../../assets/img/btn=.png')} alt="btn" width={30}
                onClick={()=>dispatch(changeMenu())}/>
            </div>

            <div className={style.containerLogo}>
                <NavLink to="/"className={style.Logo}>APPLE</NavLink>
            </div>

            <div className={style.containerLinks}>
                <NavLink id={style.link} className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/IPhoneMain">IPhone</NavLink>
                <NavLink id={style.link} className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/IPadMain" >IPad</NavLink>
                <NavLink id={style.link} className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/MacMain" >Mac</NavLink>
                <NavLink id={style.link} className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/AppleWatchMain" >AppleWatch</NavLink>
                <NavLink id={style.link} className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/AirPodsMain" >AirPods</NavLink>
                <NavLink id={style.link} className={({isActive})=>(isActive ? [style.linkActive]:[style.linkPassive])} to="/Appleby" >Apple б/у</NavLink>
            </div>

            <div className={ style.containerSearch}>
                <input className={style.search} type="search" placeholder='Search'
                onChange={(e)=>dispatch(changeInput(e.target.value))}/>
            </div>

            <div className={style.containerBasket}>
                <img src={require('../../assets/img/basket.png')} alt="basket" width={45} 
                onClick={()=>dispatch(changeBag())}/>
            </div>

        
            {countMenu && <Sidebar />}

            {countBag && <BagStore />}
            
            
            


            </div>
        </div>
    </>


    
  )
}

export default Header