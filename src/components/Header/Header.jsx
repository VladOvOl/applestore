import React, { useState } from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { change } from '../../toolkitRedux/toolkitSlice'


function Header(props) {

    let[btnShow,setBtnShow]=useState(false)
    let[btnClose,setBtnClose]=React.useState(false)

    const count = useSelector(state => state.toolkit.count)
    const  dispatch = useDispatch()

  return (
    <div className={style.mainContainer}>
        <div className={style.container}>

        <div className={style.containerBtn}>
            <img src={require('../../assets/img/btn=.png')} alt="btn" width={30}
            onClick={()=>dispatch(change())}/>
        </div>

        <div className={style.containerLogo}>
            <Link to="/"className={style.Logo}>APPLE</Link>
        </div>

        <div className={style.containerLinks}>
            <Link className={style.link} to="/IPhoneMain">IPhone</Link>
            <Link className={style.link} to="/IPadMain">IPad</Link>
            <Link className={style.link} to="/MacMain">Mac</Link>
            <Link className={style.link} to="/AppleWatchMain">AppleWatch</Link>
            <Link className={style.link} to="/AirPodsMain">AirPods</Link>
            <Link className={style.link} to="/Appleby">Apple б/у</Link>
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
    
  )
}

export default Header