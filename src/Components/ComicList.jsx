import "../App.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GetComics = () => {
  return axios.get(`${"http://localhost:8000"}/comics`);
};

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    GetComics().then((res) => {
      setComics(res.data.results);
    });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr class="table-dark">
          <th scope="row">Image:</th>
          <th scope="row">Name:</th>
          <th scope="row">Date:</th>
          <th scope="row">Issue Number</th>
          <th scope="row">Details</th>
        </tr>
      </thead>
      <tbody>
        {comics.map((comic) => (
          <tr key={comic.id}>
            <td>
              <img src={comic.image.small_url} />
            </td>
            <td>{comic.volume.name}</td>
            <td>{comic.date_added}</td>
            <td>{comic.issue_number}</td>
            <td>
              <Button
                variant="danger"
                onClick={() => {
                  navigation(`/details/${comic.id}`);
                }}
              >
                More Details
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ComicsList;
