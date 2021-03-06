import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import Service from "./components/Service";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import CookieConsent from "react-cookie-consent";
import Thank from "./components/Thank";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/polityka-prywatnosci" component={Privacy} />
          <Route path="/dziekujemy-za-wiadomosc" component={Thank} />
        </Switch>

        <Home />
        <About />
        <Service />
        <Project />
        <Blog />
        <Contact />
        <Footer />
        <CookieConsent
          debug={true}
          location="bottom"
          style={{
            background: "#333",
            textAlign: "left",
            paddingBottom: "1rem",
          }}
          buttonStyle={{
            color: "#333",
            background: "#fff",
            fontSize: "14px",
            marginRight: "1rem",
          }}
          buttonText="OK, rozumiem"
          expires={365}
        >
          “W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
          Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
          indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
          dotyczących cookies oznacza, że będą one zamieszczane w Państwa
          urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
          ustawień dotyczących cookies. Więcej  szczegółów w naszej
          <Link
            to="/polityka-prywatnosci"
            // target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgb(204, 204, 204)",
              textDecoration: "none",
            }}
          >
            &nbsp;„Polityce Cookies”/”Polityce Prywatności”.
          </Link>
        </CookieConsent>
      </Router>
    </>
  );
}

export default App;
