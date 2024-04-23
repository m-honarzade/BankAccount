import { useState } from "react";
import Button from "../../components/formComponents/Button";
import Input from "../../components/formComponents/Input";
import { deposit, payLoan, requestLoan, withdraw } from "./AccountSlice";
import { useDispatch, useSelector } from "react-redux";

const AccountOpration = () => {
  const [depositValue, setDepositValue] = useState("");
  const [withdrawValue, setWithdrawValue] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [loanAmout, setLoanAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const account = useSelector((store) => store.account);
  const { balance, loan, CurrentLoanPurpose, isLoading } = account;
  const dispatch = useDispatch();
  // const depo = depositValue;

  // console.log(depo);

  function depositHandler(depositValue) {
    if (!depositValue) return;
    dispatch(deposit(depositValue, currency));
    setDepositValue("");
    setCurrency("");
  }
  const withdrawHandler = (withdrawValue) => {
    if (!withdrawValue) return;

    dispatch(withdraw(withdrawValue));
    setWithdrawValue("");
  };
  const requestLoanHandler = (loanPurpose, loanAmout) => {
    if (!loanAmout || !loanPurpose) return;
    dispatch(requestLoan(loanPurpose, loanAmout));
    setLoanPurpose("");
    setLoanAmount("");
  };
  const payLoanHandler = () => {
    dispatch(payLoan);
  };
  console.log(account);

  return (
    <>
      <h2 className="font-bold text-sm capitalize mb-4">
        your account opration
      </h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-1">
          <div className="flex flex-row gap-2 text-sm">
            <label htmlFor="deposit">deposit</label>
            <input
              type="number"
              id="deposit"
              value={depositValue}
              onChange={(e) => {
                setDepositValue(+e.target.value);
              }}
              className="border border-[#bdbcbc] p-1"
            />
          </div>
          <select
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
            className="border border-[#bdbcbc] text-sm"
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button
            disabled={isLoading}
            onClick={depositHandler}
            className="rounded-sm px-2 py-1 text-xs font-semibold uppercase bg-[#bdbcbc] border border-[#838181]"
          >
            {isLoading ? "Converting..." : `Deposing ${depositValue}`}
          </button>
        </div>
        <div className="flex flex-row gap-1">
          <div className="flex flex-row gap-2 text-sm">
            <label htmlFor="withdraw">withdraw</label>
            <input
              type="number"
              id="withdraw"
              value={withdrawValue}
              onChange={(e) => setWithdrawValue(e)}
              className="border border-[#bdbcbc] p-1"
            />
          </div>

          <Button clickHandler={withdrawHandler}>Withdraw</Button>
        </div>
        <div className="flex flex-row gap-1">
          <Input
            label={"Request Loan"}
            id={"RequestLoanAmount"}
            value={loanPurpose}
            setValue={setLoanPurpose}
            type={"number"}
            placeholder="amount"
            className="placeholder-black placeholder-opacity-100"
          />
          <Input
            id="RequestLoanPurpose"
            type="text"
            value={loanAmout}
            setValue={setLoanAmount}
            placeholder="Loan purpose"
          />

          <Button clickHandler={requestLoanHandler}>request Loan</Button>
        </div>
        {/* <Input label={"National ID"} id={"nationalId"} type={"text"} /> */}
        <Button clickHandler={payLoanHandler}>Pay loan</Button>
      </div>
    </>
  );
};

export default AccountOpration;
