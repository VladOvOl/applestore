import './App.css';
import { Route, Routes } from 'react-router-dom';
import IPhoneMain from './pages/IPhone/pages/IPhoneMain/IPhoneMain';
import IPhone14proMax from './pages/IPhone/pages/IPhone14proMax/IPhone14proMax'
import IPadMain from './pages/IPad/IPadMain/IPadMain';
import IPad from './pages/IPad/IPad/IPad';
import Homepage from './pages/Homepage/Homepage';
import {useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import MacbookMain from './pages/Macbook/MacbookMain';
import MainAppleWatch from './pages/AppleWatch/MainAppleWatch/MainAppleWatch';
import MainAirPods from './pages/AirPods/MainAirPods/MainAirPods';
import IPhoneby from './pages/IPhoneby/IPhoneby';
import IPhone14pro from './pages/IPhone/pages/IPhone14pro/IPhone14pro';
import IPhone14Plus from './pages/IPhone/pages/IPhone14Plus/IPhone14Plus';
import IPhone14 from './pages/IPhone/pages/IPhone14/IPhone14';
import IPhone13proMax from './pages/IPhone/pages/IPhone13proMax/IPhone13proMax';
import IPhone13pro from './pages/IPhone/pages/IPhone13pro/IPhone13pro';
import IPhone13 from './pages/IPhone/pages/IPhone13/IPhone13';
import IPhone12 from './pages/IPhone/pages/IPhone12/IPhone12';
import IPhone11 from './pages/IPhone/pages/IPhone11/IPhone11';
import IPhoneSe from './pages/IPhone/pages/IPhoneSe/IPhoneSe';
import IPhone13Mini from './pages/IPhone/pages/IPhone13Mini/IPhone13Mini';
import IPadAir from './pages/IPad/IPad Air/IPadAir';
import IPadPro from './pages/IPad/IPad Pro/IPadPro';
import IPadMini from './pages/IPad/IPad Mini/IPadMini';
import MacbookPro from './pages/Macbook/MacbookPro/MacbookPro';
import MacbookAir from './pages/Macbook/MacbookAir/MacbookAir';
import IMac from './pages/Macbook/IMac/IMac';
import MacbookMini from './pages/Macbook/MacbookMini/MacbookMini';
import MacStudio from './pages/Macbook/MacStudio/MacStudio';
import Macbookby from './pages/Macbook/Macbookby/Macbookby';
import AirPods from './pages/AirPods/AirPods/AirPods';
import AirPodsPro from './pages/AirPods/AirPodsPro/AirPodsPro';
import AirPodsMax from './pages/AirPods/AirPodsMax/AirPodsMax';
import AirPodsTools from './pages/AirPods/AirPodsTools/AirPodsTools';
import AppleWatch8 from './pages/AppleWatch/AppleWatch8/AppleWatch8'
import AppleWatch7 from './pages/AppleWatch/AppleWatch7/AppleWatch7'
import AppleWatchSE from './pages/AppleWatch/AppleWatchSE/AppleWatchSE'
import AppleWatchSE2 from './pages/AppleWatch/AppleWatchSE2/AppleWatchSE2'
import AppleWatchUltra from './pages/AppleWatch/AppleWatchUltra/AppleWatchUltra'
import AppleWatchby from './pages/AppleWatch/AppleWatchby/AppleWatchby'

function App() {

  const countBag = useSelector(state => state.bagstoreToolkit.countBag)
  const countMenu = useSelector(state => state.toolkit.countMenu)
  
  return (
    <div className={countBag||countMenu  ? ['disablescroll']:['']}>

      <Routes> 
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                    <Route path='/IPhoneMain' element={<IPhoneMain/>}/>
                        <Route path='/Apple_iPhone_14_Pro_Max'element={ <IPhone14proMax />}/>
                        <Route path='/Apple_iPhone_14_Pro'element={ <IPhone14pro />}/>
                        <Route path='/Apple_iPhone_14'element={ <IPhone14/>}/>
                        <Route path='/Apple_iPhone_14_Plus'element={ <IPhone14Plus />}/>
                        <Route path='/Apple_iPhone_13_Pro_Max'element={ <IPhone13proMax />}/>
                        <Route path='/Apple_iPhone_13_Pro'element={ <IPhone13pro />}/>
                        <Route path='/Apple_iPhone_13_Mini'element={ <IPhone13Mini/>}/>
                        <Route path='/Apple_iPhone_13'element={ <IPhone13/>}/>
                        <Route path='/Apple_iPhone_12'element={ <IPhone12/>}/>
                        <Route path='/Apple_iPhone_11'element={ <IPhone11/>}/>
                        <Route path='/Apple_iPhone_Se'element={ <IPhoneSe/>}/>

                <Route path='/IpadMain' element={<IPadMain/>}/>
                    <Route path='/Apple_Ipad' element={<IPad/>}/>
                    <Route path='/Apple_Ipad_Air' element={<IPadAir/>}/>
                    <Route path='/Apple_Ipad_Pro' element={<IPadPro/>}/>
                    <Route path='/Apple_Ipad_Mini' element={<IPadMini/>}/>

                <Route path='/MacMain' element={<MacbookMain/>}/>
                    <Route path='/Apple_MacBook_Pro' element={<MacbookPro/>}/>
                    <Route path='/Apple_MacBook_Air' element={<MacbookAir/>}/>
                    <Route path='/Apple_IMac' element={<IMac/>}/>
                    <Route path='/Apple_Mac_Mini' element={<MacbookMini/>}/>
                    <Route path='/Apple_Mac_Studio' element={<MacStudio/>}/>
                    <Route path='/MacBookby' element={<Macbookby/>}/>
                    

                <Route path='/AppleWatchMain' element={<MainAppleWatch/>}/>
                    <Route path='/Apple_Watch_8' element={<AppleWatch8/>}/>
                    <Route path='/Apple_Watch_SE2' element={<AppleWatchSE2/>}/>
                    <Route path='/Apple_Watch_Ultra' element={<AppleWatchUltra/>}/>
                    <Route path='/Apple_Watch_7' element={<AppleWatch7/>}/>
                    <Route path='/Apple_Watch_SE' element={<AppleWatchSE/>}/>
                    <Route path='/Apple_Watch_by' element={<AppleWatchby/>}/>

                <Route path='/AirPodsMain' element={<MainAirPods/>}/>  
                    <Route path='/AirPods' element={<AirPods/>}/>
                    <Route path='/AirPods_Pro' element={<AirPodsPro/>}/>
                    <Route path='/AirPods_Pro_Max' element={<AirPodsMax/>}/>
                    <Route path='/AirPods_Tools' element={<AirPodsTools/>}/>

                <Route path='/Appleby' element={<IPhoneby/>}/>

                <Route path='/*' element={<>EROR</>}/>
            </Route>
        </Routes>

        
    </div>
  );
}

export default App;
