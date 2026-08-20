import MovieCard from "./MovieCard";
function MovieList({ movies, favorites, toggleFavorite }) {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            justifyItems: "center",
        }}>
            {movies.map((movie) =>(
                <MovieCard key={movie.id} movie={movie} favorites={favorites} toggleFavorite={toggleFavorite} />
            ))}
        </div>
    );
}export default MovieList;