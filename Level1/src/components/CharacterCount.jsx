import { useState } from "react";

const CharacterCount = () => {
  const [count, setCount] = useState(0);
  function handleCount(event) {
    const text = event.target.value;
    setCount(text.length);
  }
  return (
    <div>
      <div>CharacterCount</div>
      <input onChange={handleCount} type="text" placeholder="type the word" />
      <p>Total Characters: {count}</p>
    </div>
  );
};

export default CharacterCount;
