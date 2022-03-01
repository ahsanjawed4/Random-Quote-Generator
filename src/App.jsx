import React, { Component } from "react";
import axios from "axios";
import styles from "./App.css";
//import { quoteContext } from "./context/context";
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
              {/*
              <quoteContext.Consumer>
                {({ editing, inc, dec, typing, fname, lname, btn }) => {
                  return (
                    <>
                      <div className="d-lg-block d-none">
                        <h1>{editing}</h1>
                        <h1>{fname}</h1>
                        <div className="btn-group btn-group-lg mb-5">
                          <button
                            className="btn btn-primary btn-lg p-1 rounded"
                            onClick={inc}
                          >
                            Increment
                          </button>
                          <button
                            className="btn btn-danger text-light btn-lg p-1 rounded ml-2"
                            onClick={btn}
                          >
                            Value
                          </button>
                          <button
                            className="btn btn-dark text-light btn-lg p-1 rounded ml-2"
                            onClick={dec}
                          >
                            Decrement
                          </button>
                          <button
                            className="btn btn-warning text-dark font-weight-bold btn-lg p-1 rounded ml-2"
                            onClick={typing}
                          >
                            Check Type
                          </button>
                        </div>
                      </div>
                    </>
                  );
                }}
              </quoteContext.Consumer>
              */}
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
