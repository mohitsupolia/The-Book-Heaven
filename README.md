# The Book Haven - A Full-Stack Bookstore
### Welcome to Book Haven, a full-stack e-commerce application built using the MERN stack, featuring a payment integration gateway. This platform allows users to buy and sell books seamlessly, offering a rich and user-friendly experience.

## Table of Contents
* Features
* Tech Stack
* Installation
* Usage
* Screenshots
* Contributing
* License

## Features
* `User Authentication:` Secure login and registration for buyers and sellers.
* `Product Listings:` Browse a wide range of books with detailed descriptions.
* `Search and Filter:` Easily search for books by category.
* `Add to Cart:` Users can add books to their cart for a streamlined checkout process.
* `Order Management:` Buyers can view and manage their orders.
* `Payment Integration:` Secure payments using Razorpay.
* `Seller Dashboard:` Sellers can list, edit, and manage their books.
* `Reviews and Ratings:` Users can leave feedback on books to help others make informed choices.

## Tech Stack
* `Frontend:` React, Redux, Tailwind CSS
* `Backend:` Node.js, Express
* `Database:` MongoDB, Mongoose
* `Payment Gateway:` Razorpay

## Installation
### To get started with Book Haven, follow these steps:
### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/book-haven.git
cd book-haven
```
### 2. Navigate to the backend folder and install dependencies:
```bash
cd server
npm install
```
### 3. Create a `.env` file and add your environment variables:
```bash
DB_URI=your_mongo_db_uri
RAZORPAY_ID=your_razorpay_id
RAZORPAY_SECRET_KEY=your_razorpay_secret_key
PORT=8080
```
### 4. Start the backend server:
```bash
npm start
```
### 5. Navigate to the frontend folder and install dependencies:
```bash
cd client
npm install
```
### 6. Start the frontend application:
```bash
npm run dev
```
## Usage
* Visit the homepage to browse the latest books.
* Register or log in to your account to access full features.
* Sellers can list their books through the dashboard.
* Buyers can search for books, add them to their cart, and proceed to checkout.

## Screenshots
![add page](https://github.com/mohitsupolia/The-Book-Heaven/blob/master/Home-banner.png)

![add page](https://github.com/mohitsupolia/The-Book-Heaven/blob/master/BestSeller.png)

![add page](https://github.com/mohitsupolia/The-Book-Heaven/blob/master/Favorite-books.png)

![add page](https://github.com/mohitsupolia/The-Book-Heaven/blob/master/Award-books.png)

![add page](https://github.com/mohitsupolia/The-Book-Heaven/blob/master/Curstomer-books.png)

![add page](https://github.com/mohitsupolia/The-Book-Heaven/blob/master/Seller-dashboard.png)

![add page](https://github.com/mohitsupolia/The-Book-Heaven/blob/master/login-books.png)

![add page](https://github.com/mohitsupolia/The-Book-Heaven/blob/master/Payment-books.png)

![add page](https://github.com/mohitsupolia/The-Book-Heaven/blob/master/Successful-payment-books.png)

![add page](https://github.com/mohitsupolia/The-Book-Heaven/blob/master/Book-order-placed.png)

## Contributing
Contributions are welcome! Please follow these steps to contribute:
### 1. Fork the repository.
### 2. Create a new branch (`git checkout -b feature/YourFeature`).
### 3. Make your changes and commit them (`git commit -m 'Add some feature'`).
### 4. Push to the branch (`git push origin feature/YourFeature`).
### 5. Open a pull request.

## License
### This project is licensed under the MIT License.
