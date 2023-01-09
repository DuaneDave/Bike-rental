function Input({ label, type, value, onChange }) {
  return (
    <div className='flex flex-column'>
      <label htmlFor={label}>{label}</label>
      <input type={type} onChange={onChange} value={value} />
    </div>
  );
}

function Select({ label, handleChange, ...rest }) {
  return (
    <div className='flex flex-column'>
      <label htmlFor={label}>{label}</label>
      <select onChange={handleChange} {...rest} />
    </div>
  );
}

export default Input;
export { Select };
