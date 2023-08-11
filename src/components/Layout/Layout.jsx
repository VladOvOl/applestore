import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import style from './Layout.module.css'

function Layout() {
  return (
    <div className={style.container}>
        <div className={style.containerHeader}>
            <Header/>
         </div>

        <div className={style.containerMain}>
            <Outlet/>
        </div>
        

        <div className={style.containerFooter}>
            <Footer/>
        </div>
    </div>
    
    
    

  )
}

export default Layout