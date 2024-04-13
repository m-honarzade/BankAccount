import { useSelector } from "react-redux";

const CustomerWelcom = () => {
  const customerName = useSelector((store) => store.customer.fullName);
  return (
    <>
      <h2 className="text-lg font-bold">🖐 welcome {customerName} </h2>
    </>
  );
};

export default CustomerWelcom;
