import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';
import TagList from '../../Components/TagList';


class TabbedBlocksComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTag: '',
    };

    
    this.setTag = this.setTag.bind(this);
  }

  

  setTag(tag) {
    this.setState({
      currentTag: tag,
    });
  }

  render() {
    const widget = this.props.widget;
    const items = widget.get('items');
    

    if (!items.length) {
      return (
        <InPlaceEditingPlaceholder center={ true }>
          Select blocks in the widget properties.
        </InPlaceEditingPlaceholder>
      );
    }

    return (
      <div>
        <TagList
          
          tags={ allTags(items) }
          
          currentTag={ this.state.currentTag }
          setTag={ this.setTag }
        />
        <div>
          <div className="row mb-3">
            {
              items.map((item) =>
                <TabbedBlock
                  key={ item.id() }
                  widget={ item }
                  currentTag={ this.state.currentTag }
                />)
            }
          </div>
          
        </div>
      </div>
    );
  }
}

Scrivito.provideComponent('TabbedBlocksWidget', TabbedBlocksComponent);

const TabbedBlock = Scrivito.connect(({ widget, currentTag }) => {
  
  const text = widget.get('text');
  const title = widget.get('title');
  const tags = widget.get('tags');

  
  

  const classNames = ['col-md-3', 'col-sm-4', 'col-6','text-center'];
  if (currentTag && tags.includes(currentTag)) { classNames.push('squeezed'); }

  return (
    <div className={ classNames.join(' ') }>

        
          
          <h2 className="title">{ title }</h2>
          <div className="card-body">{ text }</div>
        
    
    </div>
  );
});

function allTags(items) {
  const tagsArray = items.map(item => item.get('tags'));

  // flatten tags
  const tags = tagsArray.reduce((a, b) => a.concat(b), []);

  // unique tags
  const uniqueTags = [...new Set(tags)];

  // sort tags
  return uniqueTags.sort();
}


