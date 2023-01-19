function Input({ label, type, value, onChange }) {
  return (
    <div className="flex flex-column">
      <label htmlFor={label}>{label}</label>
      <input type={type} onChange={onChange} value={value} />
    </div>
  );
}

function Select({ label, handleChange, ...rest }) {
  return (
    <div className="flex flex-column">
      <label htmlFor={label}>{label}</label>
      <select onChange={handleChange}>
        <option>
          {rest.payload
            ? `${rest.payload.id}.${rest.payload.name} ${rest.payload.brand}`
            : "Select a bike"}
        </option>
        {rest.children}
      </select>
    </div>
  );
}

export default Input;
export { Select };
