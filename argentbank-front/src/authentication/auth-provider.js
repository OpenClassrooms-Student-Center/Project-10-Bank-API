const API_URL = "http://localhost:3001/api/v1/user/";

function getToken() {
  return localStorage.getItem("argentBank-token");
}

function setToken(token) {
  localStorage.setItem("argentBank-token", token);
}

async function logout() {
  localStorage.removeItem("argentBank-token");
}

async function login({ email, password }) {
  const data = await client("login", "POST", { email, password });
  const result = {
    token: data.body.token,
  };
  return result;
}

async function profile(token) {
  const result = await client(
    "profile",
    "POST",
    {},
    {
      Authorization: `Bearer ${token}`,
    }
  );
  return {
    user: result.body.firstName,
  };
}

async function client(endpoint, method, body, headers) {
  const config = {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
  };

  console.log(config);

  const response = await fetch(`${API_URL}${endpoint}`, config);
  // console.log(response);
  const data = await response.json();
  if (response.ok) return data;
  else return Promise.reject(data);
}

export { login, profile, logout, setToken, getToken };

// login({
//   email: "tony@stark.com",
//   password: "password123",
// });
// });

// profile(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjJkODI4M2Y1OGFkNGVkYzBjZTExNSIsImlhdCI6MTcxMDc2Njk5OCwiZXhwIjoxNzEwODUzMzk4fQ.1JHH-jdHip98HLW5_JtxptmlF_MyH2iDCkrArpCrb2Q"
// );
