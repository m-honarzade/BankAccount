const Input = ({ label = "", id, type, placeholder }) => {
  return (
    <div className="flex flex-row gap-2 text-sm">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border border-[#bdbcbc] p-1"
      />
    </div>
  );
};

export default Input;
