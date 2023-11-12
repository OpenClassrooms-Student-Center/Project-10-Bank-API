# Project #10 - Argent Bank API

This codebase contains the code needed to run the backend for Argent Bank.

## Getting Started

## Prerequisites

For the dockerized version of Argent Bank, you only need to have Docker installed:

- [Docker](https://www.docker.com/get-started)

Please make sure you have Docker installed and running on your machine. You can verify this by using the following command in your terminal:

```bash
# Check Docker version
docker --version
```

### Instructions

1. Fork this repo.
2. Clone the repo onto your computer.
3. Open a terminal window in the cloned project directory.
4. Run the following commands:

```bash
# Build and start the application and database using Docker
docker-compose up --build -d
```

The application will be available on http://localhost:3001 after the build completes.

The database will be populated automatically.

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.
