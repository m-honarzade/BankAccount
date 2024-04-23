import { useSelector } from "react-redux";

const AccountBalance = () => {
  const balance = useSelector((store) => store.account.balance);
  return <div className="bg-[#f7f7f7] p-3 font-bold "> ${balance}</div>;
};

export default AccountBalance;
