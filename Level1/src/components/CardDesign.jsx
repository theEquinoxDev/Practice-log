import React from "react";

const CardDesign = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <div className="w-84 h-108 flex justify-center items-center border-2 rounded-2xl bg-emerald-300 ">
        <div className="">
          <div>
            <img
              src="https://lukaszadam.com/images/free-illustrations/programming.svg"
              alt="image"
              className="h-72 w-72  mb-2 rounded-2xl border "
            />
          </div>
          <div>
            <h2 className="mb-2 text-violet-700">Heading</h2>
          </div>
          <div className="mb-2 text-violet-700">This is a paragraph for the heading. </div>
          <div className="flex justify-center ">
            <button className="border rounded-2xl w-56 hover:bg-violet-500 cursor-pointer transition-all p-2">
              This is a button. 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
