# Node-Movies-Async-Await
This repository contains JavaScript files for an asynchronous movie recommender system implemented using the async/await keywords and axios for HTTP requests in Node.js. The project consists of three main files: `movies.js`, `users.js`, and `app.js`.
Usage
`movies.js`
This file exports functions related to movies, including finding movies by director, finding movies by cast member, getting the overall rating of a movie, and getting a movie by its ID.

`users.js`
This file exports functions related to users, including getting a user by ID, finding users with the same favorite genre, retrieving movies reviewed by a user, and recommending movies to a user based on their favorite genre.

`app.js`
This file is used for testing the functions exported from movies.js and users.js. It imports these functions and runs test cases to ensure they work as expected.

To run the test cases, execute app.js using Node.js:
`node app.js`

Additionally, you'll need to install the axios package using npm:
`npm install axios`

The functions provided offer various features such as retrieving movies directed by a specific director, finding movies featuring a particular cast member, calculating the overall rating of a movie, getting user details by ID, and finding users with the same favorite genre.
