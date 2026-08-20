import {useParams, useNavigate} from 'react-router-dom';
function MovieDetails({ movies, favorites, toggleFavorite }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find(m => m.id === parseInt(id));

    if (!movie) 
        return <h2 style={{textAlign: "center"}}>Movie not found</h2>;
             const isFavorite = favorites.includes(movie.id);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <button
                onClick={() => navigate('/')}

                style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#9370db', color: 'white', border: 'none', borderRadius: '5px' }}
            >
                Back to Home
            </button>
            <h1>{movie.title}</h1>
            <img src={movie.posterURL} alt={movie.title} style={{ width: '300px', borderRadius: '10px' }} />
            {/*Favorites Button */}
            <button onClick={() => toggleFavorite(movie.id)} 
                style={{
                display: 'block',
                margin: '20px auto',
                padding: '10px 25px',
                backgroundColor: isFavorite? 'red' : 'green',
                color: 'whitesmoke',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>
                {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites' }
            </button>
            <p style={{ maxWidth: '600px', margin: '20px auto', fontSize: '16px' }}>{movie.description}</p>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Rating: {"⭐".repeat(movie.rating)}</p>
            <h3>Trailer</h3>
            <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title={movie.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '10px' }}
            ></iframe>
        </div>
    );
}

export default MovieDetails;