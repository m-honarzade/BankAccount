import Button from "./Button";
import Input from "./Input";

const NewCustomerForm = () => {
  return (
    <>
      <h2 className="font-bold text-sm capitalize mb-4">create new customer</h2>
      <form className="flex flex-col gap-2">
        <Input label={"Customer full name"} id={"name"} type={"text"} />
        <Input label={"National ID"} id={"nationalId"} type={"text"} />
        <Button>create new customer</Button>
      </form>
    </>
  );
};

export default NewCustomerForm;
