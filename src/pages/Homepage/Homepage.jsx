import React from 'react'
import style from './Homepage.module.css'
import CanvasNews from '../../components/CanvasNews/CanvasNews'
import MainCardCanvas from './Components/MainCardCanvas/MainCardCanvas'
import Map from './Components/Map/Map'
import CanvasCard from './Components/CanvasCard/CanvasCard'

function Homepage() {

  

  return (
    <div className={style.container}>
        <CanvasCard link="https://64c62670c853c26efadb23b6.mockapi.io/Models"/>
        <MainCardCanvas/>
        <CanvasNews/>
        <Map/>
    </div>

  )
}

export default Homepage