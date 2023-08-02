import React from 'react'
import style from './IPad.module.css'
import CanvasCard from '../../../components/CanvasCard/CanvasCard'

function IPad() {
  return (
    <div className={style.container}>
        <CanvasCard link="https://64c52e47c853c26efada96fd.mockapi.io/Ipad"/>
    </div>
  )
}

export default IPad