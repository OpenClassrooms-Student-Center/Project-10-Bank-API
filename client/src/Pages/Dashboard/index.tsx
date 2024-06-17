import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../userSlice.tsx';
import { RootState } from '../../store';
import ArgentBank, { ArgentBankProps } from '../../components/ArgentBank';


const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
    window.location.href = '/';
  };

  const argentBank: ArgentBankProps[] = [{
    title: 'Argent Bank Checking (x8349)',
    money: '$2,082.79',
    balance: 'Available Balance'
  }, {
    title: 'Argent Bank Savings (x6712)',
    money: '$10,928.42',
    balance: 'Available Balance'
  }, {
    title: 'Argent Bank Credit Card (x8349)',
    money: '$184.30',
    balance: 'Current Balance'
  }]

  return (
    <div className='flex flex-col items-center bg-dark-blue flex-1 text-white'>
      <div className="mb-8">
        <h1 className='text-3.5xl font-bold my-4 leading-tight'>Welcome back<br />{user.name} !</h1>
        <button className="bg-blue-green font-bold p-2.5 text-sm border-solid border-2 border-l-blue-green border-t-blue-green border-b-blue-green-border border-r-blue-green-border leading-none">Edit Name</button>
      </div>
      {argentBank.map((bank, index) => (
        <ArgentBank key={index} title={bank.title} money={bank.money} balance={bank.balance} />
      ))}
    </div>
  );
}

export default Dashboard;
