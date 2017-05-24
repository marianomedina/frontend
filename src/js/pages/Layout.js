
import React from "react";
import {Link} from "react-router";

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export default class Layout extends React.Component {
  render() {

    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    const layoutStyle = {
      marginBottom: "60px"
    };
    return (
      <div style={layoutStyle}>
        <Nav location={location} />
        <div class="container" style={containerStyle} >
          {this.props.children}
          
        </div>
      </div>
    )
  }
}