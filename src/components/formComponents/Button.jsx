const Button = ({ children }) => {
  return (
    <div className="">
      <button className="rounded-sm px-2 py-1 text-xs font-semibold uppercase bg-[#bdbcbc] border border-[#838181]">
        {children}
      </button>
    </div>
  );
};

export default Button;
