import React from "react";
import Header from "./layout/header/header.component";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.component";

import './App.scss';
import Footer from "./layout/footer/footer.component";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
