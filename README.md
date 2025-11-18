🛒 Full-Stack E-Commerce Website

React + Node.js + MongoDB

🚀 How to Run the Project (For Team Members)

After cloning the repo:

1️⃣ Setup Backend (Node.js + MongoDB)

Go to backend:

cd backend
npm install


Copy environment example:

cp .env.example .env


Edit .env and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=any_secret_key


Now start backend:

npm run dev


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
✔ If CORS error appears, backend already supports: