# HACS-OpenSource-WebSite-Backend

The backend of this site will be created using Node.js, Express.js, and MySQL on AWS.

## Quick Start Checklist

1. Node.js

   - [Download on Windows](https://blog.teamtreehouse.com/install-node-js-npm-windows)
   - [Download on Mac](https://blog.teamtreehouse.com/install-node-js-npm-mac)
   - [Download on Linux](https://blog.teamtreehouse.com/install-node-js-npm-linux)

2. Make sure yarn is installed, install Node Modules

```bash
yarn install
```

3. MySQL (Community Edition for Local Development) - [Download From Official MySQL Website]([https://www.postgresql.org/download/](https://dev.mysql.com/downloads/))

4. MySQL Clients (There are many out there, use what you prefer, here are two options)
   - All OS - [MySQL Workbench]([https://www.pgadmin.org/download/](https://dev.mysql.com/downloads/workbench/))
   - OSX - [Sequel Pro](https://www.sequelpro.com/)

## Initial Setup of Local MySQL Database

### Important: Make sure you've cloned the project & MySQL Database Server is running before proceeding

- Open your MySQL Client and create a new database called `hacs_opensource`. Leave the Database blank, we will automatically create tables in a minute.

- All Operating Systems

  - Open the project in an editor and from the `backend` directory's document root, create a file named `.env`.
  - Within `.env` paste the following - This will allow us to easily connect to our MySQL DB locally as well as later on AWS.

```text
RDS_HOSTNAME=localhost
RDS_PORT=3306
RDS_DB_NAME=hacs_opensource
RDS_USERNAME=root
RDS_PASSWORD=<YOUR MYSQL ROOT PASSWORD>
SEED_DATE=<DATE DATABASE OF SEED> // Example: 2019-02-26T01:57:21.000Z
// SEED_DATE will be explained in next section
```
- `Note:` Right now you are entering data that will allow you to develop locally, our production server will change these values dynamically in order to interact with our AWS DB instance.
- Be sure to save this file. This file is referenced by the `dotenv` Node Module, and will allow us to use Environment Variables within our Node codebase. It is included in out `.gitignore` so be sure to create your `.env` file yourself and never push it to the repository.

## How to run the project

1. Clone the repository to your local machine.
2. Setup local MySql database (see previous section.)
3. Open your Terminal or Git Bash, from the project's `backend` directory, and type the following commands.

```bash
# This installs node modules defined in package.json
yarn install

# Run Sequelize Migrations, this automatically sets up tables in our hacs_opensource database
yarn db:migrate

# (Optional) Seed hacs_opensource with dummy data from seeders directory.
yarn db:seed:all

# Start the server and application
yarn start:windev  # On Windows
# Or
yarn start:dev     # On Mac or Linux
```

4. Once the server is running, visit `localhost:3000` from your browser.

   - After running the seed command, your local database will now have dummy data instead. Add `SEED_DATE` to `.env`. It is used for the Jest.js testing framework, copy the value shown in any hacs_opensource table's `createdAt` and paste into `.env`.
  

## Running Tests

- We are currently using Jest.js for Unit, and in the future, Integration Testing. Currently there is test code written for the GET/Select related methods on our database.

```bash
# Run all tests
yarn test

# Run specific test suite
yarn test <name>
Ex: yarn test announcements
```

- Robert will add and maintain test code to allow for Test Driven Development

## Rules for Branching

In order to have a consistent flow with developer branches we need to implement a naming convention on new branches, as well as a step by step approach to merging and pull requests.

### Branch Naming Convention

```bash
developerName-feature

# Example
robert-announcement-queries
```

### Merging and Pull Requests

1. Push your branch's code to GitHub.
2. Create a new Pull Request.
3. Set the base branch to 'master' and the compare branch to your personal branch.
4. Request others to review your code.
5. After review, your code will be merged by designated Git Master.
