import React from 'react'
import style from './IPhoneMain.module.css'
import CanvasMainCard from '../../../../components/CanvasMainCard/CanvasMainCard'

function IPhoneMain() {
  return (
    <div className={style.container}>
        <CanvasMainCard link = 'https://64c62670c853c26efadb23b6.mockapi.io/MainModels?text=Iphone'/>
    </div>
  )
}

export default IPhoneMain

