import React from 'react'
import style from './CanvasNews.module.css'
import CardNews from '../CardNews/CardNews'



function CanvasNews() {

  let arr=[
    {
    img:"/news2.jpeg",
    text:"Безкоштовна доставка Новою Поштою",
    btn:"Новини"
    },
  {
    img:"/news1.jpeg",
    text:"AirPods Pro: купити зараз або зачекати?",
    btn:"Новини"
  },
  {
    img:"/news3.jpeg",
    text:"Де вигідно купити ноутбук? Тепер у Ябко",
    btn:"Новини"
  },
  {
    img:"/news4.jpeg",
    text:"Темний титан: новий Apple Watch Ultra може отримати новий колір",
    btn:"Новини"
  },
  {
    img:"/news5.jpeg",
    text:"Apple Watch: купити зараз або зачекати?",
    btn:"Новини"
  },
  {
    img:"/news6.jpeg",
    text:"Кнопка Action у iPhone 15 Pro: можливості та функції",
    btn:"Новини"
  },
  {
    img:"/news7.jpeg",
    text:"Нотатки на iPhone: основні фішки додатка",
    btn:"Новини"
  },
  {
    img:"/news8.jpeg",
    text:"iPhone 16 Pro Max отримає кардинально новий телеобʼєктив",
    btn:"Новини"
  },
  {
    img:"/news9.jpeg",
    text:"Apple Silicon M3: коли покажуть нові Mac з 3-нм чіпом?",
    btn:"Новини"
  },
  {
    img:"/news10.jpeg",
    text:"Що покажуть на презентації Apple Event 2023 у вересні?",
    btn:"Новини"
  }
]


  return (
    <div className={style.container}>
        <div className={style.containerTitle}>
            <p className={style.title}> Новини від Apple</p>
        </div>

        <div className={style.containerCard}>
          {arr.map((obj,index)=>(<CardNews id={arr[index]} text={obj.text} img={obj.img} btn={obj.btn}/>))}
        </div>
    </div>
  )
}

export default CanvasNews