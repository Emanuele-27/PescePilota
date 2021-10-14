import React, { Component } from "react";
import "./detail.css";
import "../header/header.css";
import { Card } from "react-bootstrap";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

class Detail extends Component {

  getCardBody() {
    let peso = (
      <Link
        to={{
          pathname: "/peso",
          query: {
            nome: this.props.nome,
            isPeso: this.props.isPeso,
            peso: this.props.peso,
            isPezzi: this.props.isPezzi,
            pezzi: this.props.pezzi,
            isPezzatura: this.props.isPezzatura,
            pezzature: this.props.pezzature,
          },
        }}
      >
        <Button label="Peso" className="p-button-danger red" />
      </Link>
    );
    let pezzi = (
      <Link
        to={{
          pathname: "/pezzi",
          query: {
            nome: this.props.nome,
            isPeso: this.props.isPeso,
            peso: this.props.peso,
            isPezzi: this.props.isPezzi,
            pezzi: this.props.pezzi,
            isPezzatura: this.props.isPezzatura,
            pezzature: this.props.pezzature,
          },
        }}
      >
        <Button label="Pezzi" className="p-button-info blue" />
      </Link>
    );
    let pezzatura = (
      <Link
        to={{
          pathname: "/pezzatura",
          query: {
            nome: this.props.nome,
            isPeso: this.props.isPeso,
            peso: this.props.peso,
            isPezzi: this.props.isPezzi,
            pezzi: this.props.pezzi,
            isPezzatura: this.props.isPezzatura,
            pezzature: this.props.pezzature,
          },
        }}
      >
        <Button
          label="Pezzatura"
          className="p-button-success pezzaturaB green"
        />
      </Link>
    );
    if (this.props.isPeso) {
      if (this.props.isPezzi) {
        if (this.props.isPezzatura) {
          return (
            <div>
              {peso} {pezzi} <br />
              {pezzatura}{" "}
            </div>
          );
        } else {
          return (
            <div>
              {peso} {pezzi}{" "}
            </div>
          );
        }
      } else {
        if (this.props.isPezzatura) {
          return (
            <div>
              {peso} {pezzatura}{" "}
            </div>
          );
        } else {
          return <div> {peso} </div>;
        }
      }
    } else {
      if (this.props.isPezzi) {
        if (this.props.isPezzatura) {
          return (
            <div>
              {pezzi} {pezzatura}{" "}
            </div>
          );
        } else {
          return <div> {pezzi} </div>;
        }
      } else {
        if (this.props.isPezzatura) {
          return <div> {pezzatura} </div>;
        } else {
          return;
        }
      }
    }
  }

  render() {
    let nome = this.props.nome.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
    let cardBody = this.getCardBody();
    return (
      <Card className="cardBody">
        <Card.Body>
          <Card.Text className="fishName">{nome}</Card.Text>
          {cardBody}
        </Card.Body>
      </Card>
    );
  }
}

export default Detail;
