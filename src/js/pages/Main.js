import React from "react";
import { Indexa, a } from "react-router";

export default class Main extends React.Component {
  render() {
    const title = "About Mariano";
    const content = [
      <p>Mariano is an argentinian computing engineer. He has been working as frontend developer, agile/scrum programmer and, lately, building Cordova apps.</p>,
      <p>After he finished his last project, he started a trip to Europe, where he became a voluntary on a beautiful farm in Bornholm, Denmark.</p>,
      <p>He is currently living in Aarhus, Denmark, working on his own web site and learning danish. He is available for new projects.</p>,
      <p>Mariano likes to ride his bike, running in the park, reading Tolkien's books, and spending time refactoring his own code; He also loves TV series, movies and all kinds of music.</p>
    ];
    const imgSrc = "assets/perfil.jpg";
    const imgProfileWrapperStyle = {
      marginTop: "60px",
      textAlign: "center",
      marginBottom: "40px"
    };
    const imgProfileStyle = {
      borderRadius: "50%",
      width: "100%",
      maxWidth: "200px"
    };
    const socialMediaTextStyle = {
      marginLeft: "10px"
    };

    const socialMediaTitleStyle = {
      marginTop: "50px",
      marginBottom: "30px"
    };

    const socialMediaMarginTop = {
      marginTop: "30px"
    };

    const socialLink ={
      color: "#333333"
    }

    return (
      <div class="about">
        <div class="row">
          <div class="col-sm-12 col-md-7 col-md-offset-1">
            <h2>{title}</h2>
            <div> 
              {content}
            </div>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="imgProfile" style={imgProfileWrapperStyle}>
              <img style={imgProfileStyle} src={imgSrc} />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-10 col-md-offset-1">
            <h3 class="text-center" style={socialMediaTitleStyle}>Social Media</h3>
          </div>
          <div class="col-sm-12 col-md-2 col-md-offset-3 text-center">
            <a href="https://www.facebook.com/nanomedina87" target="_blank" style={socialLink}>
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
              <span style={socialMediaTextStyle}>/nanomedina87</span>
            </a>
          </div>
          <div class="col-sm-12 col-md-2 text-center">
            <a href="https://www.instagram.com/mr_medina87" target="_blank" style={socialLink}>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <span style={socialMediaTextStyle}>/mr_medina87</span>
            </a>
          </div>
          <div class="col-sm-12 col-md-2 text-center">
            <a href="https://github.com/mrmedina87" target="_blank" style={socialLink}>
              <i class="fa fa-github" aria-hidden="true"></i>
              <span style={socialMediaTextStyle}>/mrmedina87</span>
            </a>
          </div>
          <div class="col-sm-12 col-md-2 col-md-offset-4 text-center" style={socialMediaMarginTop}>
            <a href="https://www.linkedin.com/in/mariano-medina-46432749/?locale=en_US" style={socialLink}>
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              <span style={socialMediaTextStyle}>/mariano-medina</span>
            </a>
          </div>
          <div class="col-sm-12 col-md-2 text-center" style={socialMediaMarginTop}>
            <a href="mailto:m_medina87@hotmail.com" style={socialLink}>
              <i class="fa fa-envelope-open" aria-hidden="true"></i>
              <span style={socialMediaTextStyle}>m_medina87</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}