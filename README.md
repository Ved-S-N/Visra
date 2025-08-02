# 🌍 Visra — Discover the World, Effortlessly

Visra is a modern travel discovery web app that allows users to explore destinations, view curated listings, and interact with a responsive interface. Built for a webathon project with a focus on design, functionality, and real-world usability.

---

## 🚀 Features

- 🧭 **Explore Section**: Browse destinations with image-rich listings.
- 🔐 **Authentication**: Sign up and log in with persistent session using `localStorage`.
- 👋 **Conditional Navbar**: Changes based on login status (shows Login/Logout).
- 💬 **Dynamic Listings**: All listings are fetched from MongoDB.
- 🖼️ **Image Support**: Images displayed from URLs or uploaded via MongoDB.
- 🔎 **Search**: Filter listings by tags or destination names.
- 🎨 **Theming**: Light/dark toggle using a custom theme context.
- 🎯 **Routing**: Client-side routing with `react-router-dom`.
- 📱 **Responsive Design**: Works well across all screen sizes.
- ⚙️ **Custom Cursor**: For aesthetic enhancement on supported routes.
- 🧠 **Reusable Components**: Navbar, Hero, TeamSection, Buttons, etc.

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI**: TailwindCSS, Lucide Icons
- **State**: React Hooks + Context
- **Routing**: React Router
- **API**: Fetch-based data retrieval
- **Database**: MongoDB Atlas
- **Server**: Node.js + Express (running locally or on cloud)
- **Deployment**: *(planned for)* AWS / Vercel / Netlify

---

## 📁 Project Structure
src/
├── components/ # Reusable UI components
│ ├── Navbar.tsx
│ ├── Hero.tsx
│ ├── ExploreSection.tsx
│ └── ...
├── pages/ # Page-level components
│ ├── Login.tsx
│ ├── Signup.tsx
│ ├── Index.tsx
│ └── NotFound.tsx
├── App.tsx # Main app with routes
├── main.tsx # Entry point
├── ThemeContent.tsx # Dark/light theme context
└── ...


---

## 📦 Installation & Running Locally


# 1. Clone the repo
git clone https://github.com/Ved-S-N/Visra.git
cd Visra

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

##TODO IMPROVEMENTS

🔲 Admin dashboard (optional)

🔲 Form validations & error handling

🔲 Booking / save feature

🔲 Image uploads via form

🔲 SEO improvements



