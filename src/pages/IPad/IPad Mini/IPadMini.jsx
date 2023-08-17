import React from 'react'
import style from './IPadMini.module.css'
import CanvasCard from '../../../components/CanvasCard/CanvasCard'

function IPadMini() {
  return (
    <div className={style.container}>
        <CanvasCard link="https://64c62670c853c26efadb23b6.mockapi.io/Models?articular=1214"/>
    </div>
  )
}

export default IPadMini