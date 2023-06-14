import { createContext, useState } from "react";


const mainContext:any = createContext({

    healthdata:[]
});

const initialstate = [
{

    id:0 ,
    HR:12,
    SBP:15,
    DBP : 25,
    sugar :25,
    cal:12,
    HB:125,
    spo2:10,


}

]

export const Maincontextwrapper:React.FC<any> = (props) => {


const [healthdata ,sethealthdata] = useState (initialstate);

return (

    <mainContext.Provider value = {
     
       { healthdata :healthdata }
    }>

  {props.children}


    </mainContext.Provider>



)


}

export default mainContext;