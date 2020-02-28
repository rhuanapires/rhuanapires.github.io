import React from "react";
import logo from "./images/horizontallogo.png";
import "./styles/styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Monitoria from "./pages/monitoria";
import Portfolio from "./pages/portfolio";
import Aboutme from "./pages/aboutme/aboutme";
import Detalhes from "./pages/portfolio/detalhes";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="Menu">
            <link
              href="https://fonts.googleapis.com/css?family=Arizonia|Pacifico|Parisienne&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed&display=swap"
              rel="stylesheet"
            />
            <div className="Link-img">
              <Link to="/">
                <img src={logo} className="Logo-main" alt="Rhuana Pires logo" />
              </Link>
            </div>
            <nav>
              <Link className="Link" to="/">
                Home
              </Link>
              <Link className="Link" to="/portfolio">
                Portfolio
              </Link>
            </nav>
          </div>
        </header>
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
          <footer className="Footer">
            <p>
              © 2020 Developed by <b>Rhuana Pires</b>
            </p>
            <hr></hr>
          </footer>
        </body>
      </Router>
    </div>
  );
}

export default App;
