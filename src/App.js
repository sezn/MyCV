import React, { Component } from 'react';
import Header from './Header';
import Experiences from './Experiences';
import Formations from './Formations';
import Skills from './Skills';
 
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
