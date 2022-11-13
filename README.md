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