import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/home/Home.js";
import AboutUs from "./pages/about-us/AboutUs.js";
import Projects from "./pages/projects/Projects.js";
import Contact from "./pages/contact/Contact.js";
import ProjectDetails from "./pages/project-details/ProjectDetails.js";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/iletisim" component={Contact} />
          <Route path="/hakkimizda" component={AboutUs} />
          <Route exact path="/projelerimiz" component={Projects} />
          <Route
            exact
            path="/projelerimiz/armedem-apt"
            component={ProjectDetails}
          />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
