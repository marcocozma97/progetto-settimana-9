import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Dropdown } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MovieGallery from './components/MovieGallery';
import CommentModal from './components/CommentModal'; // <-- IMPORTA LA MODALE

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // STATI PER LA MODALE
  const [showModal, setShowModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Funzione che si attiva quando si clicca su un film
  const handleMovieSelect = (id) => {
    setSelectedMovieId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovieId(null);
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      <MyNavbar onSearchSubmit={handleSearch} />
      
      <main className="container-fluid px-4">
        {/* Intestazione TV Shows e Generi */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <h2 className="mb-0 me-4">TV Shows</h2>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic" className="border-secondary rounded-0" size="sm">
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <i className="bi bi-grid-fill fs-5 me-3 text-secondary"></i>
            <i className="bi bi-grid-3x3-gap-fill fs-5 text-secondary"></i>
          </div>
        </div>

        {/* --- GALLERIE DI FILM (Passiamo handleMovieSelect a tutte) --- */}
        <div className="mt-5">
          {searchQuery && (
            <MovieGallery 
              title={`Risultati della ricerca per: "${searchQuery}"`} 
              searchQuery={searchQuery} 
              onMovieSelect={handleMovieSelect}
            />
          )}

          <MovieGallery title="Harry Potter" searchQuery="harry potter" onMovieSelect={handleMovieSelect} />
          <MovieGallery title="Lord of the Rings" searchQuery="lord of the rings" onMovieSelect={handleMovieSelect} />
          <MovieGallery title="Marvel's Avengers" searchQuery="avengers" onMovieSelect={handleMovieSelect} />
        </div>
      </main>

      <MyFooter />

      {/* COMPONENTE MODALE*/}
      <CommentModal 
        show={showModal} 
        handleClose={handleCloseModal} 
        movieId={selectedMovieId} 
      />
    </div>
  );
}

export default App;