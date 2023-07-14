import { useSelector } from 'react-redux'
import { useState } from 'react'
import { getFirstName, getLastName } from '../user/userSelectors.ts'
import { EditForm } from '../ui/EditForm.tsx'
import { AccountCard } from '../ui/AccountCard.tsx'

export const Profile = () => {
  const firstName = useSelector(getFirstName)
  const lastName = useSelector(getLastName)
  const transactions = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
    },
  ]

  const [showEditUser, setShowEditUser] = useState(false)

  return (
    <div className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {`${firstName} ${lastName}`}!
        </h1>
        {!showEditUser ? (
          <button className="edit-button" onClick={() => setShowEditUser(true)}>
            Edit Name
          </button>
        ) : (
          <EditForm setShowEditUser={setShowEditUser} />
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {transactions.map((transaction) => (
        <AccountCard transaction={transaction} key={transaction.title} />
      ))}
    </div>
  )
}
