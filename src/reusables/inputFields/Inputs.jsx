function Input({ label, type, value, onChange }) {
  return (
    <div className='flex flex-column'>
      <label htmlFor={label}>{label}</label>
      <input type={type} onChange={onChange} value={value} />
    </div>
  );
}

export default Input;
