import * as React from 'react';
import * as Scrivito from 'scrivito';



class FactComponent extends React.Component {
  

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
    <div className="fact">
    <Scrivito.ContentTag
      content={ this.props.widget }
      attribute="value"
      className="value"
      tag="span"
    />
    <Scrivito.ContentTag
      content={ this.props.widget }
      attribute="key"
      className="key"
      tag="span"
    />
  </div>
    );
  }

}

Scrivito.provideComponent('FactWidget', FactComponent);

