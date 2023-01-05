function Input({ label, type, value, onChange }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} />
    </div>
  );
}

export default Input;