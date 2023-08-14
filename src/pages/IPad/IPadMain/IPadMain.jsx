import React from 'react'
import style from './IPadMain.module.css' 
import CanvasMainCard from '../../../components/CanvasMainCard/CanvasMainCard'


function IPadMain() {
  return (
    <div className={style.container}>
        <CanvasMainCard link="https://64c62670c853c26efadb23b6.mockapi.io/MainModels?text=iPad"/>
        
    </div>
  )
}

export default IPadMain

