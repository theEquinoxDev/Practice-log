import React, { useState } from "react";

const ShowToggle = () => {
  const [show, setShow] = useState(false);

  function handleOnClick() {
    setShow((prevState) => !prevState);
  }

  return (
    <div>
      <div>This is for showing Toggle.</div>
      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quaerat
          architecto quas dolorum! Autem natus accusantium quam facere doloribus
          beatae. Ullam eius odio fugiat? Quas, harum rem. Autem officiis magnam
          quia, necessitatibus perferendis itaque ea alias ad aliquid minima
          tempore exercitationem corrupti suscipit aperiam tenetur repellendus
          illum nisi iusto! Nemo ab nesciunt modi incidunt neque.
        </p>
      )}
      <button onClick={handleOnClick} className="bg-red-100">
        {show ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ShowToggle;
