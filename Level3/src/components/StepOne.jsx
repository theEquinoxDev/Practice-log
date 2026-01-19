export default function StepOne({ formData, setFormData }) {
  return (
    <div>
      <h2>Step One — Name</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />
    </div>
  )
}
