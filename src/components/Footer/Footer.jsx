import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'

function Footer() {

    let [btnShowList1,setBtnShowList1] = useState(false)
    let [btnShowList2,setBtnShowList2] = useState(false)
    let [btnShowList3,setBtnShowList3] = useState(false)
    let [btnShowList4,setBtnShowList4] = useState(false)

  return (
    <div className={style.containerMain}>
      <div className={style.container}>
          <div className={style.containerProduction}>
            <h4>Продукція</h4>
              <ul >
                <li>iPhone</li>
                <li>iPad</li>
                <li>Macbook</li>
                <li>Apple Watch</li>
                <li>AirPods</li>
                <li>Гаджети</li>
                <li>Аксесуари</li>
                <li>Apple б/у</li>
              </ul> 
          </div>

          <div className={style.containerService}>
            <h4>Сервіси</h4>

            <ul >
                <li>Ремонт</li>
                <li>Trade IN</li>
                <li>Корисні статті</li>
            </ul>

          </div>

          <div className={style.containerInformation}>
            <h4>Інформація</h4>

            <ul >
                <li>Вакансії</li>
                <li>Гарантія та сервіс</li>
                <li>Доставка та оплата</li>
                <li>Договір публічної офери</li>
                <li>Контакти</li>
            </ul>

          </div>

          <div className={style.containerQA}>
            <h4>Для зв'язку та запитань</h4>
            <ul>
              <li>info@gmail.com</li>
              <li>(+380)95 99 33 555</li>
            </ul>

            <div className={style.containerIcon}>
                <img className={style.img} src={require("../../assets/img/footer/instagram.png")} alt="" width={40} />
                <img className={style.img} src={require("../../assets/img/footer/facebook.png")} alt="" width={40} />
                <img className={style.img}  src={require("../../assets/img/footer/youtube.png")} alt=""  width={40}/>
            </div>
          </div>
        </div>

        <div className={style.containerPhone}>
            <div className={style.containerProductionPhone}>
                <div className={style.containerTitle}>
                    <p className={btnShowList1 ? style.textActive : style.textPassive}>Продукція</p>
                    <img className={style.imgOpen}src={require('../../assets/img/homepage/open.png')} alt=""  width={40}
                    onClick={()=>setBtnShowList1(!btnShowList1)}/>
                </div>
                {btnShowList1 && 
                    <div className={style.containerItems}>
                        <div className={style.containerIphone }>
                            <img src={require('../../assets/img/iphone.png')} 
                            width={40} alt="" />
                            <Link className={style.link} to="/IPhoneMain">Iphone</Link>
                        </div>

                        <div className={style.containerIpad}>
                            <img src={require('../../assets/img/ipad.png')} 
                            width={40} alt="" />
                            <Link className={style.link} to="/IPadMain">IPade</Link>
                        </div>

                        <div className={style.containerMac}>
                            <img src={require('../../assets/img/macbook.png')} 
                            width={40} alt="" />
                            <Link className={style.link} to="/MacMain">Mac</Link>
                        </div>

                        <div className={style.containerAirPods}>
                            <img src={require('../../assets/img/watch.png')} 
                            width={40} alt="" />
                            <Link className={style.link} to="/AppleWatchMain">AppleWatch</Link>
                        </div>

                        <div className={style.containerAppleWatch}>
                            <img src={require('../../assets/img/airpoods.png')} 
                            width={30} alt="" />
                            <Link className={style.link} to="/AirPodsMain">AirPods</Link>
                        </div>

                        <div className={style.containerIphoneby}>
                            <img src={require('../../assets/img/iphone.png')} 
                            width={40} alt="" />
                            <Link className={style.link} to="/Appleby">Iphoneб б/у</Link>
                        </div>

                    </div> 
                }
            </div>
            
            <div className={style.containerServicePhone}>
                <div className={style.containerTitle}>
                    <p className={btnShowList2 ? style.textActive : style.textPassive}>Сервіси</p>
                    <img className={style.imgOpen}src={require('../../assets/img/homepage/open.png')} alt=""  width={40}
                    onClick={()=>setBtnShowList2(!btnShowList2)}/>
                </div>
                {btnShowList2 && 
                <div className={style.containerItems}>
                     <div className={style.containerRepair}>
                        <img src={require('../../assets/img/repair.png')} 
                        width={40} alt="" />
                        <Link className={style.link} to="/Appleby">Ремонт</Link>
                    </div>
 
                    <div className={style.containerRepair}>
                        <img src={require('../../assets/img/traide.png')} 
                        width={30} alt="" />
                        <Link className={style.link} to="/Appleby">Traide</Link>
                    </div>
                 </div>
                }
            </div>
            
            <div className={style.containerInformationPhone}> 
                <div className={style.containerTitle}>
                    <p className={btnShowList3 ? style.textActive : style.textPassive}>Інформація</p>
                    <img className={style.imgOpen}src={require('../../assets/img/homepage/open.png')} alt="" width={40}
                    onClick={()=>setBtnShowList3(!btnShowList3)} />
                </div>
                {btnShowList3 && 
                <div className={style.containerItems}>
                     <div className={style.containerRepair}>
                        <img src={require('../../assets/img/repair.png')} 
                        width={40} alt="" />
                        <Link className={style.link} to="/Appleby">Ремонт</Link>
                    </div>
 
                    <div className={style.containerRepair}>
                        <img src={require('../../assets/img/traide.png')} 
                        width={30} alt="" />
                        <Link className={style.link} to="/Appleby">Traide</Link>
                    </div>
                 </div>
                }
            </div>
            
            <div className={style.containerQAPhone}>
                <div className={style.containerTitle}>
                    <p className={btnShowList4 ? style.textActive : style.textPassive}>Для зв'язку та запитань</p>
                    <img className={style.imgOpen}src={require('../../assets/img/homepage/open.png')}
                    alt=""  width={40} onClick={()=>setBtnShowList4(!btnShowList4)}/>
                </div>
                {btnShowList4 && 
                <div className={style.containerItems}>
                     <div className={style.containerRepair}>
                        <img src={require('../../assets/img/repair.png')} 
                        width={40} alt="" />
                        <Link className={style.link} to="/Appleby">Ремонт</Link>
                    </div>
 
                    <div className={style.containerRepair}>
                        <img src={require('../../assets/img/traide.png')} 
                        width={30} alt="" />
                        <Link className={style.link} to="/Appleby">Traide</Link>
                    </div>
                 </div>
                }
            </div>
            
            
            

        </div>
        
      </div>

    
  )
}

export default Footer