import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function next() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  function back() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && <StepOne formData={formData} setFormData={setFormData} />}

      {step === 2 && <StepTwo formData={formData} setFormData={setFormData} />}

      {step === 3 && (
        <StepThree formData={formData} setFormData={setFormData} />
      )}

      <div style={{ marginTop: "20px" }}>
        {step > 1 && (
          <button type="button" onClick={back}>
            Back
          </button>
        )}

        {step < 3 && (
          <button type="button" onClick={next}>
            Next
          </button>
        )}

        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
}
