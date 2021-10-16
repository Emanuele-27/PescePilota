import React, { useState } from "react";
import "./peso.css";
import "../header/header.css";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

function Peso() {
  let obj = useLocation().query;

  const [selectedValue, setSelectedValue] = useState(0);

  const groupedValues = [
    {
      label: "0,000 - 1,000",
      items: [
        { label: "0,100", value: 0.1 },
        { label: "0,150", value: 0.15 },
        { label: "0,200", value: 0.2 },
        { label: "0,250", value: 0.25 },
        { label: "0,500", value: 0.5 },
        { label: "1,000", value: 1.0 },
      ],
    },
    {
      label: "2,000 - 5,000",
      items: [
        { label: "2,000", value: 2.0 },
        { label: "2,500", value: 2.5 },
        { label: "3,000", value: 3.0 },
        { label: "3,500", value: 3.5 },
        { label: "4,000", value: 4.0 },
        { label: "4,500", value: 4.5 },
        { label: "5,000", value: 5.0 },
      ],
    },
    {
      label: "5,000+",
      items: [
        { label: "6,000", value: 6.0 },
        { label: "7,000", value: 7.0 },
        { label: "8,000", value: 8.0 },
        { label: "9,000", value: 9.0 },
        { label: "10,000", value: 10.0 },
      ],
    },
  ];

  let nome = obj.nome.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

  let peso = obj.peso.toFixed(3).replace('.', ',');

  return (
    <div className="center">
    <Card className="cardPeso">
      <Card.Body>
        <Card.Text className="title">{nome} </Card.Text>
        <Card.Text className="currence">
          Peso Attuale : {peso} kg
        </Card.Text>

        <Dropdown
          value={selectedValue}
          options={groupedValues}
          onChange={(e) => setSelectedValue(e.value)}
          optionLabel="label"
          optionGroupLabel="label"
          optionGroupChildren="items"
          className="dropDown"
        />

        <Button
          label="Aggiungi"
          onClick={() => {
            aggiungi(obj, selectedValue);
            setSelectedValue(0);
          }}
          className="p-button-danger red pesoB"
          disabled={selectedValue === 0}
        ></Button>
        <Button
          label="Sottrai"
          onClick={() => {
            sottrai(obj, selectedValue);
            setSelectedValue(0);
          }}
          className="p-button-danger red pesoB"
          disabled={selectedValue === 0}
        ></Button>
      </Card.Body>
    </Card>
    </div>
  );
}

function aggiungi(object, value) {
  object.peso += value;
  object.peso = parseFloat(object.peso.toFixed(3));
  call(object);
}

function sottrai(object, value) {
  object.peso -= value;
  object.peso = parseFloat(object.peso.toFixed(3));
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

export default Peso;
