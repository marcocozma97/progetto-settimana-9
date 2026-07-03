import { Container, Row, Col, Button } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer className="bg-dark text-secondary py-5 mt-5">
      <Container className="px-5">
        {/* Icone social */}
        <Row className="mb-4">
          <Col>
            <i className="bi bi-facebook fs-4 me-3"></i>
            <i className="bi bi-instagram fs-4 me-3"></i>
            <i className="bi bi-twitter fs-4 me-3"></i>
            <i className="bi bi-youtube fs-4"></i>
          </Col>
        </Row>
        
        {/* Colonne dei link finti */}
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 mb-4" style={{ fontSize: '0.9em' }}>
          <Col className="d-flex flex-column gap-2 mb-3">
            <a href="#" className="text-secondary text-decoration-none">Audio and Subtitles</a>
            <a href="#" className="text-secondary text-decoration-none">Media Center</a>
            <a href="#" className="text-secondary text-decoration-none">Privacy</a>
            <a href="#" className="text-secondary text-decoration-none">Contact us</a>
          </Col>
          <Col className="d-flex flex-column gap-2 mb-3">
            <a href="#" className="text-secondary text-decoration-none">Audio Description</a>
            <a href="#" className="text-secondary text-decoration-none">Investor Relations</a>
            <a href="#" className="text-secondary text-decoration-none">Legal Notices</a>
          </Col>
          <Col className="d-flex flex-column gap-2 mb-3">
            <a href="#" className="text-secondary text-decoration-none">Help Center</a>
            <a href="#" className="text-secondary text-decoration-none">Jobs</a>
            <a href="#" className="text-secondary text-decoration-none">Cookie Preferences</a>
          </Col>
          <Col className="d-flex flex-column gap-2 mb-3">
            <a href="#" className="text-secondary text-decoration-none">Gift Cards</a>
            <a href="#" className="text-secondary text-decoration-none">Terms of Use</a>
            <a href="#" className="text-secondary text-decoration-none">Corporate Information</a>
          </Col>
        </Row>
        
        {/* Tasto e copyright*/}
        <Row>
          <Col>
            <Button variant="outline-secondary" className="rounded-0 mb-3" size="sm">
              Service Code
            </Button>
            <p style={{ fontSize: '0.8em' }}>© 1997-2026 Netflix, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;