# 🌍 CholoGhuri.com – Tour Booking Web Application (Frontend)

## 📖 Project Overview

**CholoGhuri.com** is a modern, responsive **tour booking web application** where users can **browse, explore, and book tours** seamlessly.
It provides a smooth UI/UX for exploring destinations, viewing detailed tour plans, selecting guests, calculating costs dynamically, and completing bookings with payment integration.

The frontend is built with **React, Redux Toolkit, and TailwindCSS**, and communicates with the backend API for dynamic data handling.

🔗 **Live Demo**: [chologhuri-com.netlify.app](https://chologhuri-com.netlify.app/)

---

## ✨ Features

* 🏞 **Tour Listing & Search** – Browse tours with images, titles, and locations. Includes search, sorting, and pagination.
* 📋 **Tour Details Page** – Full details with itinerary, amenities, inclusions/exclusions, and guest limits.
* 🎫 **Booking System** – Select guest count, calculate total cost in real-time, and submit bookings.
* 💳 **Payment Integration** – Redirects to confirmation with transaction details.
* 📱 **Responsive UI** – Optimized for mobile, tablet, and desktop.
* ⚡ **Dynamic State & Data Fetching** – Managed with Redux Toolkit & RTK Query.
* 🚨 **Error & Loading Handling** – User-friendly messages for loading, errors, or missing data.

---

## 🛠️ Tech Stack

**Frontend Framework**: React (with Hooks)
**State Management**: Redux Toolkit + RTK Query
**Routing**: React Router v7
**Styling**: TailwindCSS + Custom Components
**UI Enhancements**: Radix UI, Framer Motion, React Icons, Lucide React
**Forms & Validation**: React Hook Form + Zod
**Utilities**: Axios, Date-fns, SweetAlert2, React Toastify, Sonner

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/istiak19/CholoGhuri.com-frontend.git
   cd CholoGhuri.com-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**

   ```bash
   npm run preview
   ```

---

## 📂 Project Structure (key folders)

```
CholoGhuri.com-frontend/
│── src/
│   ├── components/    # Reusable UI components
│   ├── features/      # Redux slices & API logic
│   ├── pages/         # Page-level components (Tours, Booking, etc.)
│   ├── routes/        # App routing setup
│   ├── styles/        # Tailwind and custom styles
│   └── utils/         # Helper functions & constants
│── public/            # Static assets
│── package.json
│── vite.config.ts
```

---

## 🔧 Configuration

* **Backend API URL**: Update API base URL inside your Redux Toolkit `apiSlice` or environment variables if needed.
* **Environment Variables** (create `.env` file):

  ```env
  VITE_API_URL=https://your-backend-api.com
  VITE_STRIPE_KEY=your-stripe-public-key
  ```

---

## 🧪 Testing & Linting

Run ESLint for code quality:

```bash
npm run lint
```

---

## 🚀 Deployment

The frontend is deployed on **Netlify**:
👉 [https://chologhuri-com.netlify.app/](https://chologhuri-com.netlify.app/)

To deploy manually:

1. Run `npm run build`
2. Upload the `dist/` folder to Netlify, Vercel, or any static hosting provider.

---

## 🙌 Contributors

👨‍💻 **Developer**: [Istiak Ahmed](https://github.com/istiak19)