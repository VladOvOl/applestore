import React from 'react'
import style from './IPadPro.module.css'
import CanvasCard from '../../../components/CanvasCard/CanvasCard'

function IPadPro() {
  return (
    <div className={style.container}>
        <CanvasCard link="https://64c62670c853c26efadb23b6.mockapi.io/Models?articular=1213"/>
    </div>
  )
}

export default IPadPro