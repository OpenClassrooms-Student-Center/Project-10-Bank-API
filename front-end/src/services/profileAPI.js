import callApi from './apiClient';

/**
 * Sends a POST request to get the user's profile.
 * @param {string} token - User token for authentication.
 * @returns {Promise} - Promise representing the API call.
 * @throws {Error} - Throws an error if token is missing.
 */
export const postProfile = async (token) => {
  try {
    if (!token) {
      throw new Error('Invalid datas');
    }
    return await callApi('post', '/user/profile', {}, token);
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Sends a PUT request to update the user's first name and last name in the profile.
 * @param {Object} params - Object containing token, firstName, and lastName.
 * @param {string} params.token - User token for authentication.
 * @param {string} params.firstName - Updated first name.
 * @param {string} params.lastName - Updated last name.
 * @returns {Promise} - Promise representing the API call.
 * @throws {Error} - Throws an error if token is missing or firstName/lastName are empty.
 */
export const updateProfile = async ({ token, firstName, lastName }) => {
  try {
    if (!token) {
      throw new Error('Invalid datas');
    }
    if (!firstName || !lastName) {
      throw new Error('firstName and lastName are required');
    }
    return await callApi(
      'put',
      '/user/profile',
      { firstName, lastName },
      token
    );
  } catch (error) {
    throw new Error(error);
  }
};
