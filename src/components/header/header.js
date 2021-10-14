import React, { Component } from "react";
import { Button } from "primereact/button";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends Component {

  getButtons() {
    if (this.props.environment === "grid") {
      return (
        <div className="header">
          <Button
            label="Elimina dati"
            icon="pi pi-times"
            iconPos="left"
            className="p-button-danger stamp red"
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

  render() {
    let header = this.getButtons();
    return <div>{header}</div>;
  }
}
export default Header;
