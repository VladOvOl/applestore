import React from 'react'
import { ReactComponent as MyLogo } from '../../assets/img/loading.svg'
import style from "./Prelovder.module.css"

function Prelovder() {
  return (
    <div className={style.container}>
        <div className={style.containerLogo}>
            <MyLogo style={{backgroundColor:"#E2E2E2"}}/>
        </div>

        <div className={style.containerText}>
            <h1>Loading...</h1>
        </div>
        
    </div>
  )
}

export default Prelovder