# ArgentBank

## Utilisez une API pour un compte utilisateur bancaire avec React

![Visuel du site](src/assets/img/screenshot.png)

### 📚 Présentation

Ce projet a pour objectif le développement d’une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive. <br>
Il vise à intégrer le front-end avec le back-end via des appels API. <br>
Il s'agit d'écrire des appels à l'API REST pour connecter les deux parties de l'application, assurant une communication fluide entre le client et le serveur. <br>
L'interface utilisateur responsive est développée avec React <br>
Redux permet de gérer les données de l'application afin de maintenir un état global cohérent à travers l'application. <br>
L'API est modélisée avec Swagger et les données sont stockées sur MongoDB. <br>
Ce projet possède un fichier Swagger proposant une solution pour l'intégration future de la gestion des transactions.
L'utilisateur pourra : <br>

- visualiser toutes ses transactions pour le mois en cours, groupées par compte ; <br>
- visualiser les détails d'une transaction ; <br>
- ajouter, modifier ou supprimer des informations sur une transaction. <br>

### 💡 Outils et technos

[![My Skills](https://skillicons.dev/icons?i=html,react,sass,vite,github,pnpm,redux,swagger,mongodb)](https://skillicons.dev)

### 🔨 Installation du projet

Le projet utilise NodeJS et `pnpm`<br>

➡ Cloner l'API : [Repository de l'API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)<br>
➡ Cloner le projet<br>
➡ Ouvrir le dossier dans VSCode (ou tout autre IDE)<br>
➡ Installer les node-modules : `pnpm install`<br>

### 🚀 Lancement du projet

➡ Lancer l'API : Suivre les instructions du README lié à l'API.<br>
➡ Lancer l'application : `pnpm run dev`<br>

### ⚙ Contraintes techniques

➡ Utiliser Redux pour gérer le state de l'ensemble de l'application.<br>
➡ L'authentification doit être effectuée à l'aide d'un token JWT.<br>
➡ L'utilisateur ne doit pas pouvoir accéder à la page de profil s'il n'est pas connecté.<br>
➡ L'utilisateur peut mettre à jour son prénom et/ou son nom.<br>

### 🏆 Compétences évaluées

➡ S'authentifier à une API<br>
➡ Implémenter un gestionnaire d'état dans une application React<br>
➡ Intéragir avec une API<br>
➡ Modéliser une API<br>

# English version

# ArgentBank

## Use an API for a user bank account with React

![Site screenshot](src/assets/img/screenshot.png)

### 📚 Overview

This project aims to develop a banking application using React and Redux to create a dynamic and responsive user experience. <br>
It aims to integrate the front-end with the back-end via API calls. <br>
The application writes REST API calls to connect the two parts, ensuring smooth communication between client and server. <br>
The responsive user interface is developed with React. <br>
Redux manages application data to maintain consistent global state throughout the application. <br>
The API is modeled using Swagger, and data is stored in MongoDB. <br>
Users authenticate using a JWT token. <br>
This project has a Swagger file proposing a solution for future integration of transaction management. <br>
Users will be able to:<br>

- View all their transactions for the current month, grouped by account;<br>
- View details of a transaction;<br>
- Add, modify, or delete transaction information.<br>

### 💡 Tools and Technologies

[![My Skills](https://skillicons.dev/icons?i=html,react,sass,vite,github,pnpm,redux,swagger,mongodb)](https://skillicons.dev)

### 🔨 Project Setup

The project uses NodeJS and `pnpm`.<br>

➡ Clone the API: [API Repository](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)<br>
➡ Clone the project<br>
➡ Open the folder in VSCode (or any other IDE)<br>
➡ Install node modules: `pnpm install`<br>

### 🚀 Running the Project

➡ Launch the API: Follow the instructions in the API's README.<br>
➡ Launch the application: `pnpm run dev`<br>

### ⚙ Technical Constraints

➡ Use Redux to manage the state of the entire application.<br>
➡ Authentication must be done using a JWT token.<br>
➡ Users should not be able to access the profile page if they are not logged in.<br>
➡ Users can update their first name and/or last name.<br>

### 🏆 Skills Evaluated

➡ Authenticate to an API<br>
➡ Implement a state manager in a React application<br>
➡ Interact with an API<br>
➡ Model an API<br>
