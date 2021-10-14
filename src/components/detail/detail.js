import React, { Component } from "react";
import "./detail.css";
import "../header/header.css";
import { Card } from "react-bootstrap";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pezzi: 0,
      isPezzi: false,
      peso: 0,
      isPeso: false,
      isPezzatura: false,
      pezzature: []
    }
  }

  componentDidMount() {
    let file = "json/".concat(this.props.nome, ".json");
    console.log(file);
    fetch(file)
      .then((response) => response.json())
      .then((json) => JSON.stringify(json))
      .then((obj) => this.setState(JSON.parse(obj)));
  }
  /*
  getCardBody() {
    let peso = (
      <Link
        to={{
          pathname: "/peso",
          query: { name: this.props.nome, peso: this.props.peso }
        }}
      >
        <Button label="Peso" className="p-button-danger red" />
      </Link>
    );
    let pezzi = (
      <Link
        to={{
          pathname: "/pezzi",
          query: { name: this.props.nome, pezzi: this.props.pezzi }
        }}
      >
        <Button label="Pezzi" className="p-button-info blue" />
      </Link>
    );
    let pezzatura = (
      <Link
        to={{
          pathname: "/pezzatura",
          query: { name: this.props.nome, pezzature: this.props.pezzature }
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
  }*/

  getCardBody() {
    let peso = (
      <Link
        to={{
          pathname: "/peso",
          query: { name: this.props.nome, peso: this.state.peso }
        }}
      >
        <Button label="Peso" className="p-button-danger red" />
      </Link>
    );
    let pezzi = (
      <Link
        to={{
          pathname: "/pezzi",
          query: { name: this.props.nome, pezzi: this.state.pezzi }
        }}
      >
        <Button label="Pezzi" className="p-button-info blue" />
      </Link>
    );
    let pezzatura = (
      <Link
        to={{
          pathname: "/pezzatura",
          query: { name: this.props.nome, pezzature: this.state.pezzature }
        }}
      >
        <Button
          label="Pezzatura"
          className="p-button-success pezzaturaB green"
        />
      </Link>
    );
    if (this.state.isPeso) {
      if (this.state.isPezzi) {
        if (this.state.isPezzatura) {
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
        if (this.state.isPezzatura) {
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
      if (this.state.isPezzi) {
        if (this.state.isPezzatura) {
          return (
            <div>
              {pezzi} {pezzatura}{" "}
            </div>
          );
        } else {
          return <div> {pezzi} </div>;
        }
      } else {
        if (this.state.isPezzatura) {
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
