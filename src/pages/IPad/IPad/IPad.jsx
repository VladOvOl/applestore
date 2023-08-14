import React from 'react'
import style from './IPad.module.css'
import CanvasCard from '../../../components/CanvasCard/CanvasCard'

function IPad() {
  return (
    <div className={style.container}>
        <CanvasCard link="https://64c62670c853c26efadb23b6.mockapi.io/Models?text=Apple iPad 10.9 "/>
    </div>
  )
}

export default IPad