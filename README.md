# NeonDomain_Test

This project was developed using JavaScript with Express.js.

## Setup Instructions

To successfully run the project:

1. Ensure you have a MySQL database configured with the following parameters:
   - **Port:** 3306
   - **Database Name:** neondomain_db_js
   - **Username:** admin
   - **Password:** admin

2. Run the following CLI commands in the project directory terminal:
   - `npx sequelize-cli db:migrate`: Generates the database tables.

3. Start the project by running:
   - `npm run start`

## Endpoints for Functionality

- Access the Postman collection for the NeonDomain API [here](https://www.postman.com/axelbon/workspace/axel-s-public-workspace).
  - **All requests are organized in the folder 'Javascript NeonDomain'.**

### User Functionality

#### Retrieving Users

- **GET** `localhost:3000/user`: Fetches the list of users.
- **GET** `localhost:3000/user/ID`: Retrieves details of a specific user by their ID.

#### Managing Users

- **POST** `localhost:3000/user`: Adds a new user.
  - **Request Body:** 
    ```json
    {
        "firstname": "string",
        "lastname": "string",
        "age": "number",
        "username": "string",
        "password": "string"
    }
    ```
- **PUT** `localhost:3000/user/ID`: Updates a user by their ID.
  - **Request Body:** 
    ```json
    {
        "firstname": "string",
        "lastname": "string",
        "age": "number",
        "username": "string",
        "password": "string"
    }
    ```
- **DELETE** `localhost:3000/user/ID`: Deletes a user based on their ID.
  - **Note:** Attempting to delete a user linked to a summary in the `posted_by` attribute will result in an error.

### Summaries Functionality

#### Managing Summaries

- **GET** `localhost:3000/summary`: Fetches the list of summaries.
- **GET** `localhost:3000/summary/ID`: Retrieves details of a specific summary by its ID.
- **POST** `localhost:3000/summary`: Adds a new summary.
  - **Request Body:** 
    ```json
    {
        "idea_summary": "string",
        "posted_by": "uuid"
    }
    ```
- **PUT** `localhost:3000/summary/ID`: Updates a summary by its ID.
  - **Request Body:** 
    ```json
    {
        "idea_summary": "string",
        "posted_by": "uuid"
    }
    ```
- **DELETE** `localhost:3000/summary/ID`: Deletes a summary based on its ID.

## Important Notes

- User-related endpoints manage user profiles with `firstname`, `lastname`, `age`, `username`, and `password` attributes.
- Attempting to delete a user associated with a summary in the `posted_by` attribute will not be allowed and will return an error.
