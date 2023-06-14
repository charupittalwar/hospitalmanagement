import React from "react";

const Menubar: React.FC<{
    buttonarr: any;
  }> = ({ buttonarr }) => {
    const buttonContent = buttonarr.map((bt: any) => {
      return (
        <button key={bt.id} className="text-white" onClick={bt.btfun}>
          {bt.label}
        </button>
      );
    });
return (

    <div className="flex justify-between items-center bg-blue-500 p-4">

        <div className="flex space-x-4">
           

          {buttonContent}
        </div>

        <button className="text-white">Log In </button>

    </div>
)



}

export default Menubar