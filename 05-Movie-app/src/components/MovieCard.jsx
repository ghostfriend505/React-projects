export default function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image"

  return (
    <div className="card">
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
      <p className="date">{movie.release_date}</p>
      <p className="overview">{movie.overview.slice(0, 100)}...</p>
    </div>
  )
}
