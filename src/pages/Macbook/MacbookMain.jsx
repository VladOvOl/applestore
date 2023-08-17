import React from 'react'
import style from './MackbookMain.module.css'
import CanvasMainCard from '../../components/CanvasMainCard/CanvasMainCard'

function MacbookMain() {
  return (
    <div className={style.container}>
        <CanvasMainCard link = 'https://64c62670c853c26efadb23b6.mockapi.io/MainModels?text=Mac'/>
    </div>
  )
}

export default MacbookMain