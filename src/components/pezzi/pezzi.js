import React, { useState } from "react";
import "./pezzi.css";
import "../peso/peso.css";
import "../header/header.css";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Button } from "primereact/button";
import { InputNumber } from 'primereact/inputnumber';

function Pezzi() {
  let obj = useLocation().query;

  const [selectedValue, setSelectedValue] = useState(0);

  let nome = obj.nome.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

  return (
    <div className="center">
    <Card className="cardPeso">
      <Card.Body>
        <Card.Text className="title">{nome} </Card.Text>
        <Card.Text className="currence">
          Pezzi Totali : {obj.pezzi} pz.
        </Card.Text>

        <InputNumber
          value={selectedValue}
          onValueChange={(e) => setSelectedValue(e.value)}
          showButtons
          buttonLayout="horizontal"
          decrementButtonClassName="p-button-danger borderRadius"
          incrementButtonClassName="p-button-success borderRadius"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
          mode="decimal"
          min={0} max={20}
          className="numberClass"
          placeholder={0}
          inputClassName="inputClass"
        />
        <br />
        <Button
          label="Aggiungi"
          onClick={() => {
            aggiungi(obj, selectedValue);
            setSelectedValue(0);
          }}
          className="p-button-info blue left"
          disabled={selectedValue === 0}
        ></Button>
        <Button
          label="Sottrai"
          onClick={() => {
            sottrai(obj, selectedValue);
            setSelectedValue(0);
          }}
          className="p-button-info blue right"
          disabled={selectedValue === 0}
        ></Button>
      </Card.Body>
    </Card>
    </div>
  );
}

function aggiungi(object, value) {
  object.pezzi += value;
  call(object);
}

function sottrai(object, value) {
  object.pezzi -= value;
  call(object);
}

function call(param) {
  let requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(param),
  };

  fetch("http://192.168.1.101:3001/write", requestOptions).then((response) =>
    console.log(response.status)
  );
}

export default Pezzi;
