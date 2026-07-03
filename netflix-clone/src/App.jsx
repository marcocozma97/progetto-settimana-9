import { useState } from 'react'; // <-- IMPORTANTE: Aggiungiamo useState per memorizzare la ricerca
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Dropdown } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MovieGallery from './components/MovieGallery';

function App() {
  // Stato globale per la stringa cercata dall'utente
  const [searchQuery, setSearchQuery] = useState('');

  // Funzione che verrà chiamata dalla Navbar alla pressione del tasto INVIO
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Passiamo la funzione handleSearch alla Navbar */}
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

        {/* --- GALLERIE DI FILM --- */}
        <div className="mt-5">
          
          {/* Se searchQuery non è vuota, mostra la galleria dei risultati in alto */}
          {searchQuery && (
            <MovieGallery 
              title={`Risultati della ricerca per: "${searchQuery}"`} 
              searchQuery={searchQuery} 
            />
          )}

          {/* Le nostre 3 saghe fisse richieste dall'esercizio */}
          <MovieGallery title="Harry Potter" searchQuery="harry potter" />
          <MovieGallery title="Lord of the Rings" searchQuery="lord of the rings" />
          <MovieGallery title="Marvel's Avengers" searchQuery="avengers" />
        </div>

      </main>

      <MyFooter />
    </div>
  );
}

export default App;