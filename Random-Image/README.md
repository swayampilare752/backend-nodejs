Random Image API 🖼️
A simple backend API project built with Node.js and Express that serves random images. This project integrates with the Unsplash API to fetch high-quality random images dynamically. It’s a great practice project for backend development, API integration, and handling external services.

📌 Project Description
This API offers an endpoint to return a random image URL fetched from the Unsplash API. When a client makes a GET request, it responds with a fresh random image every time, helping you understand API routing and external API consumption in Node.js.

🎯 Objectives
Setup and initialize a Node.js + Express backend server.

Create a RESTful API endpoint to serve random images.

Integrate Unsplash API to fetch real random images.

Handle API requests asynchronously with error handling.

Test the API using Postman or similar tools.

🚀 Getting Started
🔧 Prerequisites
Node.js (v14+)

npm (Node Package Manager)

Unsplash API Access Key (you can get one from https://unsplash.com/developers)

📦 Installation

git clone https://github.com/swayampilare752/backend-nodejs.git
cd Random-Image
npm install
node index.js
Server will run at: http://localhost:8080

🔗 API Endpoints
Method	Endpoint	Description
GET	/	Welcome message
GET	/api/image/random	Returns a random image URL

🧪 Testing the API
Use Postman, Thunder Client, or open in browser:

http://localhost:8080/api/image/random

Expected Output:

Json :
{
  "imageUrl": "https://images.unsplash.com/photo-XXXXXXXXXXXX?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}
Each refresh or new request should return a different random image URL.

📁 Project Structure

random-image-api/
│
├── index.js            # Main Express server file
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
📚 Key Features
✅ Express server setup

✅ Route: /api/image/random returning random images

✅ Integration with Unsplash API using axios

✅ Asynchronous API handling with error catching

✅ Simple JSON response with image URLs

🧠 Challenges Faced
❌ Handling API rate limits and ensuring unique images on each request

⚙️ Generating truly random images by adding cache-busting parameters

📦 Successfully integrated third-party API with authentication headers

📘 Learnings
Setting up Express.js backend servers

Making HTTP requests to external APIs using axios

Handling asynchronous operations and errors gracefully

Understanding API key usage and environment variables (recommended)

Testing endpoints with Postman and similar tools

📌 Assessment Checklist
✅ Node.js project setup and initialization

✅ Express.js server with proper route definition

✅ /api/image/random endpoint implemented

✅ External API integration with Unsplash

✅ API tested successfully via Postman

✅ Complete and clear documentation provided

✅ Organized GitHub repo with README

🔗 Submission
[GitHub Repository](https://github.com/swayampilare752/backend-nodejs)
