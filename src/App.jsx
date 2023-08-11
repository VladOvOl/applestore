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
