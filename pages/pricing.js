import React from "react";
import Backdrop from "./components/Modals/Backdrop";
import Checkout from "./components/Modals/Checkout";

import { useState } from "react"
const Calculator = () => {
    const [textAmount , newTextAmount] = useState(0);
    const [imageAmount , newImageAmount] = useState(0);
    const [videoAmount , newVideoAmount] = useState(0);
    const [modalState , setModalState] = useState(false);
    const totalAmount = textAmount + imageAmount + videoAmount;
    const textAmountInputHandler = (event) => {
      newTextAmount(event.target.value * 1.5);
    }
    const imageAmountInputHandler = (event) => {
      newImageAmount(event.target.value * 2);
    }
    const videoAmountInputHandler = (event) => {
      newVideoAmount(event.target.value * 3);
    }
    if(textAmount < 0 || imageAmount < 0 || videoAmount < 0){
      alert("Please enter a valid amount")
      newTextAmount(0);
      newImageAmount(0);
      newVideoAmount(0);
    }
    const ModalWindow = (event) => {
      if(textAmount + videoAmount + imageAmount < 100){
        alert("Total Amount should be more than 100")
      }
      else{
        setModalState(true);
      }
     setModalState(false)
     
     const GetBackHandler = () => {
      setModalState(false);
     }
      }
  return(
       
        <div className="flex justify-center items-center h-screen bg-cover bg-blur-lg bg-center bg-gray-300">
        <div className="text-center bg-white rounded-lg p-8">
        
            <h3 className="text-gray-900 font-bold mb-4 text-lg"> Text requests :<span> <input className="text-gray-900" onChange={textAmountInputHandler} type="number" placeholder="No of requests" min="0"/></span><span>*1.5</span></h3>
          <div/>
            <br></br>
            {/* <p>{textAmount}</p> */}
            {/* <h3 className="text-gray-900 font-bold mb-4 text-lg">Text requests:</h3> */}
        {/* <div className="flex justify-between mb-4">
        
          <span className="text-gray-900 ml-4 text-sm"></span>
        
        </div> */}
         <h3 className="text-gray-900 font-bold mb-4 text-lg"> Image requests :<span> <input className="text-gray-900" onChange={imageAmountInputHandler} type="number" placeholder="No of requests" min="0"/></span><span>*2</span></h3>
        
        
        <h3 className="text-gray-900 font-bold mb-4 text-lg"> Video requests :<span> <input className="text-gray-900" onChange={videoAmountInputHandler} type="number" placeholder="No of requests" min="0"/></span><span>*</span>3</h3>
        <div className="text-center">
          <div/>
          <strong className="text-gray-900 font-bold mb-4 block">
            Total Amount: INR {textAmount + videoAmount + imageAmount} </strong>
           <br></br>
           <button onClick={ModalWindow} className=" m-5 border-2 border-black text-gray-900 hover:border-gray-950 hover:bg-white hover:text-black font-bold px-2 py-2 rounded-full ">Checkout</button> 
            {modalState && (
              <Checkout totalAmount = {textAmount + videoAmount + imageAmount}/>
            )}
            {modalState && <Backdrop OnCancel= {GetBackHandler}/>}
        </div>
        </div>
        </div>
        
    )
}


export default Calculator;