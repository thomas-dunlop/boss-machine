# Project Name
> Boss Machine API built for the Code Academy Back-End Engineer career path. 
> The purpose of the project was to demonstrate the ability to set up routing and middleware for express.js. 

## Table of Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)

## Technologies Used
- Express.js - version 4.17.1

## Features
Broadly, the API allows the user to interact with three different sets of data in a database using common HTTP request methods and middleware:
- Minions: The API allows the user to retrieve all minions, retrieve specific minions, delete minions, add new minions, and modify minions. 
- Meetings: The API allows the user to retrieve all meetings, delete all meetings, and add new meetings. 
- Ideas: The API allows the user to retrieve all ideas, retrieve specific ideas, delete ideas, add new ideas, and modify ideas. The API also includes some middleware to ensure idea values are > $1,000,000. 

Note, I only wrote the contents of the following files. Everything is provided by code-acedemy:.
- server.js
- api.js
- minions.js
- meetings.js
- ideas.js
- checkMillionDollarIdea.js

## Project Status
Project is: _no longer being worked on_. 

## Room for Improvement
Still need to add routing and middleware for the "Work" dataset. This would allow minions to be assigned work as tasks. 


## Acknowledgements
- This project was based on [this tutorial](https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/becp-build-a-back-end-with-node-express-js/modules/fscp-api-project-boss-machine/informationals/bapi-p4-boss-machine).
