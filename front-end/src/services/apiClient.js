import axios from 'axios';

// Create an Axios instance with a base URL for the API
const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
});

/**
 * Function to make an API call using Axios.
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {string} url - Relative URL for the API endpoint
 * @param {object} data - Optional data to send with the request (for POST, PUT requests)
 * @param {string} token - Optional authentication token for Authorization header
 * @returns {Promise<object>} - Promise resolving to response data from the API
 * @throws {Error} - Throws an error if the API call fails
 */
const callApi = async (method, url, data, token) => {
  const headers = {};

  // Add Authorization header if token is provided
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await apiClient({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error calling ${method} ${url}:`, error);
  }
};

export default callApi;
