export default function StepThree({ formData, setFormData }) {
  return (
    <div>
      <h2>Step Three — Password</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />
    </div>
  )
}
