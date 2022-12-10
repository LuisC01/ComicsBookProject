import "../App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

const GetComics = () => {
  return axios.get(`${"http://localhost:8000"}/comics`);
};

const ComicsGrid = () => {
  const [comics, setComics] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    GetComics().then((res) => {
      setComics(res.data.results);
    });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {comics.map((comic) => (
            <Col key={comic.id}>
              <Card
                style={{ width: "20rem", height: "41rem" }}
                className="mb-5"
                class="border-right-4 shadow-3"
              >
                <Card.Img variant="top" src={comic.image.small_url} />
                <Card.Body>
                  <Card.Title>{"Name: " + comic.volume.name}</Card.Title>
                  <Card.Text>{comic.date_added}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => {
                      navigation(`/details/${comic.id}`);
                    }}
                  >
                    More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ComicsGrid;
