
# QuickBook - Room Booking App

QuickBook is a simple room booking application where users can book rooms with add-ons like breakfast, airport pickup, and extra bed. It integrates a frontend built with **React**, and a backend using **Node.js** with **MySQL** for storing bookings.

---

## 🛠️ Features

- **Frontend**:
  - Room booking UI with base price and add-ons.
  - Dynamic total calculation based on quantity and selected add-ons.
  - Modal confirmation upon booking.
  
- **Backend**:
  - Handles POST requests to save bookings.
  - Stores booking data (room, quantity, addons, total fare) in a MySQL database.

---

## 🛠️ Tech Stack

### Frontend

- **React** (Vite template)
- **Tailwind CSS**
- **Axios** (for API requests)

### Backend

- **Node.js**
- **Express**
- **MySQL**
- **dotenv** (for environment variables)
- **CORS** (Cross-Origin Resource Sharing)

---

## 🚀 Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/quickbook-app.git
cd quickbook-app
```

---

### 2. Backend Setup (Node.js + MySQL)

#### Step 1: Navigate to the `backend` folder

```bash
cd backend
```

#### Step 2: Install dependencies

```bash
npm install
```

#### Step 3: Configure MySQL Database

1. **Create a database** called `quickbook` in MySQL:

```sql
CREATE DATABASE quickbook;
```

2. **Create a table** in the `quickbook` database:

```sql
CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100),
  quantity INT,
  addons TEXT,
  total_fare DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Step 4: Configure environment variables

Create a `.env` file in the `backend` folder and add the following:

```env
PORT=3000
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=quickbook
```

#### Step 5: Start the backend server

```bash
node server.js
```

This will run the backend on `http://localhost:3000`.

---

### 3. Frontend Setup (React + Tailwind CSS)

#### Step 1: Navigate to the `frontend` folder

```bash
cd frontend
```

#### Step 2: Install dependencies

```bash
npm install
```

#### Step 3: Add the backend API URL

Create a `.env` file in the `frontend` folder and add:

```env
VITE_API_URL=http://localhost:3000/api
```

#### Step 4: Start the frontend development server

```bash
npm run dev
```

This will run the frontend on `http://localhost:5173`.

---

## ⚙️ Running Both Frontend & Backend

- **Backend** should be running at `http://localhost:3000`.
- **Frontend** should be running at `http://localhost:5173`.

---

## 🔐 Security

- Make sure to **regenerate any API keys** or **secrets** if you accidentally pushed any sensitive data to GitHub.
- **Never commit** `.env` files or any sensitive data to version control. Always add them to `.gitignore`.

---

## 📱 Deployment

1. **Frontend Deployment:**
   - Deploy to **Netlify** or **Vercel** for production.

2. **Backend Deployment:**
   - Deploy the backend to **Railway** or **Heroku**.
   - Configure the production database credentials in `.env` before deployment.

---

## 💬 Contributing

Feel free to fork the repo, submit issues, or open pull requests. Contributions are welcome!

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
