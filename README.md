# Utility Bill Management System

## 🌟 Project Overview
The **Utility Bill Management System** is a MERN stack web application that allows users to view, manage, and pay monthly utility bills such as **Electricity, Gas, Water, and Internet**. Users can securely log in, pay only current month bills, and update their payment information. The system also provides a responsive UI, search and filter functionalities, and the ability to download PDF reports of paid bills.

---

### 🚀 Live Site

- [https://utility-bills-management-system.netlify.app/]


## 🔑 Key Features

- User Authentication:
  - Email & Password login
  - Google Social Login
  - Protected private routes
- # Home Page:
  - Image slider / carousel
  - Utility category cards
  - Display recent bills dynamically from MongoDB
  - Extra informative sections (like Features & Stats)
- # Bills Page (Public):
  - 3-column grid layout
  - Filter bills by category
  - “See Details” button for each bill
- # Bill Details Page (Private):
  - View detailed bill info: Title, Category, Location, Description, Image, Amount, Date
  - Pay Bill functionality (current month only)
- # My Pay Bills Page (Private):
  - Display user’s paid bills in table format
  - Update and Delete bill records
  - Download PDF report of paid bills
  - Show total number of bills paid and total amount
- # Additional Features:
  - Dynamic page titles
  - 404 Not Found page
  - Loading spinner for API calls
  - Toast/SweetAlert for all CRUD actions
  - Responsive UI for all devices

---

## 🛠 Tech Stack

### **Frontend**
- **React (v19.x)** – UI Library  
- **Vite** – Build Tool & Development Server  
- **Tailwind CSS (v4.x) + DaisyUI** – Styling & Components  
- **Framer Motion** – Animations  
- **Swiper** – Carousel/Slider  
- **React Hot Toast / React Toastify / SweetAlert2** – Notifications & Alerts  
- **Lottie React / React Awesome Reveal / React Simple Typewriter / React Tooltip** – Animations, tooltips, typewriter effects  
- **React Router DOM (v7.x)** – Routing & Navigation  
- **React Spinners** – Loading indicators  
- **Lucide React / React Icons** – Icons  
- **Axios** – HTTP requests  
- **Firebase (v12.x)** – Authentication  

### **PDF & Reports**
- **jsPDF + jsPDF-AutoTable** – Generate & download PDF reports  

### **Backend**
- **Node.js + Express.js** – Server & API development  
- **MongoDB** – Database  
- **Cors** – Enable cross-origin requests  
- **dotenv** – Environment variable management  

### **Development Tools**
- **ESLint** – Linting  
- **@eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh** – ESLint plugins  
- **TypeScript Types** – @types/react, @types/react-dom  
- **Vite Plugin React** – React plugin for Vite  

---

## 🗄 Database Structure (MongoDB)

### Collection: `bills`
```json
{
  "title": "Frequent Power Outage in Mirpur",
  "category": "Electricity",
  "email": "creator@gmail.com",
  "location": "Mirpur-10, Dhaka",
  "description": "Power cuts occur daily in the evening.",
  "image": "https://example.com/power.jpg",
  "date": "2025-10-26",
  "amount": 260
}
```
### Collection: `myBills`:
```json 
{
  
  "username": "Mr. X",
  "phone": "017XXXXXXX",
  "address": "Dhaka",
  "email": "mrx@gmail.com",
  "amount": 260,
  "date": "2025-10-26"
}
```


Role,Name,Contact
Project Lead,[Tamim],eishatahmedtamim70@email.com
Frontend,[Tamim],
Backend,[Tamim],
UI/UX,[Tamim],



# 🌐 Deployment

-  Client-side: Netlify 
-  Authentication: Firebase
-  Server-side: Vercel

# 🛠️ Installation & Local Setup

Follow the steps below to run the **Utility Bill Management System** on your local machine.

---

# 1. Clone the Repository

```bash
git clone https://github.com/tamim127/bill-management-system-client/
````
# 2. Install Dependencies
```bash
npm install
```
# Start

npm run dev


