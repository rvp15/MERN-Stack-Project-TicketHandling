# Sudiksha Villas -Apartment
Tenant Service Request Handling  

>The Project Description

 This project mainly focus on developing Full MERN Stack Project. I have Implemented the project for Sudiksha Villas Apartments, Who are new to the business and needed a website especially to track their tenants  and their requests for service.


>Technology Implemented

The website is developed with (MERN)
- NodeJS
- Mongoose, MongoDB
- Express
- ReactJS
- Redux
- BootStrap
- CSS
- Used Browser Local Storage

>Basic Requirement:

- Implement Authentication and Authorization by creating Register and login

- Implement CURD Operation

>Challenges: 

- Pushing the updates of tenants ticket submit request without updating original request by adding new request in an array.

- Linking User and Ticket Model to link user and his tickets.

- Updates reflecting after a refresh.

 >Future Implementation

- Add more Functionality and fix bugs for practical implementation of my project.

>Inspiration:

- When I started Learning Service Now (Self Study). I tired to develop the ticket handling project but 
I cant even complete 10% of my project because of lack of resource and knowledge. So I wanted to develop to fullfill my wish in this project. With all the knowledge I gained from this course I believe if not 100% i was able to implement to some extend.

>Takeway from Project:
 
- Gained knowledge about Authentication and Authorization.
- How the front end communicats with backend and work flow of the communication process. 


>Installation and Deployment

Deployement Steps:
Step 1:
// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}
step 2: Change NODE_ENV = production in .env file
step 3: go to frontend folder and : npm run build,
it will create a production build in build folder,Now the application will run at Localhost:5000
step 4:  Change NODE_ENV = development in .env file, stop server

step 5: create a Heroku account
step 6: Install Heroku cli to your local machine ,https://devcenter.heroku.com/articles/heroku-cli

step 7:In command Prompt(dont use vs code terminal ) type command: heroku login
it opens a browser window to login

STEP 8: go to the folder dir and create heroku.
command: heroku create (uniquename)
it will create a link :https://mernprojectpriya.herokuapp.com/ | https://git.heroku.com/mernprojectpriya.git.
Now you the see your app in Heroku dashboard

step 9: we need to have .env file datas.To set it 
Herokuapp->settings->Reveal Config Vars-> add all datas here

step 10:  "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend" add in package.json in server

step 11: git:heroku git:remote -a mernprojectpriya
