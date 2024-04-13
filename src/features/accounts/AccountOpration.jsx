import Button from "../../components/formComponents/Button";
import Input from "../../components/formComponents/Input";

const AccountOpration = () => {
  return (
    <>
      <h2 className="font-bold text-sm capitalize mb-4">
        your account opration
      </h2>
      <form className="flex flex-col gap-2">
        <div className="flex flex-row gap-1">
          <Input label={"Deposit"} id={"Deposit"} type={"number"} />
          <select
            // value={currency}
            // onChange={(e) => setCurrency(e.target.value)}
            className="border border-[#bdbcbc] text-sm"
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <Button>deposit</Button>
        </div>
        <div className="flex flex-row gap-1">
          <Input label={"Withdraw"} id={"Withdraw"} type={"number"} />

          <Button>Withdraw</Button>
        </div>
        <div className="flex flex-row gap-1">
          <Input
            label={"Request Loan"}
            id={"RequestLoan"}
            type={"number"}
            placeholder="amount"
            className="placeholder-black placeholder-opacity-100"
          />
          <Input id="RequestLoan" type="text" placeholder="Loan purpose" />

          <Button>Withdraw</Button>
        </div>
        {/* <Input label={"National ID"} id={"nationalId"} type={"text"} /> */}
        <Button>Pay loan</Button>
      </form>
    </>
  );
};

export default AccountOpration;
