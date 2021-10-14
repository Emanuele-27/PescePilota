import React, { Component } from "react";
import "./grid.css";
import Detail from "components/detail/detail";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesci: [],
    };
  }

  // componentDidMount() {
  //   fetch("pescePilota.json")
  //     .then((response) => response.json())
  //     .then((json) => JSON.stringify(json))
  //     .then((obj) => this.setState(JSON.parse(obj)));
  // }
/*
  render() {
    return (
      <div className="p-grid">
        {this.state.pesci.map((element, i) => (
          <div key={i} className="p-col-3">
            <Detail
              nome={element.nome}
              isPeso={element.isPeso}
              peso={element.peso}
              isPezzatura={element.isPezzatura}
              pezzature={element.pezzature}
              isPezzi={element.isPezzi}
              pezzi={element.pezzi}
            />
          </div>
        ))}
      </div>
    );
  }*/
  render() {
    return (
      <div className="p-grid">
  <div className="p-col-3">
          <Detail nome="Alici" />
        </div>
        <div className="p-col-3">
          <Detail nome="Calamari" />
        </div>
        <div className="p-col-3">
          <Detail nome="Cozze" />
        </div>
        <div className="p-col-3">
          <Detail nome="CuoreDiMerluzzo" />
        </div>
        <div className="p-col-3">
          <Detail nome="Gamberi" />
        </div>
        <div className="p-col-3">
          <Detail nome="GamberiRossi" />
        </div>
        <div className="p-col-3">
          <Detail nome="Gamberoni" />
        </div>
        <div className="p-col-3">
          <Detail nome="Lupini" />
        </div>
        <div className="p-col-3">
          <Detail nome="Mazzancolle" />
        </div>
        <div className="p-col-3">
          <Detail nome="Merluzzo" />
        </div>
        <div className="p-col-3">
          <Detail nome="OrateG" />
        </div>
        <div className="p-col-3">
          <Detail nome="OrateM" />
        </div>
        <div className="p-col-3">
          <Detail nome="OrateP" />
        </div>
        <div className="p-col-3">
          <Detail nome="PolpoVerace" />
        </div>
        <div className="p-col-3">
          <Detail nome="Rombo" />
        </div>
        <div className="p-col-3">
          <Detail nome="ScampiG" />
        </div>
        <div className="p-col-3">
          <Detail nome="ScampiP" />
        </div>
        <div className="p-col-3">
          <Detail nome="Sogliole" />
        </div>
        <div className="p-col-3">
          <Detail nome="Spada" />
        </div>
        <div className="p-col-3">
          <Detail nome="SpigoleG" />
        </div>
        <div className="p-col-3">
          <Detail nome="SpigoleM" />
        </div>
        <div className="p-col-3">
          <Detail nome="SpigoleP" />
        </div>
        <div className="p-col-3">
          <Detail nome="Veraci" />
        </div>
        </div>
    );
  }
}
export default Grid;
