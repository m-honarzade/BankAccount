import AccountBalance from "../features/accounts/AccountBalance";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex flow-row justify-between items-center mb-4">
      <Logo />
      <AccountBalance />
    </div>
  );
};

export default Header;
