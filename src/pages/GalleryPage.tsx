
import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import './GalleryPage.css';

const images = [
  { id: 1, src: 'https://picsum.photos/id/1015/600/400', title: 'Image 1', description: 'This is a description for image 1.' },
  { id: 2, src: 'https://picsum.photos/id/1016/600/400', title: 'Image 2', description: 'This is a description for image 2.' },
  { id: 3, src: 'https://picsum.photos/id/1018/600/400', title: 'Image 3', description: 'This is a description for image 3.' },
  { id: 4, src: 'https://picsum.photos/id/1019/600/400', title: 'Image 4', description: 'This is a description for image 4.' },
  { id: 5, src: 'https://picsum.photos/id/1020/600/400', title: 'Image 5', description: 'This is a description for image 5.' },
  { id: 6, src: 'https://picsum.photos/id/1021/600/400', title: 'Image 6', description: 'This is a description for image 6.' },
  { id: 7, src: 'https://picsum.photos/id/1022/600/400', title: 'Image 7', description: 'This is a description for image 7.' },
  { id: 8, src: 'https://picsum.photos/id/1023/600/400', title: 'Image 8', description: 'This is a description for image 8.' },
  { id: 9, src: 'https://picsum.photos/id/1024/600/400', title: 'Image 9', description: 'This is a description for image 9.' },
];

const GalleryPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; title: string; description: string; } | null>(null);

  const handleImageClick = (image: { id: number; src: string; title: string; description: string; }) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <Container className="mt-5">
      <Row>
        {images.map((image) => (
          <Col key={image.id} md={4} className="mb-4">
            <Card className="gallery-card" onClick={() => handleImageClick(image)}>
              <Card.Img variant="top" src={image.src} />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>{image.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage?.src} alt={selectedImage?.title} className="img-fluid" />
          <p className="mt-3">{selectedImage?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GalleryPage;
