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

- As of now we are not automating the creation of our Database. I have provided a SQL Scripts that will create a new database, and set up the tables needed for the project in `database_setup.sql`. Open your MySQL Client and find how to run SQL Queries, copy the code from `database_setup.sql` and execute the command

- All Operating Systems

  - Open the project in an editor and from the `backend` directory's document root, create a file named `.env`.
  - Within `.env` paste the following - This will allow us to easily connect to our MySQL DB locally as well as later on AWS.
  ```
  RDS_HOSTNAME=localhost
  RDS_PORT=3306
  RDS_DB_NAME=hacs_opensource
  RDS_USERNAME=root
  RDS_PASSWORD=<YOUR MYSQL ROOT PASSWORD>
  ```
  - Note: Right now you are entering data that will allow you to develop locally, our production server will change these values dynamically in order to interact with our AWS DB instance.
  - Be sure to save this file. This file is referenced by the `dotenv` Node Module, and will allow us to use Environment Variables within our Node codebase. It is included in out `.gitignore` so be sure to create your `.env` file yourself and never push it to the repository.

## How to run the project

1. Clone the repository to your local machine.
2. Setup local MySql database (see previous section.)
3. Open your Terminal or Git Bash, from the project's `backend` directory, and type the following commands.

   ```bash
   # This installs node modules defined in package.json
   yarn install

   # Start the server and application
   yarn start:windev  # On Windows
   # Or
   yarn start:dev     # On Mac or Linux
   ```

4. Once the server is running, visit `localhost:3000` from your browser.

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
