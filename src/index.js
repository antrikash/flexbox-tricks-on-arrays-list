import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: [
        "React",
        "Angular",
        "vue",
        "redux",
        "Node",
        "Vuex",
        "VSCode",
        "Webpack",
        "babel",
        "yarn",
        "npm"
      ]
    };
  }
  renderList = () => {
    return (
      <ul>
        {this.state.name.reverse().map((el, index) => {
          const style = index === 8 ? "red" : "";
          return (
            <li className={style} key={index}>
              {el}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

render(<App />, document.getElementById("root"));
