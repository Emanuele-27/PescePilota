import React, { Component } from "react";
import "./grid.css";
import Detail from "components/detail/detail";
import {withRouter} from 'react-router-dom';
import Header from 'components/header/header';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesci: [],
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_SERVICE_HOST+"read"+this.props.match.params.day)
      .then((response) => response.json())
      .then((json) => JSON.stringify(json))
      .then((obj) => this.setState(JSON.parse(obj)));
  }

  render() {
    return (
      <div>
      <Header environment="grid" day={this.props.match.params.day}/>
      <div className="p-grid">
        {this.state.pesci.map((element, i) => (
          <div key={i} className="p-col-3">
            <Detail
              day={this.props.match.params.day}
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
      </div>

    );
  }
}
export default withRouter(Grid);