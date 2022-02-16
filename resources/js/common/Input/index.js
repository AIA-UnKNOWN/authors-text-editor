const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      className=""
      type={type || 'text'}
      placeholder={placeholder || ''}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;