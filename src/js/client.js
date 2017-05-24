import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";

import Main from "./pages/Main";
import Cv from "./pages/Cv";
import About from "./pages/About";

const app = document.getElementById('app');

// ReactDOM.render(<div>hei</div>,app);
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path="cv(/:lang)" name="cv" component={Cv}></Route>
      <Route path="about" name="about" component={About}></Route>
    </Route>
  </Router>,
app);