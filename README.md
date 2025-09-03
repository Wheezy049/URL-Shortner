# 🔗 Node.js URL Shortener

This project is a simple URL shortening service built with Node.js, Express, and MongoDB. It allows users to shorten long URLs into short, shareable links and redirect to the original URLs.

## 🚀 Features

- ✅ Shorten long URLs to short, unique links

- ✅ Redirect short URLs to original URLs

- ✅ Track click counts for each URL (optional)

- ✅ In-memory storage for quick testing (before connecting MongoDB)

- ✅ MongoDB integration for persistent storage

- ✅ Simple HTML frontend for testing

## 🛠 Tech Stack

- Node.js

- Express.js

- MongoDB (via Mongoose)

- nanoid for generating unique short IDs

- fetch for frontend testing

## 🧪 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Wheezy049/URL-Shortner
cd Url-Shortner

```

## Install Dependencies
```bash
npm install
```

## Create a .env file in the root directory and add:
```bash
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

## Start server
```bash
npm run dev   # using nodemon for development
# or
npm start     # for production
```

## ⚡ How It Works

### Shortening a URL

- User sends a POST request to /api/url/shorten with the original URL.

- Server generates a short ID using nanoid.

- The short URL is returned (e.g., http://localhost:8000/MbSr_y).

- Data is stored in MongoDB for persistence.

### Redirecting

- User visits the short URL (e.g., http://localhost:8000/MbSr_y).

- Server looks up the short ID in the database.

- Server redirects the user to the original URL.


### Frontend Testing

- A simple HTML form (public/index.html) allows you to enter a URL and receive a shortened link immediately.

- No frontend framework is required for testing.


✍️ Author
Dev_faruq
