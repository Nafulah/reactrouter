markdown
# 🎬 My Movie App 

A simple React Movie App with filtering and movie details page. Built for GOMYCODE React Checkpoint.

This project uses **React Router v5** - No AddMovie component, just what the checkpoint asks for.

### ✨ Features

- **Movie List**: Displays a grid of movies with poster, title, description and rating
- **Filter by Title**: Live search input to filter movies by name
- **Filter by Rating**: Dropdown to filter by minimum rating (1 to 5 stars)
- **Movie Details Page**: Click any movie card to see full description and embedded YouTube trailer
- **Navigation**: Back to Home button using `useHistory`
- **Responsive & Hover Effects**: Cards scale on hover, clean purple theme

### 🛠️ Tech Stack

- React
- React Router DOM v5 (`Switch`, `Route`, `useParams`, `useHistory`)
- useState for state management
- CSS-in-JS (inline styles)

### 📁 Project Structure
src/
├── App.js -> Main app with Router, state and filtering logic
├── Filter.js -> Search input + rating filter
├── MovieList.js -> Grid layout for movies
├── MovieCard.js -> Single card (clickable, navigates to /movie/:id)
└── MovieDetails.js -> Details page with trailerjavascript

### 🚀 Installation & Run

1. Install dependencies:
```bash
npm install
2. Install React Router v5 (important!)
:bash
npm install react-router-dom@5
3. Start the app
:bashnpm start
App will run on http://localhost:3000


🔗 Routes
/ - Home page with Filter + MovieList
/movie/:id - Details page for a specific movie
🎞️ Movies Included
Inception (5⭐)
Interstellar (4⭐)
The Dark Knight (5⭐)
Avatar (3⭐)

You can easily add more movies in the movies array in App.js.

✅ Checkpoint Validated
MovieCard component
MovieList component
Filter component (title + rating)
MovieDetails with trailer and description
Routing with react-router-dom
No AddMovie (as required for v5)
Made with 💜 for GOMYCODE