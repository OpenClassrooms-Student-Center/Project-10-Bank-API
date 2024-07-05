import PropTypes from 'prop-types';

/**
 * A React functional component that displays account information.
 *
 * @param {Object} props
 * @param {Object} props.account
 * @param {string} props.account.title
 * @param {number} props.account.amount
 * @param {string} props.account.amountDescription
 * @returns {JSX.Element}
 */
const Account = ({ account }) => {
  const { title, amount, amountDescription } = account;
  return (
    <section className='account'>
      <div className='account__content-wrapper'>
        <h3 className='account__title'>{title}</h3>
        <p className='account__amount'>${amount.toLocaleString('en-US')}</p>
        <p className='account__amount-description'>{amountDescription}</p>
      </div>
      <div className='account__content-wrapper cta'>
        <button className='account__transaction-button'>
          View transactions
        </button>
      </div>
    </section>
  );
};
Account.propTypes = {
  account: PropTypes.shape({
    title: PropTypes.string,
    amount: PropTypes.number,
    amountDescription: PropTypes.string,
  }).isRequired,
};
export default Account;
