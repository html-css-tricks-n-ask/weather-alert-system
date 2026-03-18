# 🌤 Weather Alert System

A simple and professional **React-based dashboard** that displays truck details and real-time weather alerts.
Designed with a clean UI to simulate a logistics monitoring system.

---

## 🚀 Features

* 🚚 View list of trucks with driver, status, and location
* ⚠️ Display weather alerts (fog, rain, storm, etc.)
* 🎨 Clean and modern dashboard UI
* 📱 Responsive layout
* 📊 Empty state handling (no data case)

---

## 🛠 Tech Stack

* **React.js**
* **CSS (Custom Styling)**
* Optional: Ant Design (for advanced UI)

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── TruckList.js
│   ├── AlertPanel.js
│   ├── AlertCard.js
│
├── App.js
├── styles.css
└── index.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/weather-alert-system.git
```

### 2️⃣ Navigate to project

```bash
cd weather-alert-system
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run the app

```bash
npm start
```

App will run on:

```
http://localhost:3000
```

---

## 📊 Sample Data

Example truck data:

```js
const trucks = [
  { id: 1, driver: "John", status: "active", location: "Delhi" },
  { id: 2, driver: "Rahul", status: "inactive", location: "Mumbai" }
];
```

Example alerts:

```js
const alerts = [
  { id: 1, type: "warning", message: "Low visibility due to fog" },
  { id: 2, type: "error", message: "Heavy storm ahead" },
  { id: 3, type: "info", message: "Light rain expected" }
];
```

---

## 🎨 UI Highlights

* Clean card-based layout
* Status badges for trucks
* Alert indicators with colors
* Responsive grid system

---

## 🔮 Future Improvements

* 🌍 Live weather API integration
* 🗺 Map view for truck tracking
* 🔔 Real-time alert notifications
* 📈 Dashboard analytics

---

## 🙌 Author

**Bharat Solanki**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
