# Project MERN-Movie-List
Movie list project for NORCS bootcamp

This is milestone project 2 for our Software Development Bootcamp Program. This is created by Bolatito Ayanbajo, Zachary Landry, Amanda Remo, and Connor Witmer.

For this project, we created a website called "movielist" where users are able to see the list of movies and add/delete movies to the list. This website can be used in various ways such as using the list for movies they have seen before or movies that they are planning to watch in the future, & etc.

### Setup (Technical Information)

First, you'll need a MongoDB database to connect to. Follow instructions here to setup the database and save credentials for the next step.

Next create a `.env`. It will need to contain the following environment variables (change the values for the database to match what you defined in the previous step)
```
PORT=3000
MONGO_URI=mongoDB_link
```

Next, run `npm install` to install dependencies for the API. Then run `npm start`.

Next, open a seperate terminal and `cd` into `front-end-react`, and run `npm install` to install dependencies for the React app. Then `cd` into `src` and run `nodemon`.

### API (http://localhost:3000)

| Method | Path                                 | Purpose                           |
| ------ | ------------------------------------ | --------------------------------- |
| GET    | /                                    | Home page                         |
| GET    | /:id                                 | Movie index                       |
| POST   | /                                    | Creates new movie                 |
| PUT    | /:id                                 | Update a particular movie         |
| DELETE | /:id                                 | Delete a particular movie         |

### APP 

| Path      | Component                            | Purpose                           |
| --------- | ------------------------------------ | --------------------------------- |
| /         | Home.jsx                             | Home page                         |
| /new      | NewMovie.jsx                         | Form for creating a new movie     |
| /edit/:id | Form for editing a movie             | Form for editing a movie          |


### Technologies
Dependencies: cors, dotenv, express, mongoose, nodemon

