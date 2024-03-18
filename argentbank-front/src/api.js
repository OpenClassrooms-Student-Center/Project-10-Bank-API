const API_URL = "http://localhost:3001/api/v1/user/";

async function client(endpoint, method, body) {
  const config = {
    method: method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);
  const data = await response.json();
  if (response.ok) console.log(data);
  else return Promise.reject(data);
}

// console.log(result);
// if (result.status===200) return {
//   status: result.status,
//   token: `Bearer ${result.body.token}`,
// }
// const body = {
//   email: "tony@stark.com",
//   password: "password123",
// };

// client("login", "POST", body);

export { client };
