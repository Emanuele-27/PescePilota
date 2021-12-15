import React, { Component } from "react";
import "./riepilogo.css";
import { DataTable } from "primereact/datatable";
import {withRouter} from 'react-router-dom';
import { Column } from "primereact/column";
import Header from 'components/header/header';

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
    fetch(process.env.REACT_APP_SERVICE_HOST+"read"+this.props.match.params.day)
      .then((response) => response.json())
      .then((json) => JSON.stringify(json))
      .then((jsonObj) => {
        let obj = JSON.parse(jsonObj);
        let pesoList = [];
        let pesoPezziList = [];
        let pezzaturaList = [];
        for (let i in obj.pesci) {
          obj.pesci[i].nome = obj.pesci[i].nome.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
          if (obj.pesci[i].peso > 0)
            obj.pesci[i].peso = obj.pesci[i].peso.toFixed(3).replace('.', ',') + " kg";
          else obj.pesci[i].peso = obj.pesci[i].peso + " kg";

          if (obj.pesci[i].isPezzi) {
            pesoPezziList.push(obj.pesci[i]);
          } else {
            pesoList.push(obj.pesci[i]);
          }

          if (obj.pesci[i].isPezzatura && obj.pesci[i].pezzature.length !== 0) {
            for (let j in obj.pesci[i].pezzature) {
              let object = {
                nome: obj.pesci[i].nome,
                n: obj.pesci[i].pezzature[j].n,
                peso: obj.pesci[i].pezzature[j].peso.toFixed(3).replace('.', ',') + " kg",
              };
              pezzaturaList.push(object);
            }
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
    const headerPeso = <div className="table-header">Quantità</div>;

    const headerPesoPezzi = (
      <div className="table-header">Quantità e Pezzi</div>
    );

    const headerPezzature = <div className="table-header">Pezzature</div>;

    return (

      <div>
     <Header environment="riepilogo" day={this.props.match.params.day}/>
     <div id="printSelector">
     <div className="dayR">{this.props.match.params.day}</div>
        <div id="toPrint" className="centerRiep">
          <DataTable
            sortMode="single"
            sortField="peso"
            sortOrder={-1}
            value={this.state.pesciPeso}
            className="singleRiepStyle"
            header={headerPeso}
            emptyMessage="Nessun elemento presente"
          >
            <Column field="nome" header="Nome"></Column>
            <Column field="peso" header="Quantità"></Column>
          </DataTable>

          <DataTable
            sortMode="single"
            sortField="peso"
            sortOrder={-1}
            value={this.state.pesciPesoPezzi}
            className="doubleRiepStyle centerTable"
            header={headerPesoPezzi}
            emptyMessage="Nessun elemento presente"
          >
            <Column field="nome" header="Nome"></Column>
            <Column field="peso" header="Quantità"></Column>
            <Column field="pezzi" header="N. Pezzi"></Column>
          </DataTable>

          <DataTable
            value={this.state.pesciPezzatura}
            rowGroupMode="rowspan"
            groupField="nome"
            sortMode="single"
            sortField="nome"
            sortOrder={1}
            className="doubleRiepStyle"
            header={headerPezzature}
            emptyMessage="Nessun elemento presente"
          >
            <Column field="nome" header="Nome"></Column>
            <Column field="n" header="N. Pezzi"></Column>
            <Column field="peso" header="Peso"></Column>
          </DataTable>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(Riepilogo);
