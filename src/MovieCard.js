import {useNavigate} from "react-router-dom";
function MovieCard({movie, favorites, toggleFavorite}) {
    const navigate = useNavigate();
    return (
        <div
        onClick= {() => navigate(`/movie/${movie.id}`)}
        style={{
            width: "220px",
            height: "400px",
            border: "1px solid #9370db",
            padding: "10px",
            cursor: "pointer",
            backgroundColor: "#8B0000",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            transition: "transform 0.2s",
        }}
        onMouseOver={e => e.currentTarget.style.transform = "scale(1.05"}
        onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        >
            <img 
            src={movie.posterURL}
            alt={movie.title}
            style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: "5px",
            }}
            onError={(e) => { e.target.src = "https://via.placeholder.com/220x280?text=No+Image" }}
            />
            <h3 
            style={{ 
                fontSize: "18px",
                margin: "10px 0 5px 0",
                height: "40px",
                overflow: "hidden",
            }}>
                {movie.title}
            </h3>
            <p style={{
                fontSize: "16px",
                flexGrow: 1,
                overflow: "hidden",
            }}>
                {movie.description.length > 80? movie.description.slice(0, 80) + "..." : movie.description}
            </p>
            <p style={{fontSize: "16px", fontWeight: "bold"}}>Rating: {"✧".repeat(movie.rating)}</p>
            <button onClick={(e) => {e.preventDefault() ; 
               e.stopPropagation();
               toggleFavorite(movie.id)}} style={{fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer'}}>
                {favorites.includes(movie.id) ? '❣️' : '🤍'}
            </button>
        </div>
    );
}export default MovieCard;