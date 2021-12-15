import "./home.css";
import React, { Component } from "react";
import { SelectButton } from 'primereact/selectbutton';
import Header from 'components/header/header';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      day: "23"
    };
   
  }

  render() {
    let days = [
      {label: "23"},
      {label: "24"}
    ];
    return (
      <div>
        <Header environment="home" day={this.state.day} />
          <div className="day">
            Giorno selezionato: 
            <div className="num">{this.state.day}</div>
          </div>
<SelectButton className="selectDay" value={days} options={days} onChange={(e) => this.setState( {day :e.value.label} )}/>

        
      </div>
    );
  }

}

export default Home;
