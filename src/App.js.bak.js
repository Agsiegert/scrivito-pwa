import React, { Component } from 'react';
import * as Scrivito from 'scrivito';
import CurrentPageMetaData from './Components/CurrentPageMetaData';
import ErrorBoundary from './Components/ErrorBoundary';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import NotFoundErrorPage from './Components/NotFoundErrorPage';
import './App.scss';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import Hello from './Components/Hello';

// Create shared history and pass it to Scrivito
const history = createBrowserHistory();
Scrivito.useHistory(history);



class App extends Component {
  render() {
    return (
      <ErrorBoundary>
      <div className="App">
      
        <div className="content-wrapper">
        
          <Navigation />
          
          
          
          <Router history={ history }>
          <Switch>
            
            <Route path="/hello" render={() => <section className="bg-white"><div className="container"><Hello /></div></section> }/>
            
            <Route path="*" render={() => 
              <div>
                <Scrivito.CurrentPage />
                <NotFoundErrorPage />
              </div>
            }/> 
            
        </Switch>
        </Router>
        
       </div>
        
        <Footer />
        <CurrentPageMetaData />
        
      </div>
    </ErrorBoundary>
    );
  }
}

export default App;


