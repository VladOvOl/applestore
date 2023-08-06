import './App.css';
import Header from './components/Header/Header'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import IPhoneMain from './pages/IPhone/pages/IPhoneMain/IPhoneMain';
import IPhone14proMax from './pages/IPhone/pages/IPhone14proMax/IPhone14proMax'
import IPadMain from './pages/IPad/IPadMain/IPadMain';
import IPad from './pages/IPad/IPad/IPad';
import Homepage from './pages/Homepage/Homepage';

function App() {

    
  
  return (
    <div className="App">
        <Routes> 
            <Route path='/' element={<Header/>}>
                <Route index element={<Homepage/>} />
                <Route path='/IPhoneMain' element={<IPhoneMain/>} />
                <Route path='/Apple_iPhone_14_Pro_Max'element={ <IPhone14proMax />}/>
                <Route path='/IpadMain' element={<IPadMain/>}></Route>
                <Route path='/Apple_Ipad' element={<IPad/>}></Route>
                <Route path='/AppleWatchMain' element={<IPhoneMain/>} />
            </Route>

        </Routes>
        
    </div>
  );
}

export default App;
