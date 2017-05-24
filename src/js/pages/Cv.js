import React from "react";

var ListParagraph = React.createClass({
  render: function() {
    const {elements, lang} = this.props;
    var pars = elements.map(function(p) {
      return <p key={p.key}>{p[lang]}</p>;
    });
    return <div>{pars}</div>;
  }
});

var WorkExperience = React.createClass({
  render: function() {
    const {title, jobs} = this.props.experience;
    const {lang} = this.props;
    const iconMargin = {
      marginLeft: "15px"
    }

    var jobViews = jobs.map(function(j) {
      var jobDetails = j.details.map(function(jd) {
        return (
          <li key={jd.key}>{jd[lang]}</li>
        )
      });
      return (
        <div key={j.key}>
          <h3>{j.position[lang]} - <a target='_blank' href={j.company.link? j.company.link : "#"}>{j.company.name? j.company.name : ""}</a>. {j.from[lang]} - {j.to[lang]}. </h3>
          <ul>
            {jobDetails}
          </ul>
        </div>
      );
    });
    
    return (
      <div>
        <h2>
          <i class="fa fa-terminal" aria-hidden="true"></i>
          <span style={iconMargin}>{title[lang]}</span>
        </h2>
        {jobViews}
      </div>
    );
  }
});

var Education = React.createClass({
  render: function() {
    const {courses, studies} = this.props.education;
    const {lang} = this.props;
    const iconMargin = {
      marginLeft: "15px"
    }

    var coursesView = courses.list.map(function(c) {
      return (
        <li key={c.key}>
          {c[lang]}
        </li>
      );
    });

    var studiesView = studies.list.map(function(s) {
      return (
        <li key={s.key}>
          {s[lang]}
        </li>
      );
    });
    
    return (
      <div>
        <h2>
          <i class="fa fa-book" aria-hidden="true"></i>
          <span style={iconMargin}>{courses.title[lang]}</span>
        </h2>
        <ul>
          {coursesView}
        </ul>
        <hr/>
        <h2>
          <i class="fa fa-mortar-board" aria-hidden="true"></i>
          <span style={iconMargin}>{studies.title[lang]}</span>
          </h2>
        <ul>
          {studiesView}
        </ul>
      </div>
    );
  }
});

var Skills = React.createClass({
  render: function() {
    const {skills} = this.props;
    const {lang} = this.props;
    const iconMargin = {
      marginLeft: "15px"
    }

    var types = skills.types.map(function(t) {
      var techs = t.techs.map(function(tech) {
        return (
          <li>
            {tech}
          </li>
        );
      });
      return (
        <div class="col-md-6 col-sm-12" key={t.key}>
          <h3>{t.name[lang]}</h3>
          <ul>
            {techs}
          </ul>
        </div>
      );
    });
    
    return (
      <div>
        <h2>
          <i class="fa fa-code" aria-hidden="true"></i>
          <span style={iconMargin}>{skills.title[lang]}</span>
        </h2>
        <div class="row">
          {types}
        </div>
      </div>
    );
  }
});

var Languages = React.createClass({
  render: function() {
    const {languages} = this.props;
    const {lang} = this.props;
    const iconMargin = {
      marginLeft: "15px"
    }

    var languagesView = languages.langs.map(function(l) {
      return (
        <li key={l.key}>
          {l[lang]}
        </li>
      );
    });
    
    return (
      <div>
        <h2>
          <i class="fa fa-language" aria-hidden="true"></i>
          <span style={iconMargin}>{languages.title[lang]}</span>
        </h2>
        <ul>
          {languagesView}
        </ul>
      </div>
    );
  }
});

