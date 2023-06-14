import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './Menubar/Menubar';
import Addhealth from './components/Addhealth/Addhealth';
import Showdata from './components/Showdata/Showdata';
import Andata from './components/Andata/Andata';
import { Maincontextwrapper } from './Store/mainContext/maincontext';

function App() {

  const [loadcomponent ,setLoadcomponent] = useState (<Showdata></Showdata>)
  const buttonarr =[
    {
        id:1,
        label :"show health",
        btfun : () => {setLoadcomponent(<Showdata />)}
    },
    {

      id:2,
      label:"add health",
      btfun : () => {setLoadcomponent(<Addhealth />)}
    },

    {

 id :3,

 label:"analytics health",

 btfun : () => {setLoadcomponent (<Andata/>)}

    }

]

  return (

    <Maincontextwrapper>
    <div>
      <Menubar buttonarr={buttonarr} />
      {loadcomponent}
    
    



    </div>

    </ Maincontextwrapper >
  );
}

export default App;
