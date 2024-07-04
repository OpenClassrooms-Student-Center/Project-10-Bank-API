import axios from 'axios';

/**
 * Function to fetch user accounts data from a local JSON file.
 * @param {string} userId - The ID of the user whose accounts are to be fetched
 * @returns {Promise<Object>} - Promise resolving to an array of user accounts
 * @throws {Error} - Throws an error if accounts data is not found or if user accounts are not found
 */
export const fetchUserAccounts = async (userId) => {
  try {
    const res = await axios.get(window.location.origin + '/accounts.json');
    const datas = res.data;

    if (!datas) {
      throw new Error('Accounts not found');
    }

    const filteredAccountsById = datas.find(
      (userAccounts) => userAccounts.userId === userId
    );

    if (!filteredAccountsById) {
      throw new Error(`Accounts for user not found`);
    }

    return { body: filteredAccountsById.accounts };
  } catch (error) {
    throw new Error(error);
  }
};
