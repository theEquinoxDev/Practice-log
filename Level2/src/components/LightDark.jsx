import { useState } from "react";

export default function LightDark() {
  const [isDark, setIsDark] = useState(false);
  function handleOnClick() {
    setIsDark(!isDark);
  }
  return (
    <div className={isDark ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <div>This is a theme toggle component</div>
      <button onClick={handleOnClick}>Click to toggle!</button>
    </div>
  );
}
