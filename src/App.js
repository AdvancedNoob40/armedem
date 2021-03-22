import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home.js";
import AboutUs from "./pages/about-us/AboutUs.js";
import Projects from "./pages/projects/Projects.js";
import Contact from "./pages/contact/Contact.js";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/iletisim" component={Contact} />
          <Route path="/hakkimizda" component={AboutUs} />
          <Route path="/projelerimiz" component={Projects} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
