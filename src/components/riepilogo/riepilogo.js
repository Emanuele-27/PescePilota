import React, { Component } from "react";
import "./riepilogo.css";
import "../header/header.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

class Riepilogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesciPeso: [],
      pesciPesoPezzi: [],
      pesciPezzatura: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/read")
      .then((response) => response.json())
      .then((json) => JSON.stringify(json))
      .then((jsonObj) => {
        let obj = JSON.parse(jsonObj);
        let pesoList = [];
        let pesoPezziList = [];
        let pezzaturaList = [];
        for (let i in obj.pesci) {
          if (obj.pesci[i].peso > 0)
            obj.pesci[i].peso = obj.pesci[i].peso.toFixed(3) + " kg";
          else obj.pesci[i].peso = obj.pesci[i].peso + " kg";
          if (obj.pesci[i].isPezzi) {
            pesoPezziList.push(obj.pesci[i]);
          } else {
            pesoList.push(obj.pesci[i]);
          }

          if (obj.pesci[i].isPezzatura && obj.pesci[i].pezzature.length !== 0) {
            pezzaturaList.push(obj.pesci[i]);
          }
        }
        this.setState({
          pesciPeso: pesoList,
          pesciPesoPezzi: pesoPezziList,
          pesciPezzatura: pezzaturaList,
        });
      });
  }

  render() {
    return (
      <div className="center">
        <DataTable value={this.state.pesciPeso} className="singleColumnStyle">
          <Column field="nome" header="Nome"></Column>
          <Column field="peso" header="Quantità"></Column>
        </DataTable>

        <DataTable
          value={this.state.pesciPesoPezzi}
          className="doubleColumnStyle"
        >
          <Column field="nome" header="Nome"></Column>
          <Column field="peso" header="Quantità"></Column>
          <Column field="pezzi" header="N. Pezzi"></Column>
        </DataTable>

        <DataTable
          value={this.state.pesciPezzatura}
          className="doubleColumnStyle"
        >
          <Column field="nome" header="Nome"></Column>
          <Column field="peso" header="Quantità"></Column>
          <Column field="pezzi" header="N. Pezzi"></Column>
        </DataTable>
      </div>
    );
  }
}

export default Riepilogo;
