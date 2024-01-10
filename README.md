# yeet Project

The yeet project is a simple slack-like where you can create an account, join or create chat rooms with your friends and send messages.
It uses Angular/Ionic on the front-end and NestJS/MongoDB on the back-end, the whole back-end runs inside a docker container and the front-end and back-end keep up to date using WebSockets, for the Sign-In a simple implementation of JWT was implemented on the NestJS project.

If you face any issue please Google it or pray for it to go away. :hearts:

# Start API (Back)
`cd chat-api`

`npm i`

`docker-compose up`

:warning: For the API to run smoothly please turn off any instance of MongoDB (or any server really) running on port `27017`.:warning:

The NestJS Project will run on `localhost:3000`

# Start Client (Front)
`cd chat-client`

`npm i`

`npm run start`

The Ionic Project will run on `localhost:4200`


# Not so confidential data
`MONGO_DB_URL=mongodb://chat-admin:password123@localhost/chat`

`JWT_SECRET_PASSWORD=supper-dupper-ultra-mega-giga-secret`

More secret data can be found on the `initdb.js` file
