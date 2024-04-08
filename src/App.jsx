import Container from "./components/Container";
import Header from "./components/Header";
import UserAccount from "./components/userAccount/UserAccount";
import NewCustomerForm from "./components/formComponents/NewCustomerForm";
import AccountOpration from "./components/formComponents/AccountOpration";

function App() {
  return (
    <>
      <Header />
      <Container>
        <NewCustomerForm />
      </Container>
      <UserAccount customerName={"ali"} />
      <Container>
        <AccountOpration />
      </Container>
    </>
  );
}

export default App;
