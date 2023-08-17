import React from 'react'
import style from './Homepage.module.css'
import CanvasNews from '../../components/CanvasNews/CanvasNews'
import MainCardCanvas from './Components/MainCardCanvas/MainCardCanvas'
import Map from './Components/Map/Map'
import CanvasCard from './Components/CanvasCard/CanvasCard'

function Homepage() {

  

  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
            <p className={style.title}>Популярні товари</p>
      </div>
            <CanvasCard link="https://64c62670c853c26efadb23b6.mockapi.io/Models"/>
            <CanvasCard link="https://64c52e47c853c26efada96fd.mockapi.io/Models"/>
            <MainCardCanvas/>
            <CanvasNews/>
            <Map/>
      
        
    </div>

  )
}

export default Homepage