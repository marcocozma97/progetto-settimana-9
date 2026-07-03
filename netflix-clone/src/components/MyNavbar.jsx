import { Navbar, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    // bg="dark" e variant="dark" sono classi di Bootstrap per lo sfondo scuro
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Netflix Clone</Navbar.Brand>
        {/* Il resto dei link e l'icona di ricerca li aggiungeremo dopo! */}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;