import React, { Component } from "react";
import { Button } from "primereact/button";
import "./header.css";
import { Link } from "react-router-dom";
import { confirmPopup } from "primereact/confirmpopup";

class Header extends Component {
  constructor(props) {
    super(props);
    this.confirm = this.confirm.bind(this);
    this.delete = this.delete.bind(this);
    this.print = this.print.bind(this);
  }

  confirm(event) {
    confirmPopup({
      target: event.currentTarget,
      message: "Sei sicuro di voler eliminare i dati?",
      icon: "pi pi-exclamation-triangle",
      accept: this.delete,
      acceptLabel: "Sì",
      acceptClassName: "p-button-danger red",
      rejectClassName: "p-button-danger redColor",
    });
  }

  getButtons() {
    if (this.props.environment === "grid") {
      return (
        <div className="header">
          <Button
            label="Elimina dati"
            icon="pi pi-times"
            iconPos="left"
            className="p-button-danger stamp red"
            onClick={this.confirm}
          />
          <Link
            to={{
              pathname: "/riepilogo",
            }}
          >
            <Button
              label="Vai al Riepilogo"
              icon="pi pi-file-excel"
              iconPos="left"
              className="p-button-info stamp blue"
            />
          </Link>
        </div>
      );
    } else if (this.props.environment === "calc") {
      return (
        <div className="header">
          <Link to="/">
            <Button
              label="Indietro"
              icon="pi pi-arrow-left"
              iconPos="left"
              className="p-button-info stamp blue"
            />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="header">
          <Link to="/">
            <Button
              label="Indietro"
              icon="pi pi-arrow-left"
              iconPos="left"
              className="p-button-info stamp blue"
            />
          </Link>
          <Button
            label="Stampa"
            icon="pi pi-print"
            iconPos="left"
            className="p-button-info stamp blue"
            onClick={() => this.print()}
          />
        </div>
      );
    }
  }

  print() {
    let printContents = document.getElementById("printSelector").innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;

  }

  delete(param) {
    let requestOptions = {
      method: "DELETE",
    };

    fetch("http://192.168.1.101:3001/delete", requestOptions).then((response) => {
      if (response.status === 200) window.location.reload();
    });
  }

  render() {
    let header = this.getButtons();
    return <div>{header}</div>;
  }
}
export default Header;
