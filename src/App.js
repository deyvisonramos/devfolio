import React from "react";
import Header from "./layout/header/header.component";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home.component";
import Work from "./pages/work/work.component";
import About from "./pages/about/about.component";
import Contact from "./pages/contact/contact.component";

import "./App.scss";
import Footer from "./layout/footer/footer.component";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
