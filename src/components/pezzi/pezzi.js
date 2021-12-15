import React, { useState } from "react";
import "./pezzi.css";
import "../peso/peso.css";
import "../header/header.css";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Button } from "primereact/button";
import { InputNumber } from 'primereact/inputnumber';
import {withRouter} from 'react-router-dom';
import Header from 'components/header/header';

function Pezzi() {
  let obj = useLocation().query;
  let day = useLocation().day.day;

  const [selectedValue, setSelectedValue] = useState(0);

  let nome = obj.nome.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

  return (
    <div>
     <Header environment="calc" day={day}/>
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
            aggiungi(obj, selectedValue, day);
            setSelectedValue(0);
          }}
          className="p-button-info blue left"
          disabled={selectedValue === 0}
        ></Button>
        <Button
          label="Sottrai"
          onClick={() => {
            sottrai(obj, selectedValue, day);
            setSelectedValue(0);
          }}
          className="p-button-info blue right"
          disabled={selectedValue === 0}
        ></Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

function aggiungi(object, value, day) {
  object.pezzi += value;
  call(object, day);
}

function sottrai(object, value, day) {
  object.pezzi -= value;
  call(object, day);
}

function call(param, day) {
  let requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(param),
  };

  fetch(process.env.REACT_APP_SERVICE_HOST+"write"+day, requestOptions).then((response) =>
    console.log(response.status)
  );
}

export default withRouter(Pezzi);
