🛒 Full-Stack E-Commerce Website

React + Node.js + MongoDB

🚀 How to Run the Project (For Team Members)

If you're opening from .zip file:

1. Install Node.js and add to system path. In terminal, run node --v to verify.
2. Move to web-dev-project folder and run: npm install
3. cd server && node index.js
4. In another terminal, cd client && npm start

After cloning the repo:

Install node.js

1️⃣ Setup Backend (Node.js + MongoDB)

Go to backend:

cd server
npm install

Copy environment example:

cp .env.example .env

Edit .env and add:

MONGO_URI=mongodb+srv://umeshvishwakarma9541_db_user:KAdaH5yf6LYoK1GS@cluster0.g9rmecr.mongodb.net/?appName=Cluster0
JWT_SECRET=mySuperSecretKey
PORT=5000

Now start backend:

node index.js

Backend will run on:

http://localhost:5000

2️⃣ Setup Frontend (React)

Open new terminal:

cd client
npm install
npm start

Frontend runs on:

http://localhost:3000

3️⃣ Important Notes

✔ Both frontend and backend must run
✔ .env is not pushed to GitHub — everyone creates their own
✔ Use MongoDB Atlas or local MongoDB