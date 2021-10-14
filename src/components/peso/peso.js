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
        <Card.Text className="title">{obj.name} </Card.Text>
        <Card.Text className="currence">Peso Attuale : {obj.peso} kg</Card.Text>
        <Button label="Aggiungi" onClick={aggiungi(obj)}></Button>
      </Card.Body>
    </Card>
  );
}

function aggiungi(obj) {
  obj.peso = 1;

  // const fs = require("fs");
  // const fileName = "../../public/json/".concat(obj.name, ".json");
  // const file = require(fileName);

  // file.key = "new value";

  // fs.writeFile(fileName, JSON.stringify(obj), function writeJSON(err) {
  //   if (err) return console.log(err);
  //   console.log(JSON.stringify(obj));
  //   console.log("writing to " + fileName);
  // });

  var json = JSON.stringify(obj);

  var fs = require("fs");
  fs.writeFile("myjsonfile.json", json, "utf8", function writeJSON(err) {
    if (err) return console.log(err);
  });
}

export default Peso;
