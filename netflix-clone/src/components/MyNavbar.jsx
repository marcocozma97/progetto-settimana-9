import { Navbar, Nav, Container, Form } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    // expand="lg" fa comparire l'hamburger menu sugli schermi piccoli
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container fluid className="px-4">
        {/* Usiamo un po' di CSS inline per simulare il logo di Netflix */}
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
            {/* Barra di ricerca temporanea, non funzionante per ora */}
            <Form className="d-flex me-4">
              <Form.Control
                type="search"
                placeholder="Search and press enter"
                className="bg-dark text-white border-secondary rounded-0"
                aria-label="Search"
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