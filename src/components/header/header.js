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
          <Button
            label="Stampa"
            icon="pi pi-print"
            iconPos="left"
            className="p-button-info stamp blue"
          />
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
        </div>
      );
    }
  }

  delete(param) {
    let requestOptions = {
      method: "DELETE",
    };

    fetch("http://localhost:3001/delete", requestOptions).then((response) => {
      if (response.status === 200) window.location.reload();
    });
  }

  render() {
    let header = this.getButtons();
    return <div>{header}</div>;
  }
}
export default Header;
