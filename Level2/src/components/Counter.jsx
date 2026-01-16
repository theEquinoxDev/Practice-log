import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  
    function handleOnClick() {
      setCount((prev) => prev + 1);
    }
  
    return (
      <>
        <h1 className="bg-red-500">Counter</h1>
        <button onClick={handleOnClick}>Click here</button>
        <p>{count}</p>
      </>
    );
}

export default Counter