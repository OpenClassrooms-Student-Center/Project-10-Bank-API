/**
 * Generates a random ID based on the current timestamp and a random number.
 * @returns {string} The generated random ID.
 */
export const createRandomId = () => {
  const date = new Date();
  const random = Math.random();
  return `${date.getTime()}_${random}`;
};
