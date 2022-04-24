interface SignInReponse {
    token: string
}

interface SignUpResponse {
    status: 0,
    message: string,
    body: {
        id: string,
        email: string
    }
}

const API_URL = 'http://localhost:3000/api/v1';

const signUp: Function = (email: string, password: string, firstName: string, lastName: string): Promise<Response> => fetch(`${API_URL}/user/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email, password: password, firstName: firstName, lastName: lastName})
});

const signIn: Function = (email: string, password: string): Promise<SignInReponse> => fetch(`${API_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
    .then(res => res.json())
    .then((response) => {
        if (response.token) {
          localStorage.setItem("user", JSON.stringify(response.token));
        }
        return response.token;
    });
;

const signOut: Function = (): void => localStorage.removeItem("user");

export default { signUp, signIn, signOut };
