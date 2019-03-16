import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./src/Root";
import Database from './src/Database';

const database = new Database();

ReactDOM.render(<Root />, document.getElementById("root"));
