😂 Random Jokes API
A simple and fun backend API project built with Node.js and Express, designed to serve random jokes. This project fetches jokes from a public API and includes a local fallback mechanism. It’s great for practicing API development and error handling.

📌 Project Description
This API offers an endpoint to return a random joke, either from an external joke service or a local fallback array if the external call fails. It’s part of an assignment focused on expanding backend development skills with Node.js.

🎯 Objectives
Build and extend a Node.js + Express server.

Create a RESTful API to serve random jokes.

Fetch external data using axios with proper error handling.

Handle API failures gracefully using a local joke array.

Test endpoints using Postman or similar tools.

🚀 Getting Started
🔧 Prerequisites
Node.js (v14+)

npm (Node Package Manager)

📦 Installation

git clone https://github.com/swayampilare752/backend-nodejs.git
cd Joke
npm install
node index.js
Server will run at: http://localhost:8080

🔗 API Endpoints
Method	Endpoint	Description
GET	/	Welcome message
GET	/api/jokes/random	Returns a random joke (external or local fallback)

🧪 Testing the API
Use Postman, Thunder Client, or url:

url :- http://localhost:8080/api/jokes/random
Expected Output:

json
{
  "setup": "Why don't programmers prefer dark mode?",
  "punchline": "Because the light attracts bugs."
}
If external API is working, it will return a different joke from Official Joke API.

📁 Project Structure

random-jokes-api/
│
├── index.js            # Main Express server
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
📚 Key Features
✅ Express server setup

✅ Route: /api/jokes/random

✅ axios integration for external joke fetching

✅ Graceful fallback to local jokes

✅ Proper error handling with middleware

🧠 Challenges Faced
❌ External API occasionally times out — handled using try/catch.

⚙️ Decided to implement local joke fallback to ensure reliability.

📦 Installed and tested axios to fetch third-party data cleanly.

📘 Learnings
Handling async API calls using axios.

Implementing fallback logic in APIs.

Structuring a basic Node.js project with Express.

Testing APIs using tools like Postman.

📌 Assessment Checklist
✅ Node.js project created/extended
✅ /api/jokes/random endpoint added
✅ External API integration using axios
✅ Local fallback mechanism for jokes
✅ Tested with Postman
✅ Full documentation included
✅ GitHub repo with proper structure and README ✅

🔗 Submission
[GitHub Repository](https://github.com/swayampilare752/backend-nodejs/tree/main/Joke)
