import Container from "./components/Container";
import Header from "./components/Header";
import NewCustomerForm from "./features/customers/NewCustomerForm";
import AccountOpration from "./features/accounts/AccountOpration";
import CustomerWelcom from "./features/customers/CustomerWelcom";
import { useSelector } from "react-redux";

function App() {
  const customer = useSelector((store) => store.customer.fullName);
  return (
    <>
      <Header />
      {!customer && (
        <Container>
          <NewCustomerForm />
        </Container>
      )}
      <CustomerWelcom customerName={"ali"} />
      <Container>
        <AccountOpration />
      </Container>
    </>
  );
}

export default App;
