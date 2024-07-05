import { useSelector } from 'react-redux';
import Account from '../components/Account';
import Error from '../components/Error';
import Loader from '../components/Loader';
import {
  selectAccounts,
  selectAccountsStatus,
  selectAccountsError,
} from '../features/accountsSlice';

/**
 * A React functional component that displays a list of accounts.
 * @returns {JSX.Element}
 */
const Accounts = () => {
  const accounts = useSelector((state) => selectAccounts(state));
  const accountsStatus = useSelector((state) => selectAccountsStatus(state));
  const accountsError = useSelector((state) => selectAccountsError(state));

  if (accountsStatus === 'loading') {
    return <Loader />;
  }

  if (accountsStatus === 'failed') {
    return <Error errorMessage={accountsError} />;
  }

  return (
    accounts && (
      <>
        <h2 className='sr-only'>Accounts</h2>
        {accounts.map((account, index) => (
          <Account account={account} key={index} />
        ))}
      </>
    )
  );
};

export default Accounts;
