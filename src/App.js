import React from "react";
import "./styles/styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Monitoria from "./pages/monitoria";
import Portfolio from "./pages/portfolio";
import Aboutme from "./pages/aboutme/aboutme";
import Detalhes from "./pages/portfolio/detalhes";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import Fade from "react-reveal/Fade"


function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap"
        rel="stylesheet"
      ></link>
      <Router>

        <body>
          <div class="Content">
            <Switch>
              <Route path="/portfolio/:id" children={<Detalhes />}></Route>
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/monitoria">
                <Monitoria />
              </Route>
              <Route path="/aboutme">
                <Aboutme />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Fade duration={1000} delay={500}>
          <footer className="Footer">
            <p>
              © 2020 Developed by <b>Rhuana Pires</b>
            </p>
            <div>
              <a
                className="btn-footer btn-one"
                href="https://www.github.com/rhuanapires"
              >
                <FaGithubAlt />
              </a>
              <a
                className="btn-footer btn-one"
                href="https://www.linkedin.com/in/rhuana-pires/"
              >
                <FaLinkedin />
              </a>
            </div>
          </footer>
          </Fade>
        </body>
      </Router>
    </div>
  );
}

export default App;
