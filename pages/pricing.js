import { useState } from "react"
const Calculator = () => {
    const [amount , newAmount] = useState(0);
    const amountInputHandler = (event) => {
      newAmount(event.target.value * 1.5);
    }
  return(
        <>
        <div>
          <h1 className="text-center"> Pricing </h1>
        </div>
        <div className="text-center">
            <input onChange={amountInputHandler} type="number" placeholder="Enter no of requests" min="0"/>        
        </div>
        <div className="text-center">
            <p>Amount  : {amount} </p>
        </div>
        </>
    )
}


export default Calculator;