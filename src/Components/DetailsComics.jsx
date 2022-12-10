import { Card } from "react-bootstrap";
import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

const GetDetails = (id) => {
  return axios.get(`${"http://localhost:8000"}/comic/${id}`);
};

const DetailsComics = () => {
  const { id } = useParams();

  const [Details, setDetails] = useState({});

  useEffect(() => {
    GetDetails(id).then((res) => {
      setDetails(res.data.results);
    });
  }, []);

  return (
    <Card style={{ width: "18rem" }} className="ml-4">
      <Card.Img variant="top" src={Details.image.small_url} />
      <Card.Body>
        <Card.Title>{Details.volume.name}</Card.Title>
        {Details.person_credits.map((credit) => (
          <Card.Text key={credit.id}>Credits to: {credit.name} </Card.Text>
        ))}
      </Card.Body>
    </Card>
  );
};

export default DetailsComics;
