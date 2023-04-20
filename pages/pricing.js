import React, { useState } from "react";

const Calculator = () => {
  const [number, setNumber] = useState(""); // State to hold the input number

  const handleInputChange = (event) => {
    const noOfRequest = event.target.value;
    // if(event.target.value < 10){
    //   {alert("please enter no of request more than 10")}
    // }
    setNumber(noOfRequest); // Update the state with the input number
  };
  const handleButtonClick = (event) => {
        const calculatePrice = event.target.value*1.5;
        return calculatePrice;
  }
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        min="10"
        placeholder="No. of Requests"
      />
      <h3>Amount: {}</h3> {/* Display the live multiplied result */}
      <button onClick={handleButtonClick}>Calculate</button>
    </div>
  );
};

export default Calculator;
