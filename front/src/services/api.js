// APPEL API LOGIN
export async function loginUser(email, password) {
  return fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erreur de connexion");
      }
    })
    .then((data) => {
      return data.body.token;
    })
    .catch((error) => {
      throw new Error("Une erreur s'est produite : " + error.message);
    });
}

//   APPEL API GETUSERDATA
export async function getUserProfile(token) {
  return fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.error(
          `Erreur de connexion - Statut de réponse : ${response.status}`
        );
        throw new Error("Erreur lors de la récupération des données");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Erreur lors de la requête : ${error.message}`);
      throw new Error("Une erreur s'est produite : " + error.message);
    });
}
//APPEL API POUR MODIFS
export async function editProfile(token, newFirstName, newLastName) {
  return fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: newFirstName,
      lastname: newLastName
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour du nom de l'user name");
      }
      return response.json();
    })
    .then((data) => {
      return data.body.userName;
    })
    .catch((error) => {
      throw new Error("Une erreur s'est produite : " + error.message);
    });
}
