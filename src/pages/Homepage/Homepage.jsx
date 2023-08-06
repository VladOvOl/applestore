import React from 'react'
import App from '../../App'
import style from './Homepage.module.css'
import CanvasNews from '../../components/CanvasNews/CanvasNews'

function Homepage() {
  return (
    <div>
        <div className={style.container}>
        <CanvasNews/>
        </div>
 
    </div>

  )
}

export default Homepage