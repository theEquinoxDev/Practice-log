import { useState } from "react";

const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "What is state?",
    answer: "State is data that changes over time in a component."
  },
  {
    question: "What is useEffect?",
    answer: "useEffect lets you run side effects in React components."
  }
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  function handleClick(index) {
    if (openIndex === index) {
      setOpenIndex(null); // close if already open
    } else {
      setOpenIndex(index); // open clicked one
    }
  }

  return (
    <div>
      <h2>FAQ</h2>

      {faqs.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => handleClick(index)}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {item.question}
          </div>

          {openIndex === index && (
            <p>{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
