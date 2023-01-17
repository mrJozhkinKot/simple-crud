# CRUD

## To install app use terminal: </br>

1. Clone repo: git clone -b develop https://github.com/mrJozhkinKot/simple-crud
2. Install packages: npm i
3. Rename file env_example to .env

## To run app: </br>

1.  Run the app in development mode: npm run start:dev</br>
2.  Run the app in production mode: npm run start:multi</br>
3.  Run tests for API: npm run test </br>

## API

- ### api/users/ </br>
  - GET - to get all users
  - POST - to add new user
- ### api/users/${userId} </br>
  - GET - to get user
  - PUT - to update user
  - DELETE - to delete user

### User's required fields: </br>

- username (string)
- age (number)
- hobbies (array of strings or empty array)
