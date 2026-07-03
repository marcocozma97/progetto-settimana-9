import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Dropdown } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <MyNavbar />
      
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
            {/* Icone allineamento a destra */}
            <i className="bi bi-grid-fill fs-5 me-3 text-secondary"></i>
            <i className="bi bi-grid-3x3-gap-fill fs-5 text-secondary"></i>
          </div>
        </div>

        {/* Qui andranno le nostre gallerie di film (Fase 4) */}
        <div className="mt-5">
           <h4 className="text-secondary">Sezione Film in arrivo...</h4>
        </div>

      </main>

      <MyFooter />
    </div>
  );
}

export default App;