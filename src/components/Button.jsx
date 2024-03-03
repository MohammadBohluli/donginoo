function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="self-center rounded-2xl bg-purple-400 px-5 py-1 transition-all hover:bg-purple-500"
    >
      {children}
    </button>
  );
}

export default Button;
