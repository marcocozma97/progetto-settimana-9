import { useState } from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';

// Passiamo una "prop" chiamata onSearchSubmit che riceveremo da App.jsx
const MyNavbar = ({ onSearchSubmit }) => {
  // Stato locale: serve solo a memorizzare cosa scrive l'utente nel box
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Impedisce alla pagina di ricaricarsi (comportamento standard dei form HTML)
    
    if (inputValue.trim() !== '') {
      onSearchSubmit(inputValue); // Invia la parola chiave ad App.jsx
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container fluid className="px-4">
        <Navbar.Brand href="#home" style={{ color: '#E50914', fontWeight: 'bold', fontSize: '1.8rem' }}>
          NETFLIX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows" className="active text-white">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#recent">Recently Added</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
          </Nav>
          
          <div className="d-flex align-items-center text-white">
            {/* Avvolgiamo l'input in un vero Form HTML per intercettare l'invio (tasto Enter) */}
            <Form className="d-flex me-4" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search and press enter"
                className="bg-dark text-white border-secondary rounded-0"
                aria-label="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Aggiorna solo lo stato locale, senza fare fetch
              />
            </Form>
            <div className="me-4 fw-bold">KIDS</div>
            <i className="bi bi-bell-fill me-4 fs-5"></i>
            <i className="bi bi-person-circle fs-4"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;