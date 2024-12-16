## About The Project

Polling App is a test project made with React + Vite + Tailwind + TS in frontend with three pages: a list of polls created, a form to create a new poll and a detail page for each poll. You can vote in each poll and see the results on real time since we are using web socket protocol to send events from server. The backend is made with Express using MVC pattern.

## Getting Started

### Prerequisites

To run this software locally you'll need:

- Docker installed locally

### Run the project

Clone the repo

```sh
### With HTTPS
git clone https://github.com/andres326/polls-app.git
### With SSH
git clone git@github.com:andres326/polls-app.git
```

If you have installed Docker Desktop, you should be able to run the project with the following command:

```sh
cd polls-app
docker-compose up --build
```

This will launch the frontend and backend at the same time. You can access the frontend at http://localhost:4000 and the backend at http://localhost:3000.

If you don't have Docker Desktop, you should build the images separately and run them with the following commands:

```sh
cd polling-app-frontend
docker build -t polling-app-frontend .

cd polling-app-backend
docker build -t polling-app-backend .

docker run -p 4000:4000 -e VITE_API_URI=http://localhost:3000 polling-app-frontend
docker run -p 3000:3000 polling-app-backend
```

After that, you can access the frontend at http://localhost:4000 and the backend at http://localhost:3000.

### Architecture & Design

#### How did you handle real-time updates in the backend? Why did you choose this approach?

I used a web socket connection through Socket.io library to handle real-time updates. When the user enters to the Vote page on each poll a new socket is opened. When an user submits a vote, the server sends the vote to all connected clients. The clients then update the state of the poll and re-render the page. This approach allows for real-time updates without the need for constant polling.

#### How did you structure your React components, and why?

I structured my React app using a modular approach. In folder pages, we can find a component for each page of the app. In components folder I created some components that could be re used thorough the entire app. Also I created a hooks folder to store some redundant logic that can be use in other places and maintain the code readable.

#### How does your database schema support real-time voting and result retrieval?

I have two tables in my database: polls and poll_options. The polls table store the data for each poll such as the title and description. The poll_options table stores the options for each poll, such as the option text and votes count. So, when a voted is emmited, the server updates the poll_options table with the new vote count and build up the poll to send again to the clients.

### Problem-Solving

#### What were the biggest challenges you faced during the test, and how did you address them?

Probably make the setup the backend to work with Express and Typescript, you have to build manually each configuration and search for the different options to configure. In that case, probably NestJS would have helped a lot since it has a CLI to generate the configuration files.

#### Were there any trade-offs you made due to the time constraint? What would you improve if given more time?

Probably make some tests to check the functionality of the app. Also adding authentication and security to request the API is important to secure the backend.
