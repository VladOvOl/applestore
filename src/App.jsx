import './App.css';
import { Route, Routes } from 'react-router-dom';
import IPhoneMain from './pages/IPhone/pages/IPhoneMain/IPhoneMain';
import IPhone14proMax from './pages/IPhone/pages/IPhone14proMax/IPhone14proMax'
import IPadMain from './pages/IPad/IPadMain/IPadMain';
import IPad from './pages/IPad/IPad/IPad';
import Homepage from './pages/Homepage/Homepage';
import {useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import Macbook from './pages/Macbook/Macbook';
import AppleWatch from './pages/AppleWatch/AppleWatch';
import AirPods from './pages/AirPods/AirPods';
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

                <Route path='/MacMain' element={<Macbook/>}/>

                <Route path='/AppleWatchMain' element={<AppleWatch/>}/>

                <Route path='/AirPodsMain' element={<AirPods/>}/>  

                <Route path='/Appleby' element={<IPhoneby/>}/>

                <Route path='/*' element={<>EROR</>}/>
            </Route>
        </Routes>

        
    </div>
  );
}

export default App;
