import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path='/'
              element={<BestBooks />}
            >
            </Route>
            <Route 
              path='about'
              element={<About />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;