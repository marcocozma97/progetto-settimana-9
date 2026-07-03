import { useState, useEffect } from 'react';
import { Modal, Button, Form, ListGroup, Badge, Spinner, Alert } from 'react-bootstrap';

const STRIVE_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ3YWNiN2NjNzJlOTAwMTU0MzJhODEiLCJpYXQiOjE3ODMwODIxNjcsImV4cCI6MTc4NDI5MTc2N30.JlyPZztxDwDbdMCvVYMYOv0DsrOaNoLew3Sm5d3eWdE';

const CommentModal = ({ show, handleClose, movieId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  // Stati per il nuovo commento da inviare
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState('5'); 

  // Funzione per recuperare i commenti (GET)
  const fetchComments = async () => {
    if (!movieId) return;
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
        headers: STRIVE_TOKEN ? { 'Authorization': STRIVE_TOKEN } : {}
      });
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Carica i commenti ogni volta che la modale si apre su un film specifico
  useEffect(() => {
    if (show && movieId) {
      fetchComments();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, movieId]);

  // Funzione per inviare un nuovo commento (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const payload = {
      comment: newComment,
      rate: parseInt(rating),
      elementId: movieId
    };

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          ...(STRIVE_TOKEN ? { 'Authorization': STRIVE_TOKEN } : {})
        }
      });

      if (response.ok) {
        setNewComment(''); 
        setRating('5');   
        fetchComments();  
      } else {
        alert("Errore durante l'invio del commento");
      }
    } catch (error) {
      console.error("Errore di rete:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered text-dark>
      <Modal.Header closeButton>
        <Modal.Title className="text-dark fw-bold">Movie comments</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="text-dark">
        {/* Caricamento ed errori */}
        {isLoading && <div className="text-center my-3"><Spinner animation="border" variant="primary" /></div>}
        {isError && <Alert variant="danger">Impossibile caricare i commenti.</Alert>}
        
        {/* Lista dei commenti */}
        {!isLoading && comments.length === 0 && <p className="text-muted text-center">Nessun commento presente per questo film.</p>}
        
        <ListGroup className="mb-4">
          {comments.map((c) => (
            <ListGroup.Item key={c._id} className="d-flex align-items-center gap-3">
              <Badge bg="info" pill className="fs-6 px-2 py-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                {c.rate}
              </Badge>
              <span className="fw-semibold">{c.comment}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <hr />

        {/* Form per aggiungere un commento*/}
        <Form onSubmit={handleSubmit} className="text-center">
          <h5 className="mb-3 fw-bold">Add a comment</h5>
          
          {/* Radio Buttons per il voto da 1 a 5 */}
          <div className="d-flex justify-content-center gap-3 mb-3">
            {['1', '2', '3', '4', '5'].map((num) => (
              <Form.Check
                inline
                label={num}
                name="ratingGroup"
                type="radio"
                id={`radio-${num}`}
                key={num}
                value={num}
                checked={rating === num}
                onChange={(e) => setRating(e.target.value)}
              />
            ))}
          </div>

          {/* Campo di testo */}
          <Form.Group className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Write your comment" 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-25 rounded px-3">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CommentModal;