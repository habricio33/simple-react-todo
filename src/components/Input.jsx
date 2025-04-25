function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 rounded-md border border-slate-300 outline-slate-400 px-4 py-2"    
    />
  );
}

export default Input;