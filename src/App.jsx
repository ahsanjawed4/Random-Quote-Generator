import React, { Component } from "react";
import axios from "axios";
import styles from "./App.css";

export default class App extends Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    this.quotation();
  }
  quotation = async () => {
    try {
      const {
        data: {
          slip: { advice },
        },
      } = await axios("https://api.adviceslip.com/advice", {
        method: "GET",
      });
      console.log(advice);
      this.setState({ advice });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="container-fluid">
        <div className="row hero">
          <div className="col-md-4 col-10">
            <div className="serviceBox">
              <button className="title" onClick={this.quotation}>
                Give Me Advice
              </button>
              <div className="service-content">
                <p className="description">{advice}</p>
              </div>
              <div className="service-icon">
                <span>
                  <i className="fa fa-globe"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