export default class Cv extends React.Component {
  render() {
    const {params} = this.props;
    const lang = params.lang || "en";

    const cv = {
      name: "Mariano Roberto Medina",
      career: {
        en: "Software Engineer",
        es: "Ingeniero en Software"
      },
      personalData: [
        {
          key: 1,
          en: "Date of birth: July 31th - 1987",
          es: "Fecha de nacimiento: 31 de Julio de 1987"
        },
        {
          key: 2,
          en: "Nationality: Argentine",
          es: "Nacionalidad: Argentina"
        },
        {
          key: 3,
          en: "Mobile +54 3816505460",
          es: "Telefono +54 3816505460"
        },
        {
          key: 4,
          en: "Marital Status: Single",
          es: "Estado: Soltero"
        },
      ],
      summary: [
        {
          key: 1,
          en: "Engineer and Agile Developer with 3+ years of experience.",
          es: "Ingeniero y desarrollador Agile con mas de 3 años de experiencia."
        },
        {
          key: 2,
          en: "Results-driven, focused, helpful, friendly.",
          es: "Orientado a obtener resultados, enfocado en rendimiento de tiempo y fechas limite, siempre prestando atencion al trabajo de sus pares para completar los objetivos globales del equipo."
        },
        {
          key: 3,
          en: "Currently working on enhance his career as a Full Stack JS Developer.",
          es: "Hoy en dia trabajando para mejorar su carrera como desarrollador JavaScript Full Stack."
        }
      ],
      workExperience: {
        title: {
          en: "Work experience",
          es: "Experiencia"
        },
        jobs: [
          {
            key: 0,
            position: {
              en: "PHP Developer",
              es: "PHP Developer"
            },
            company: {
              name: "Proyungas.com.ar",
              link: "www.proyungas.com.ar"
            },
            from: {
              en: "April 2016",
              es: "Abril de 2016"
            },
            to: {
              en: "Currently working here",
              es: "Actualmente trabajando aqui"
            },
            details: [
              {
                key: 1,
                en: "Mariano works on the frontend under a Wordpress platform, being aware of any details in each view following strict rules of desing, responsive criteria and UX parameters",
                es: "Mariano trabaja en el frontend bajo una plataforma Wordpress, estando al tanto de cualquier detalle en cada vista siguiendo estrictas reglas de diseño, criteria web y mobile y parametros de UX"
              }
            ]
          },
          {
            key: 1,
            position: {
              en: "JavaScript Developer",
              es: "JavaScript Developer"
            },
            company: {
              name: "Infomanager",
              link: "www.infomanager.com.ar"
            },
            from: {
              en: "November 2016",
              es: "Noviembre de 2016"
            },
            to: {
              en: "March 2017",
              es: "Marzo de 2017"
            },
            details: [
              {
                key: 1,
                en: "He was working as web developer, in charge of enhancement, testing and maintenance of a webapp built up using ExtJs 4 and its migration to ExtJs 6",
                es: "Trabajando como web developer, esta a cargo de la mejora, testeo y mantenimiento de una webapp desarrollada usando ExtJs 4. El principal desafio fue su migracion a ExtJs 6"
              },
              {
                key: 2,
                en: "His daily job in this area included responsive and functional testing, development of new features, software design and continuous research about new UX and software-architecture trends",
                es: "Su trabajo diario consitio en testing responsive y funcional, desarrollo de nuevas caracteristicas, criterios de diseño, e investigacion continua de nuevas tendencias de UX y arquitectura de Software"
              },
              {
                key: 3,
                en: "He was also in charge of documentation, and research about new Automated Testing and Continuous Delivery methods",
                es: "Esta a cargo de la documentacion, y de la investigacion sobre testeo automatizado y Continuous Delivery"
              },
              {
                key: 4,
                en: "Finally, also worked on testing an external API (RESTful) via Postman",
                es: "Ultimamente tambien trabajando en el testeo de una API externa usando Postman"           
              }
            ]
          },
          {
            key: 2,
            position: {
              en: "Semisenior Software Developer",
              es: "Semisenior Software Developer"
            },
            company: {
              name: "Sovos",
              link: "www.sovos.com"
            },
            from: {
              en: "April 2015",
              es: "Abril de 2015"
            },
            to: {
              en: "October 2016",
              es: "Octubre de 2016"
            },
            details: [
              {
                key: 1,
                en: "He was in charge of creation and maintenance of automated tests (unit, functional, performance, load and stress test-cases) using tools like DUnit, Mocha, Jasmine and Soap/LoadUI-Pro",
                es: "Como miembro de el equipo de automatizacion Mariano estuvo a cargo de la creacion y mantenimiento de tests automatizados (unitarios, funcionales, de performance y carga) usando herramientas como DUnit, Mocha, Jasmine y SoapUI"
              },
              {
                key: 2,
                en: "He was also in charge of maintenance and development of new modules for a web-based tool that automatically tracks the testing results saving them within a MySQL instance, integration with Jenkins and Git",
                es: "Tambien a cargo del mantenimiento y desarrollo de nuevos modulos para una herramienta basada en web, que hace seguimient de los resultados del testing automatizado, guardando dichas estadisticas en MySQl e integracion con Jenkins y Git"
              },
              {
                key: 3,
                en: "In charge of an integrations between internal tools and Github's repos through REST web-hooks.",
                es: "Se encargo tambien de desarrollar un modulo de integracion entre herramientas internas y repos de Github mediante webhooks."
              },
              {
                key: 4,
                en: "He was also responsible for building a Powershell Framework that executes a suite of tests againts an internal module",
                es: "Finalmente, era responsable del desarrollo de un framework en tecnologia powershell que ejecute una suite de tests para medir a performance"
              },
            ] 
          },
          {
            key: 3,
            position: {
              en: "Freelancer MEAN Developer",
              es: "Freelancer MEAN Developer"
            },
            company: {
              name: "",
              link: ""
            },
            from: {
              en: "July 2016",
              es: "Julio de 2016"
            },
            to: {
              en: "July 2016",
              es: "July de 2016"
            },
            details: [
              {
                key: 1,
                en: "Development of a WebApp used as travel's manager, using MEAN stack with a RESTful layer",
                es: "Desarrollo de una webapp usada para gestion de viajes, usando stack de tecnologias MEAN con una capa RESTful"
              },
            ] 
          },
          {
            key: 4,
            position: {
              en: "Frontend Developer",
              es: "Frontend Developer"
            },
            company: {
              name: "The UX Department",
              link: "theuxdepartment.com"
            },
            from: {
              en: "April 2013",
              es: "Abril de 2013"
            },
            to: {
              en: "April 2015",
              es: "April de 2015"
            },
            details: [
              {
                key: 1,
                en: "His daily job included development of frontend pages, following mockups, wireframes and UX requirements; based on HTML5, js and jQuery and several frameworks like Bootstrap, jQuery UI, jQuery Mobile and Foundation",
                es: "Su trabajo diario incluyo el desarrollo y maquetado de sitios web, siguiendo diseños, respetando rigurosos standares de UX; basado en HTML5, vanilla Js y jQuery como principal framework (ademas de Bootstrap, jQuery UI, jQuery Mobile, Foundation)"
              },
              {
                key: 2,
                en: "Advice and consulting for crossbrowsing support for IE8+, Firefox, Safari and Chrome",
                es: "Consultoria para compatibilidad entre Firefox, Chrome, Safari e IE8+"
              },
              {
                key: 3,
                en: "He was also responsable of the creation of Wordpress sites, manipulating the post-types and taxonomies",
                es: "Tambien fue responsable de la creacion de sitios Wordpress, manipulando el codigo para la creacion de nuevas taxonomias y post-types"
              }
            ] 
          },
          {
            key: 5,
            position: {
              en: "Freelancer HTML5",
              es: "Freelancer hT"
            },
            company: {
              name: "",
              link: ""
            },
            from: {
              en: "July 2014",
              es: "Julio de 2014"
            },
            to: {
              en: "July 2014",
              es: "Julio de 2014"
            },
            details: [
              {
                key: 1,
                en: "Creation of the frontend layout for Bashem's web site based on HTML5, CSS3, Foundation and jQuery plugins for sliders and other UI Effects",
                es: "Maquetado Frontend de Bashem, basado en HTML5, CSS3 Foundation y jQuery"
              }
            ] 
          }
        ]
      },
      education: {
        courses: {
          title: {
            en: "Courses",
            es: "Cursos"
          },
          list: [
            {
              key: 1,
              en: "Object Oriented Programming in Java - Engineer Nieto",
              es: "Programacion Orientada a Objetos en Java - Ingeniero Nieto"
            },
            {
              key: 2,
              en: "Fusion AngularJs - Gonzalo Mercado. Sovos Compliance",
              es: "Fusion AngularJs - Gonzalo Mercado. Sovos Compliance"
            },
            {
              key: 3,
              en: "Shaping up with Angular.js",
              es: "Shaping up with Angular.js",
            },
            {
              key: 4,
              en: "JavaScript Best Practices",
              es: "JavaScript Best Practices",
            },
            {
              key: 5,
              en: "Real Time Web with Node.js",
              es: "Real Time Web with Node.js",
            },
            {
              key: 6,
              en: "The Magical Marvels of MongoDB",
              es: "The Magical Marvels of MongoDB",
            },
            {
              key: 7,
              en: "Building Blocks of Express.js",
              es: "Building Blocks of Express.js",
            }
          ]
        },
        studies: {
          title: {
            en: "Academic Studies",
            es: "Estudios"
          },
          list: [
            {
              key: 1,
              en: "Bachelor, Computer Science - University of Tucuman; January 2005 - August 2013",
              es: "Ingeniero en Computacion; Enero de 2005 hasta Agosto 2013"
            }
          ]
        }
      },
      skills : {
        title: {
          en: "Skills",
          es: "Habilidades"
        },
        types: [
          {
            key: 1,
            name: {
              en: "Version Control System",
              es: "Sistema de control de versiones"
            },
            techs: [
              "GIT",
              "SVN - Tortoise"
            ]
          },
          {
            key: 2,
            name: {
              en: "Project Management Tools",
              es: "herramientas de gestion de tareas"
            },
            techs: [
              "Trello",
              "Version One",
              "Jira",
            ]
          },
          {
            key: 3,
            name: {
              en: "TDD and Test Frameworks",
              es: "TDD y frameworks de testing"
            },
            techs: [
              "DUnit",
              "Karma",
              "Mocha",
              "JUnit",
              "SoapUI/LoadUI",
              "NeoLoad",
              "PostMan",
            ]
          },  
          {
            key: 4,
            name: {
              en: "CSS Frameworks",
              es: "Frameworks de hojas de estilo en cascada"
            },
            techs: [
              "Foundation",
              "Bootstrap",
              "960 Grid System",
            ]
          },
          {
            key: 5,
            name: {
              en: "Frameworks JS y PHP",
              es: "Frameworks de JavaScript y PHP"
            },
            techs: [
              "jQuery",
              "Angular Js",
              "React Js",
              "Express",
              "CodeIgniter",
            ]
          },
          {
            key: 6,
            name: {
              en: "Programming Languages",
              es: "Lenguajes de Programacion"
            },
            techs: [
              "Javascript",
              "PHP",
              "Java",
              "Delphi",
              "C++"
            ]
          },
          {
            key: 7,
            name: {
              en: "IDEs,Text Editors and other debuggers",
              es: "Editores de texto y herramientas para desarrollo y debugging"
            },
            techs: [
              "Sublime Text 2 y 3",
              "Sencha Architect",
              "Firebug (Firefox)",
              "Sencha Inspector (chrome)",
              "Google Chrome Developer Tools- Js Debugger",
              "Delphi 2007",
            ]
          }
        ]
      },
      languages: {
        title: {
          en: "languages",
          es: "Idiomas"
        },
        langs: [
          {
            key: 1,
            en: "Spanish - Native speaker",
            es: "Español - nativo"
          },
          {
            key: 2,
            en: "English - Full professional proficiency",
            es: "Ingles - Proactivo Profesional" 
          }
        ]
      }
    }

    return (
      <div class="cv">
        <div class="row general-data">
          <div class="col-lg-10 col-lg-offset-1 col-md-12"> 
            <div class="h1">{cv.name}</div>
            <hr/>
            <h2><small>{cv.career[lang]}</small></h2>
            <ListParagraph elements={cv.personalData} lang={lang}/>
            <ListParagraph elements={cv.summary} lang={lang}/>
            <hr/>
          </div>
        </div>
        <div class="row work-experience">
          <div class="col-lg-10 col-lg-offset-1 col-md-12"> 
            <WorkExperience experience={cv.workExperience} lang={lang}/>
            <hr/>
          </div>
        </div>
        <div class="row education">
          <div class="col-lg-10 col-lg-offset-1 col-md-12"> 
            <Education education={cv.education} lang={lang}/>
            <hr/>
          </div>
        </div>
        <div class="row skills">
          <div class="col-lg-10 col-lg-offset-1 col-md-12"> 
            <Skills skills={cv.skills} lang={lang}/>
            <hr/>
          </div>
        </div>
        <div class="row languages">
          <div class="col-lg-10 col-lg-offset-1 col-md-12"> 
            <Languages languages={cv.languages} lang={lang}/>
          </div>
        </div>
      </div>
    )
  }

}
