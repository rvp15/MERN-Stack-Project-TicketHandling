run the backend : npm run server

In server: package.json:
 "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend"

    Install concurrently:
    in root folder:  npm install -D concurrently
    Include in package.json:
    "dev" : "concurrently\"npm run server\"\"npm run client\""
    To run the fronend and backend : npm run dev


    react-toastify -> used to show alerts

    Deployment:
    step 1:
    in Server.js under Routes add:
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
