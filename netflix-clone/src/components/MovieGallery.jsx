import { useState, useEffect } from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';

const MovieGallery = ({ title, searchQuery, onMovieSelect }) => {
  // Stati del nostro componente
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Funzione per recuperare i film
  const fetchMovies = async () => {
    try {
      // Recuperiamo la chiave segreta dal file .env che hai creato prima
      const apiKey = import.meta.env.VITE_OMDB_API_KEY;
      
      // Chiamata all'API
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`);
      
      if (response.ok) {
        const data = await response.json();
        // Le API di OMDB restituiscono i film dentro un array chiamato "Search"
        if (data.Search) {
          // L'esercizio chiede "no scorrimento" e "almeno 3 locandine". 
          // Ne prendiamo esattamente 6 (tramite slice) per riempire perfettamente la riga su desktop.
          setMovies(data.Search.slice(0, 6)); 
        } else {
          setIsError(true);
        }
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      // Che vada bene o male, il caricamento è finito
      setIsLoading(false); 
    }
  };

  // useEffect esegue la fetch solo al primo caricamento del componente
  useEffect(() => {
    fetchMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className="mb-5">
      <h4 className="text-white mb-3">{title}</h4>
      
      {/* Mostriamo un cerchio di caricamento finché i dati non arrivano */}
      {isLoading && <Spinner animation="border" variant="light" />}
      
      {/* Mostriamo un errore se qualcosa va storto */}
      {isError && <Alert variant="danger">Errore nel caricamento dei film</Alert>}
      
      {/* Griglia responsive di Bootstrap: 1 colonna su mobile, 2 su tablet, 6 su PC */}
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
        {movies.map((movie) => (
          <Col key={movie.imdbID}>
            <img 
              src={movie.Poster} 
              alt={movie.Title} 
              className="img-fluid movie-card w-100"
              onClick={() => onMovieSelect(movie.imdbID)} 
            />
          </Col>
        ))}
      </Row>
    </div>
  );

  // Aggiungi onMovieSelect tra le props ricevute in alto
const MovieGallery = ({ title, searchQuery, onMovieSelect }) => {
  // ... lascia invariati gli stati e la funzione fetchMovies ...

  return (
    <div className="mb-5">
      <h4 className="text-white mb-3">{title}</h4>
      
      {isLoading && <Spinner animation="border" variant="light" />}
      {isError && <Alert variant="danger">Errore nel caricamento dei film</Alert>}
      
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
        {movies.map((movie) => (
          <Col key={movie.imdbID}>
            <img 
              src={movie.Poster} 
              alt={movie.Title} 
              className="img-fluid movie-card w-100" 
              onClick={() => onMovieSelect(movie.imdbID)} // <-- AGGIUNGI QUESTO CLICK!
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};


};

export default MovieGallery;