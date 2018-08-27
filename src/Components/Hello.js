import React, { Component } from 'react';
import * as Scrivito from 'scrivito';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';

// Create shared history and pass it to Scrivito
const history = createBrowserHistory();
Scrivito.useHistory(history);

class Hello extends Component {
  
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
  render() {
    return (
      <Router history={ history }>
      
        <Switch>
          <Route exact path="/hello" render={() => <div><h2>Hello!</h2><p>Hier kann jetzt das ganze Feuerwerk einer React Komponente abgebrannt werden! Du siehst dir diese tolle Komponente jetzt seit </p>{this.state.seconds} Sekunden an.</div>} />
          <Route path="/hello/world" render={() => <h2>Hello World</h2>} />
          <Route path="/hello/universe" render={() => <h2>Hello Universe</h2>} />
        </Switch>
      </Router>
    );
    
  }
  
}

export default Hello;


  
