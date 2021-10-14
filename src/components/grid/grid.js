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

  componentDidMount() {
    fetch("http://localhost:3001/findAll")
      .then((response) => response.json())
      .then((json) => JSON.stringify(json))
      .then((obj) => this.setState(JSON.parse(obj)));
  }

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
  }
}
export default Grid;
