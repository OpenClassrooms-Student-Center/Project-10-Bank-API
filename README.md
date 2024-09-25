# Project #13 - Argent Bank API

This codebase contains the code needed to run the backend for Argent Bank.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com)
- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
  Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

### Dépendances :

- [React](https://reactjs.org)
- [React-router-dom](https://reactrouter.com/): ^6.23.1
- [React-redux](https://react-redux.js.org/): ^9.1.2
- [@reduxjs/toolkit](https://redux-toolkit.js.org/): ^2.2.5

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.

## Installation :

### Installation Procedure:

Clone the repository:

- git clone https://github.com/Gizmoux/Project-10-Bank-API.git

### Installation and launching of the Back-end:

1. Go to the Argent-bank folder

   - cd Argent-bank

2. Check Node version:

   - `node --version`

3. Check MongoDB version:

   - `mongo --version`

4. Install all dependencies for the back-end:

   - `npm install` or `yarn`

5. Launch the back-end with Node 16 (nvm) and create 2 users in the database:

```bash
nvm use 16
npm run dev:server
npm run populate-db
```

## Users in database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`
- token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGZlMWI5NWU2YWE5MmEzYzExNzliMCIsImlhdCI6MTcyNzA4MzUwMCwiZXhwIjoxNzI3MTY5OTAwfQ.z8e79HaeqW_KVSWiyWlJ6KmnW5W66dmKt-JY8OCpljs
- Méthode POST sur postman : http://localhost:3001/api/v1/user/login avec le bearer token que l'on a récupéré depuis la route /login

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### Installation and launch of the front-end in a new terminal:

1. Go to the argent-bank folder:

   - cd argent-bank

2. Install all dependencies and launch the frontend:

```bash
cd argent-bank
npm run dev
```

The front-end will be launched at the URL:
`http://localhost:5173/`
