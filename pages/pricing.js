import { useState } from "react"
const Calculator = () => {
    const [textAmount , newTextAmount] = useState(0);
    const [imageAmount , newImageAmount] = useState(0);
    const [videoAmount , newVideoAmount] = useState(0);
    const textAmountInputHandler = (event) => {
      newTextAmount(event.target.value * 1.5);
    }
    const imageAmountInputHandler = (event) => {
      newImageAmount(event.target.value * 2);
    }
    const videoAmountInputHandler = (event) => {
      newVideoAmount(event.target.value * 3);
    }
    const buttonClickHandler = (event) => {
      const totalAmount = textAmount + imageAmount + videoAmount;
      return totalAmount;
    }
  return(
        <>
        <div>
          <h1 className="text-center"> Pricing </h1>
        </div>
        
        <div className="text-center">
            <h3>Enter No of Text requests : </h3>
            <input onChange={textAmountInputHandler} type="number" placeholder="Enter no of requests" min="0"/>        
            {/* <p>{textAmount}</p> */}
        <div>
          <h3>Enter No of Image requests : </h3>
          <input onChange = {imageAmountInputHandler}  type="number" placeholder="Enter no of requests" min="0"/>   
        </div>
        <div>
          <h3>Enter No of Video requests : </h3>
          <input  onChange={videoAmountInputHandler} type="number" placeholder="Enter no of requests" min="0"/>   
          {/* <p>{videoAmount}</p> */}
        </div>
        <div className="text-center">
            <button onClick={buttonClickHandler}>Total Amount : {textAmount + videoAmount + imageAmount}</button>
        </div>
        </div>
        </>
    )
}


export default Calculator;