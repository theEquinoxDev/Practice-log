import { React, useState } from "react";

const PasswordStrength = () => {
    const [password, setPassword] = useState("");
    function handleChange(event) {
        let pass = event.target.value ;
        let passwordLength = pass.length;
        if(passwordLength <= 4) {
            setPassword("Weak")
        } else if(passwordLength > 4 && passwordLength < 7) {
                setPassword("Medium");
        } else {
            setPassword("Strong");
        }
    }

  return (
    <div>
      <div>PasswordStrength</div>
            <input onChange={handleChange} type="password" placeholder="Type your password" />
            <p>Strength: {password}</p>
    </div>
  );
};

export default PasswordStrength;
