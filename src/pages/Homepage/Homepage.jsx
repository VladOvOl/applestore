import style from './Homepage.module.css'
import CanvasNews from '../../components/CanvasNews/CanvasNews'
import MainCardCanvas from './Components/MainCardCanvas/MainCardCanvas'
import Map from './Components/Map/Map'

function Homepage() {

  return (
    <div className={style.container}>
        <MainCardCanvas/>
        <CanvasNews/>
        <Map/>
    </div>

  )
}

export default Homepage