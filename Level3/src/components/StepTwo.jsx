export default function StepTwo({ formData, setFormData }) {
  return (
    <div>
      <h2>Step Two — Email</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
    </div>
  )
}
