# E-Commerce Website

A full-stack e-commerce web application built with React and Node.js/Express for Assignment 3.

## 🚀 Features

### Core Features
- ✅ **Product Listing** - View all products in a responsive grid layout
- ✅ **Product Detail** - View detailed information for each product
- ✅ **Shopping Cart** - Add/remove products from cart

### Bonus Features
- ✅ **Redux State Management** - Global cart state using Redux Toolkit
- ✅ **JWT Authentication** - User login and signup functionality

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js |
| State Management | Redux Toolkit |
| Routing | React Router DOM |
| Backend | Node.js + Express |
| Authentication | JWT (jsonwebtoken) |
| API Style | REST |
| Database | In-memory (dummy data) |

## 📁 Project Structure

```
assignment-3-e-commerce-website-development/
├── backend/
│   ├── server.js           # Express server entry point
│   ├── package.json
│   ├── data/
│   │   ├── products.js     # Product dummy data
│   │   ├── cart.js         # Cart data & functions
│   │   └── users.js        # User data & functions
│   └── routes/
│       ├── productRoutes.js
│       ├── cartRoutes.js
│       └── authRoutes.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js          # Main app with routing
│   │   ├── index.js        # Entry point with Redux Provider
│   │   ├── api/            # API service functions
│   │   │   ├── productApi.js
│   │   │   ├── cartApi.js
│   │   │   └── authApi.js
│   │   ├── components/
│   │   │   └── ProductCard.js
│   │   ├── pages/
│   │   │   ├── ProductList.js
│   │   │   ├── ProductDetail.js
│   │   │   ├── Cart.js
│   │   │   └── Login.js
│   │   └── store/          # Redux store
│   │       ├── store.js
│   │       ├── cartSlice.js
│   │       └── authSlice.js
│   └── package.json
│
└── README.md
```

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd assignment-3-e-commerce-website-development
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server** (Terminal 1)
   ```bash
   cd backend
   npm start
   ```
   Server runs at: http://localhost:5000

2. **Start the frontend** (Terminal 2)
   ```bash
   cd frontend
   npm start
   ```
   App runs at: http://localhost:3000

## 🧪 Testing the Application

### Product Features
1. Open http://localhost:3000
2. Browse products on the home page
3. Click any product to view details
4. Click "Add to Cart" button

### Cart Features
1. Add products to cart from product detail page
2. Click 🛒 Cart in header to view cart
3. Remove items using "Remove" button

### Authentication Features
1. Click "Login" in header
2. Click "Sign Up" to create account
3. Login with your credentials
4. Header shows "Hi, [Name]" when logged in
5. Click "Logout" to sign out

## 👨‍💻 Author

Leshan Sanjeewa