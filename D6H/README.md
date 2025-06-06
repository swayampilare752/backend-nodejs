# Request Logging Middleware in Express

## 📌 Overview
This project demonstrates how to create and use custom request logging middleware in a Node.js Express app.

## 🔍 Features
- Logs request method, URL, IP, and timestamp.
- Calculates and logs response time.
- Optional: Uses `morgan` for more advanced logging.

## 📁 Files
- `index.js`: Main Express app.
- `logger.js`: Custom middleware.
- `package.json`: Project setup with dependencies.

## 🧪 Testing
Start the server and navigate to `/` or `/about`. Observe logs in terminal.

## 📚 Learnings
- Middleware chaining and `next()`
- Event handling using `res.on('finish')`
- Performance timing in Express apps
