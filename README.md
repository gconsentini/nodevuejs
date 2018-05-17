# nodevuejs
This is a simple CRUD application running under **NodeJS**  **VueJS**  **ExpressJS** and using  **MongoDB** to store data.

In this example we are using a User model with name, email, password, date of birth, when was created and when was updated attributes.

## Requirements

* Node.js / NVM installed (https://github.com/creationix/nvm)
* MongoDB installed

[Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
[Linux - Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

Make sure that MongoDB is running under localhost(127.0.0.1) and has the port 27017 open

## Setup Development Machine
1. Clone the repo using https `git clone https://github.com/gconsentini/nodevuejs.git`

2. `cd nodevuejs`

3. Open client
```
cd client
npm install
npm run dev
```

4. Open server
```
cd server
npm install
npm start
```

5. Open `http://localhost:8080` in browser