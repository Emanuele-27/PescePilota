import React from "react";
import "./peso.css";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Button } from "primereact/button";

function Peso() {
  let obj = useLocation().query;

  return (
    <Card className="cardPeso">
      <Card.Body>
        <Card.Text className="title">{obj.nome} </Card.Text>
        <Card.Text className="currence">Peso Attuale : {obj.peso} kg</Card.Text>
        <Button label="Aggiungi" onClick={() => aggiungi(obj)}></Button>
      </Card.Body>
    </Card>
  );
}

function aggiungi(obj) {
  obj.peso += 10;

  let requestOptions = {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  };

  fetch("http://localhost:3001/add", requestOptions)
    .then((response) => response.json())
    .then((json) => JSON.stringify(json))
    .then((obj) => console.log(JSON.parse(obj)));
}

export default Peso;
