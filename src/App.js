import React, { Component } from 'react';
import { BrowserRouter as Router,  Route} from 'react-router-dom';



// import utilities
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import pages
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

//iLayout
import Header from './components/layout/Header';

class App extends Component {

    render() {
            return(
                <Router>
                    <body className="App">
                       
                        <Header />
                        <Route  exact path="/" component={Home} />
                        <Route  exact path="/about" component={About} />
                        <Route  exact path="/contact" component={Contact} />
                        <Route  exact path="/projects" component={Projects} />
                     
                    </body>
                </Router>
          );
    }
}
export default App;