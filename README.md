# Siddi-Vinayaka-Assignment
Must to install node.js and [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) (for MongoDB Atlas connection)

## Setup 
Open your terminal (cmd, powershell, git bash)
Clone this repository by :
```
git clone https://github.com/Gaurimusmade/Siddi-Vinayaka-Assignment.git
```
Enter to the repository folder :
```
cd Siddi-Vinayaka-Assignment
```
Install all required dependencies using `npm` or you can also use` yarn`:
```
npm install or yarn install
```

**You can either Local MongoDB Setup with Mongoose.Here is database setup for MongoDB Atlas.**

## Setup Database
-Create a MongoDB Atlas account.

-Create a new cluster and set up a database user with appropriate permissions.

-In your MongoDB Atlas dashboard, go to the "Clusters" section and click on the "Connect" button for your cluster.

-Choose the connection method and copy the connection string.

-Open the .env file and replace URL with your actual connection string.

**Setup .env file** according to your local settings.(DB_HOST and DB_DATABASE for Local MongoDB Setup with Mongoose)
   ```
   PORT = 5001 // choose the port for server to run
   TOKEN_SECRET = "your secret string"
   DB_HOST = "127.0.0.1" //host name
   DB_DATABASE = "siddi-vinayaka" //database name

   ```
## How to use 
Now it's time to use API endpoints.
1. Import "Siddi-vinayaka.postman_collection.json" file to postman(find in cloned folder).
2. setup port variable in postman according to your settings.
3. start node.js server
```
node index.js
```
4. Refer below API documentation for simplicity.

### POST /api/users/register

Register a new user.

- **Method:** POST
- **Endpoint:** /api/users/register

#### Request Body

| Field     | Type     | Description                   |
|-----------|----------|-------------------------------|
| Name  | string   | User's desired Name       |
| username    | string   | User's desired username          |
| bio   | string | user's bio |
| age   | int  | user's age |
| password  | string   | User's password     |

#### Response

Upon successful registration, the API will return a response with status code 201 and the following JSON data:

```json
{
  "message": "User registration successful"
}
```
## POST /api/users/login

Authenticate and generate a JWT token for the user.

- **Method:** POST
- **Endpoint:** /api/users/login
  
#### Request Body

| Field     | Type     | Description                   |
|-----------|----------|-------------------------------|
| username     | string   | User's registered username       |
| password  | string   | User's password   |

#### Response

Upon successful login, the API will return a response with status code 200 and the following JSON data:

```json
{
  "message": "User login successful",
  "token": "jwt_token",
}
```
## GET /api/users/details

Retrieve a list of all users.

- **Method:** GET
- **Endpoint:** /api/users/details
- **Authentication required**
  
#### Response

Upon successful retrieval, the API will return a response with status code 200 and the following JSON data:

```json
[
    {
        "Name": "name",
        "username": "user_name",
        "bio": "user_bio",
        "age":  "user_age"
    }
]
```
## GET /api/users/details/:id

Retrieve a single user with id.

- **Method:** GET
- **Endpoint:** /api/users/details/:id
- **Authentication required**
  
#### Response

Upon successful retrieval, the API will return a response with status code 200 and the following JSON data:

```json

    {
        "Name": "name",
        "username": "user_name",
        "bio": "user_bio",
        "age":  "user_age"
    }

```


## PUT /api/users/update/:id

Update an existing user by id

- **Method:** PUT
- **Endpoint:** /api/users/update/:id
- **Authentication required**
  
#### Request Body

| Field     | Type     | Description                   |
|-----------|----------|-------------------------------|
| Name  | string   | Updated name              |
| username    | string   | Updated username           |
| bio   | string | Updated bio |
| age   | int  | Updated age |

#### Response

Upon successful update, the API will return a response with status code 200 and the following JSON data:

```json
{
    "message": "User updated successfully"
}
```
## DELETE /api/users/delete/:id

Delete a user by their id.

- **Method:** DELETE
- **Endpoint:** /api/users/delete/:id
- **Authentication required**
  
#### Response

Upon successful deletion, the API will return a response with status code 200 and the following JSON data:

```json
{
    "message": "User deleted successfully"
}
```
#### Thank you 
