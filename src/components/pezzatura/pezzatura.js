import React, { useState } from "react";
import "./pezzatura.css";
import "../peso/peso.css";
import "../header/header.css";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Button } from "primereact/button";
import { CascadeSelect } from "primereact/cascadeselect";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {withRouter} from 'react-router-dom';
import { InputNumber } from "primereact/inputnumber";
import Header from 'components/header/header';

function Pezzatura() {
  let obj = useLocation().query;
  let day = useLocation().day.day;

  const [stato, setStato] = useState(0);

  const [n, setN] = useState(0);

  const [p, setP] = useState(0);

  const valori = [
    {
      name: "0,000 - 1,000",
      groupValues: [
        {
          name: "0,000 - 0,500",
          values: [
            { label: "0,050", code: 0.05 },
            { label: "0,100", code: 0.1 },
            { label: "0,150", code: 0.15 },
            { label: "0,200", code: 0.2 },
            { label: "0,250", code: 0.25 },
            { label: "0,300", code: 0.3 },
            { label: "0,350", code: 0.35 },
            { label: "0,400", code: 0.4 },
            { label: "0,450", code: 0.45 },
            { label: "0,500", code: 0.5 },
          ],
        },
        {
          name: "0,500 - 1,000",
          values: [
            { label: "0,550", code: 0.55 },
            { label: "0,600", code: 0.6 },
            { label: "0,650", code: 0.65 },
            { label: "0,700", code: 0.7 },
            { label: "0,750", code: 0.75 },
            { label: "0,800", code: 0.8 },
            { label: "0,850", code: 0.85 },
            { label: "0,900", code: 0.9 },
            { label: "0,950", code: 0.95 },
            { label: "1,000", code: 1.0 },
          ],
        },
      ],
    },
    {
      name: "1,050 - 2,000",
      groupValues: [
        {
          name: "1,050 - 1,500",
          values: [
            { label: "1,050", code: 1.05 },
            { label: "1,100", code: 1.1 },
            { label: "1,150", code: 1.15 },
            { label: "1,200", code: 1.2 },
            { label: "1,250", code: 1.25 },
            { label: "1,300", code: 1.3 },
            { label: "1,350", code: 1.35 },
            { label: "1,400", code: 1.4 },
            { label: "1,450", code: 1.45 },
            { label: "1,500", code: 1.5 },
          ],
        },
        {
          name: "1,500 - 2,000",
          values: [
            { label: "1,550", code: 1.55 },
            { label: "1,600", code: 1.6 },
            { label: "1,650", code: 1.65 },
            { label: "1,700", code: 1.7 },
            { label: "1,750", code: 1.75 },
            { label: "1,800", code: 1.8 },
            { label: "1,850", code: 1.85 },
            { label: "1,900", code: 1.9 },
            { label: "1,950", code: 1.95 },
            { label: "2,000", code: 2.0 },
          ],
        },
      ],
    },
    {
      name: "2,000 - 3,000",
      groupValues: [
        {
          name: "2,000 - 2,500",
          values: [
            { label: "2,050", code: 2.05 },
            { label: "2,100", code: 2.1 },
            { label: "2,150", code: 2.15 },
            { label: "2,200", code: 2.2 },
            { label: "2,250", code: 2.25 },
            { label: "2,300", code: 2.3 },
            { label: "2,350", code: 2.35 },
            { label: "2,400", code: 2.4 },
            { label: "2,450", code: 2.45 },
            { label: "2,500", code: 2.5 },
          ],
        },
        {
          name: "2,500 - 3,000",
          values: [
            { label: "2,550", code: 2.55 },
            { label: "2,600", code: 2.6 },
            { label: "2,650", code: 2.65 },
            { label: "2,700", code: 2.7 },
            { label: "2,750", code: 2.75 },
            { label: "2,800", code: 2.8 },
            { label: "2,850", code: 2.85 },
            { label: "2,900", code: 2.9 },
            { label: "2,950", code: 2.95 },
            { label: "3,000", code: 3.0 },
          ],
        },
      ],
    },

    {
      name: "3,000 - 4,000",
      groupValues: [
        {
          name: "3,000 - 3,500",
          values: [
            { label: "3,050", code: 3.05 },
            { label: "3,100", code: 3.1 },
            { label: "3,150", code: 3.15 },
            { label: "3,200", code: 3.2 },
            { label: "3,250", code: 3.25 },
            { label: "3,300", code: 3.3 },
            { label: "3,350", code: 3.35 },
            { label: "3,400", code: 3.4 },
            { label: "3,450", code: 3.45 },
            { label: "3,500", code: 3.5 },
          ],
        },
        {
          name: "3,500 - 4,000",
          values: [
            { label: "3,550", code: 3.55 },
            { label: "3,600", code: 3.6 },
            { label: "3,650", code: 3.65 },
            { label: "3,700", code: 3.7 },
            { label: "3,750", code: 3.75 },
            { label: "3,800", code: 3.8 },
            { label: "3,850", code: 3.85 },
            { label: "3,900", code: 3.9 },
            { label: "3,950", code: 3.95 },
            { label: "4,000", code: 4.0 },
          ],
        },
      ],
    },

    {
      name: "4,000 - 5,000",
      groupValues: [
        {
          name: "4,000 - 4,500",
          values: [
            { label: "4,050", code: 4.05 },
            { label: "4,100", code: 4.1 },
            { label: "4,150", code: 4.15 },
            { label: "4,200", code: 4.2 },
            { label: "4,250", code: 4.25 },
            { label: "4,300", code: 4.3 },
            { label: "4,350", code: 4.35 },
            { label: "4,400", code: 4.4 },
            { label: "4,450", code: 4.45 },
            { label: "4,500", code: 4.5 },
          ],
        },
        {
          name: "4,500 - 5,000",
          values: [
            { label: "4,550", code: 4.55 },
            { label: "4,600", code: 4.6 },
            { label: "4,650", code: 4.65 },
            { label: "4,700", code: 4.7 },
            { label: "4,750", code: 4.75 },
            { label: "4,800", code: 4.8 },
            { label: "4,850", code: 4.85 },
            { label: "4,900", code: 4.9 },
            { label: "4,950", code: 4.95 },
            { label: "5,000", code: 5.0 },
          ],
        },
      ],
    },
  ];

  let nome = obj.nome.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

  setPesoString(obj.pezzature);

  let trashButton = (rowData) => {
    return (
      <Button
        type="button"
        icon="pi pi-trash"
        onClick={() => deleteSingle(rowData, day)}
        className="p-button-danger"
      ></Button>
    );
  };

  return (
    <div>
     <Header environment="calc" day={day}/>
    <div className="center">
      <Card className="cardPeso">
        <Card.Body>
          <Card.Text className="title">{nome} </Card.Text>
          <div className="center">
            <DataTable
              value={obj.pezzature}
              className="singleColumnStyle"
              emptyMessage="Nessun elemento presente"
            >
              <Column field="n" header="N."></Column>
              <Column field="peso" header="Peso"></Column>
              <Column
                body={trashButton}
                headerStyle={{ width: "4em", textAlign: "center" }}
                bodyStyle={{ textAlign: "center", overflow: "visible" }}
              />
            </DataTable>

            <InputNumber
              value={n}
              onValueChange={(e) => setN(e.value)}
              showButtons
              buttonLayout="horizontal"
              decrementButtonClassName="p-button-danger borderRadius"
              incrementButtonClassName="p-button-success borderRadius"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
              mode="decimal"
              min={0}
              max={20}
              className="marginBottomLow"
              placeholder={0}
              inputClassName="inputClass"
            />

            <CascadeSelect
              value={p}
              options={valori}
              optionLabel={"label"}
              optionGroupLabel={"name"}
              optionGroupChildren={["groupValues", "values"]}
              className="cascade marginBottomLow"
              placeholder={"Seleziona un peso"}
              onChange={(e) => setP(e.value)}
            />

            <Button
              label="Aggiungi"
              onClick={() => {
                aggiungi(obj, n, p, day);
                setN(0);
                setP(0);
              }}
              className="p-button-danger red pezzaturaB"
              disabled={n === 0 || p === 0}
            ></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
    </div>
  );

  function deleteSingle(row, day) {
    for (let i in obj.pezzature) {
      if (row.peso === obj.pezzature[i].peso && row.n === obj.pezzature[i].n) {
        obj.pezzature.splice(i, 1);
      }
    }

    setPesoNumber(obj.pezzature);

    call(obj, day);

    setStato(stato + 1);
  }
}

function setPesoString(list) {
  for (let i in list) {
    list[i].peso = (parseFloat(list[i].peso).toFixed(3));
    console.log(list[i].peso);
    console.log(list[i].peso.replace('.', ','));
  }
}

function setPesoNumber(list) {
  for (let i in list) {
    list[i].peso = parseFloat(list[i].peso);
  }
}

function aggiungi(object, num, p, day) {
  setPesoNumber(object.pezzature);
  let flag = Boolean(false);
  for (let i in object.pezzature) {
    if (parseFloat(object.pezzature[i].peso) === p.code) {
      object.pezzature[i].n += num;
      flag = true;
    }
  }

  if (!flag) {
    let pezzatura = {
      n: num,
      peso: p.code,
    };
    object.pezzature.push(pezzatura);
  }

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
export default withRouter(Pezzatura);
