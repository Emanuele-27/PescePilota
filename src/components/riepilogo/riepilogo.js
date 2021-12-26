import "./riepilogo.css";
import { DataTable } from "primereact/datatable";
import { withRouter } from 'react-router-dom';
import { Column } from "primereact/column";
import Header from 'components/header/header';
import React, { Component } from "react";

class Riepilogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesci: [],
      expandedRows: null
    };
    this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_SERVICE_HOST + "read" + this.props.match.params.day)
      .then((response) => response.json())
      .then((json) => JSON.stringify(json))
      .then((jsonObj) => {
        let obj = JSON.parse(jsonObj);
        let pesciList = [];

        for (let i in obj.pesci) {
          if ((obj.pesci[i].isPeso && obj.pesci[i].peso > 0) ||
            (obj.pesci[i].isPezzi && obj.pesci[i].pezzi > 0) ||
            (obj.pesci[i].isPezzatura && obj.pesci[i].pezzature.length !== 0)) {
            obj.pesci[i].nome = obj.pesci[i].nome.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
            if (obj.pesci[i].peso > 0)
              obj.pesci[i].peso = obj.pesci[i].peso.toFixed(3).replace('.', ',') + " kg";
            pesciList.push(obj.pesci[i]);
          }
        }

        this.setState({
          pesci: pesciList,
        });
      });
  }

  render() {
    return (

      <div>
        <Header environment="riepilogo" day={this.props.match.params.day} />
        <div id="printSelector">
          <div className="dayR">{this.props.match.params.day}</div>
          <div id="toPrint" className="centerRiep">
            <DataTable value={this.state.pesci} expandedRows={this.state.expandedRows} className="doubleRiepStyle"
              onRowToggle={(e) => {
                this.setState({
                  expandedRows: e.data
                });
              }}
              rowExpansionTemplate={this.rowExpansionTemplate} emptyMessage="Nessun elemento presente"
            >
              <Column className="makeInvAfter" expander style={{ width: '3em' }} />
              <Column field="nome" header="Nome" />
              <Column field="pezzi" header="N. Pezzi" />
              <Column field="peso" header="Peso" />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }

  rowExpansionTemplate(data) {
    return (
      <div>
        <DataTable value={data.pezzature} className="doubleRiepStyle"
        emptyMessage="Nessun elemento presente">
          <Column field="n" header="N."></Column>
          <Column field="peso" header="Peso"></Column>
        </DataTable>
      </div>
    );
  }
}

export default withRouter(Riepilogo);
