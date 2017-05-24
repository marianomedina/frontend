import React from "react";

export default class Footer extends React.Component {
  render() {
    const footerStyle = {
      paddingTop: "10px",
      background: "#FFFFFF"
    }
    return (
      <footer class="footer navbar-fixed-bottom" style={footerStyle}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <p>MarianoMedina.com.ar</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
