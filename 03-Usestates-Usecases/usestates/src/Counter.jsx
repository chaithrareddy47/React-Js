import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0)
    
    const handleInc = () => {
        setCount((prev) => (
            prev + 1
        ))
    }
    const handleDec = () => {
        setCount((prev) => (
            prev - 1
        ))
    }
  return (
    <div className="container">
      <div className="con">
              <h1>{ count}</h1>
        <div>
          <button className="inc" onClick={handleDec}>-</button>
          <button className="dec" onClick={handleInc}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter
