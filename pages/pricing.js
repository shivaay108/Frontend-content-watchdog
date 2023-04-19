import React, { useState } from "react";

const LiveMultiplier = () => {
  const [number, setNumber] = useState(""); // State to hold the input number

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNumber(value); // Update the state with the input number
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
      />
      <h3>Result: {number * 2}</h3> {/* Display the live multiplied result */}
    </div>
  );
};

export default LiveMultiplier;
