const Button = ({ children, clickHandler, type }) => {
  return (
    <div className="">
      <button
        type={type}
        onClick={clickHandler}
        className="rounded-sm px-2 py-1 text-xs font-semibold uppercase bg-[#bdbcbc] border border-[#838181]"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
