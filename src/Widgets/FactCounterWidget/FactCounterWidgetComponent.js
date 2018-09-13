import * as React from 'react';
import * as Scrivito from 'scrivito';

class FactCounterComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.widget = this.props.widget;
    
  }

  tick() {
    if(this.state.seconds <  this.val ) {
    this.setState(prevState => ({
      
      seconds: prevState.seconds + 1
      
    }));
  }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 50);
    this.val = this.widget.get('value');
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
    
   <FactContent
      widget={ this.widget }
      sec = {this.state.seconds}
    />
    
    );
  }

}

Scrivito.provideComponent('FactCounterWidget', FactCounterComponent);

const FactContent = Scrivito.connect(({ widget, sec}) => {
  const key = widget.get('key');
  let value = sec;
  const postfix = widget.get('postfix');
  
  return (
    <div className="fact">

        <span className="value">{ value }  { postfix }</span>
        <span className="key"> { key }</span>
        
    </div>
  );
});