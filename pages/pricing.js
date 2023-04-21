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
        <>
       
        
        <div className="text-center ">
            <h3>No of Text requests : <span> <input onChange={textAmountInputHandler} type="number" placeholder="No of requests" min="0"/></span><span>*1.5</span></h3>
           
            
            {/* <p>{textAmount}</p> */}
        <div>
          <h3>No of Image requests : <span><input onChange = {imageAmountInputHandler}  type="number" placeholder="No of requests" min="0"/>   </span><span>*2</span> </h3>
          
        </div>
        <div>
          <h3>No of Video requests : <span><input  onChange={videoAmountInputHandler} type="number" placeholder="No of requests" min="0"/>   </span> <span>*3</span></h3>
        </div>
        <div className="text-center">
          <button onClick={validateAmount} className="border-dashed border-black" >Check Amount</button>  <strong>Total Amount : {textAmount + videoAmount + imageAmount}</strong>
        </div>
        </div>
        </>
    )
}


export default Calculator;