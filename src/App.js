import React, { Component } from 'react';
import Header from './Header';
import Experiences from './Experiences';
import Formations from './Schools';
import Skills from './Skills';
import About from './About';
 
class App extends Component {
    render() {
        return (
            <div className="App">
              <Header/>
              <Experiences/>
              <Formations/>
              <Skills/>
            </div>
        );
    }
}
export default App;
