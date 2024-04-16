import { useState } from "react";
import Button from "../../components/formComponents/Button";
import Input from "../../components/formComponents/Input";
import { useDispatch } from "react-redux";
import { createCustomer } from "./CustomerSlice";

const NewCustomerForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!customerName || !nationalId) return;
    dispatch(createCustomer(customerName, nationalId));
  };
  return (
    <>
      <h2 className="font-bold text-sm capitalize mb-4">create new customer</h2>
      <form onSubmit={submitHandler} className="flex flex-col gap-2">
        <Input
          label={"Customer full name"}
          id={"name"}
          type={"text"}
          value={customerName}
          setValue={setCustomerName}
        />
        <Input
          label={"National ID"}
          id={"nationalId"}
          type={"text"}
          value={nationalId}
          setValue={setNationalId}
        />
        <Button type="submit">create new customer</Button>
      </form>
    </>
  );
};

export default NewCustomerForm;
