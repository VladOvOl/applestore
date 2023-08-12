import React from 'react'
import MainCard from '../MainCard/MainCard'
import BigMainCard from '../BigMainCard/BigMainCard'
import style from "./MainCardCanvas.module.css"


function MainCardCanvas() {

  let arr=[
    {
    id:1,
    imgUrl:"/homepage/iphone.png",
    link: "/IPhoneMain",
    text:"Iphone"
    },
    {
      id:2,
      imgUrl:"/homepage/ipad.jpg",
      link: "/IPadMain",
      text:"Ipad"
    },
    {
      id:3,
      imgUrl:"/homepage/pods.png",
      link:"/AirPodsMain",
      text:"Air pods"
    },
    {
      id:4,
      imgUrl:"/homepage/macbook.jpg",
      link:"/MacMain",
      text:"Macbook"
    },
    {
      id:5,
      imgUrl:"/homepage/watch.png",
      link:"/AppleWatchMain",
      text:"Apple Watch"
    },
    {
      id:6,
      imgUrl:"/homepage/Appleby.png",
      link:"/Appleby",
      text:"Apple б/у"
    },
    {
      id:7,
      imgUrl:"/homepage/ps.jpg",
      link:"/AirPodsMain",
      text:"Playstation"
    },
    {
      id:8,
      imgUrl:"/homepage/gadjet.png",
      link:"/AirPodsMain",
      text:"Gadjet"
    }
]

let arr2=[
  {
  id:1,
  imgUrl:"/homepage/repair.jpg",
  link: "/IPhoneMain",
  text:"Ремонт Apple"
  },
  {
    id:2,
    imgUrl:"/homepage/trade.png",
    link: "/IPadMain",
    text:"TRADE-IN"
  }]

  let arr3=[
    {
      id:3,
      imgUrl:"/homepage/graf.jpeg",
      link:"/AirPodsMain",
      text:"Гравіювання"
    },
    {
      id:4,
      imgUrl:"/homepage/bisnes.jpeg",
      link:"/MacMain",
      text:"Для бізнесу"
    }]

  return (
    <div className={style.container}>
        {arr.map((obj)=>(<MainCard key={obj.id} imgUrl={obj.imgUrl} text={obj.text} link={obj.link}/> ))}
        {arr2.map((obj)=>(<BigMainCard key={obj.id} imgUrl={obj.imgUrl} text={obj.text} link={obj.link} width={550}/> ))}
        {arr3.map((obj)=>(<BigMainCard key={obj.id} imgUrl={obj.imgUrl} text={obj.text} link={obj.link} width={500}/> ))}
       

    </div>
  )
}

export default MainCardCanvas