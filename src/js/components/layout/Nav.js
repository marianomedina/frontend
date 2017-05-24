import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    
    const homeClass = location.pathname === "/" ? "active" : "";
    const cvClass = location.pathname.match(/^\/cv/) ? "active" : "";
    const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";

    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigationo">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-10 col-md-offset-1">
              <div id="bs-example-navbar-collapse1" class={"navbar-collapse " + navClass}>
                <ul class="nav navbar-nav">
                  <li class={homeClass}>
                    <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
                  </li>
                  
                  <li class={"dropdown " + cvClass}>
                    <a href="#" 
                    class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CV <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><Link to="cv/en" onClick={this.toggleCollapse.bind(this)}>English</Link>
                      </li>
                      <li><Link to="cv/es" onClick={this.toggleCollapse.bind(this)}>Spanish</Link>
                      </li>
                    </ul>
                  </li>

                </ul>
              </div>  
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

/*
<li class={aboutClass}>
  <Link to="about" onClick={this.toggleCollapse.bind(this)}>About</Link>
</li>
<li class={cvClass}>
  <Link to="cv" onClick={this.toggleCollapse.bind(this)}>Cv</Link>
</li>
*/

