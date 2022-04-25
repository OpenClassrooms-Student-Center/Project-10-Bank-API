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

const API_URL = 'http://localhost:3001/api/v1';

export const signUp: Function = (email: string, password: string, firstName: string, lastName: string): Promise<Response> => fetch(`${API_URL}/user/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email, password: password, firstName: firstName, lastName: lastName})
});

export const signIn: Function = (email: string, password: string): any => {
    return (
        fetch(`${API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        })
    );
};

export const signOut: Function = (): void => localStorage.removeItem("user");