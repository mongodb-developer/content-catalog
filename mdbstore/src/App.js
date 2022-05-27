import React from 'react';

import Header from './components/Header';
import LeftNav from './components/LeftNav';
import GridView from './components/GridView';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchView from "./components/SearchView";
import CategoryView from "./components/CategoryView";

import "./assets/bootstrap.min.css";
import './App.css';

function App() {

  return (
    <Router>
      <div className="App container-fluid">
        <header className="App-header">
          <Header/>
        </header>
        <main>
          <div className="row justify-content-center">
            <div className="col-2">
              <LeftNav />
            </div>
            <div className="col-7">
              <Switch>
                <Route path="/search/:query">
                  <SearchView />
                </Route>
                <Route path="/category/:category">
                  <CategoryView />
                </Route>
                <Route path="/">
                  <GridView items={[]}/>
                </Route>
              </Switch>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
