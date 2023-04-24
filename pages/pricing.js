import { useState } from "react"
const Calculator = () => {
    const [textAmount , newTextAmount] = useState(0);
    const [imageAmount , newImageAmount] = useState(0);
    const [videoAmount , newVideoAmount] = useState(0);
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
    const validateAmount = (event) => {
      if(textAmount + videoAmount + imageAmount < 100){
        alert("Total Amount should be more than 100")
      }
      else{
        alert("You are good to pay")
      }
    }
  return(
       
        <div className="flex justify-center items-center h-screen bg-cover bg-blur-lg bg-center bg-gray-300 ">
        <div className="text-center">
        
            <h3 className="text-gray-900"> Text requests :<span> <input className="text-gray-900" onChange={textAmountInputHandler} type="number" placeholder="No of requests" min="0"/></span><span>*1.5</span></h3>
           
            <br></br>
            {/* <p>{textAmount}</p> */}
        <div>
          <h3 className="text-gray-900">Image requests : <span><input className="text-gray-950" onChange = {imageAmountInputHandler}  type="number" placeholder="No of requests" min="0"/>   </span><span>*2</span> </h3>
          <br></br>
        </div>
        <div>
          <h3 className="text-gray-900">Video requests : <span><input  className="text-gray-950" onChange={videoAmountInputHandler} type="number" placeholder="No of requests" min="0"/>   </span> <span>*3</span></h3>
        <br></br>
        </div>
        <div className="text-center">
           <strong className="text-gray-900">Total Amount : INR {textAmount + videoAmount + imageAmount}</strong>
           <br></br>
           <button onClick={validateAmount} className=" m-5 border-2 border-white hover:border-black hover:bg-white hover:text-black font-bold px-2 py-2 rounded-full ">Checkout</button> 
        </div>
        </div>
        </div>
    )
}


export default Calculator;