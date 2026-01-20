# E-Commerce Website

A full-stack e-commerce web application built with React and Node.js/Express for Assignment 3.

## 🚀 Features

### Core Features
- ✅ **Product Listing** - View all products in a responsive grid layout
- ✅ **Product Detail** - View detailed information for each product
- ✅ **Shopping Cart** - Add/remove products from cart
- ✅ **Redux State Management** - Global cart state using Redux Toolkit
- ✅ **JWT Authentication** - User login and signup functionality

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/leshaan99/assignment-3-e-commerce-website-development.git
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
2. Click Cart in header to view cart
3. Remove items using "Remove" button

### Authentication Features
1. Click "Login" in header
2. Click "Sign Up" to create account
3. Login with your credentials
4. Header shows "Hi, [Name]" when logged in
5. Click "Logout" to sign out

## Environment Variables
- **Backend:** `.env` file required for MongoDB URI and JWT secret

## API Layer
- Frontend communicates with backend via REST API

## State Management
- Redux Toolkit is used for state management

## External Tools
- **MongoDB Atlas:** Cloud database
- **JWT:** Authentication
- **Bcrypt:** Password hashing

## 👨‍💻 Author

Leshan Sanjeewa