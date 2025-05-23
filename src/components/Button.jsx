function Button({children, onClick}) {
  return (
    <button className="bg-slate-400 text-white p-2 rounded-md"
      onClick={onClick}>
      {children}
    </button>
  );
}   

export default Button;