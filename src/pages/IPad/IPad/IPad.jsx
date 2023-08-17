import React from 'react'
import style from './IPad.module.css'
import CanvasCard from '../../../components/CanvasCard/CanvasCard'

function IPad() {
  return (
    <div className={style.container}>
        <CanvasCard link="https://64c62670c853c26efadb23b6.mockapi.io/Models?articular=1211"/>
    </div>
  )
}

export default IPad