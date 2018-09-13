import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';
import ButtonTagList from '../../Components/ButtonTagList';


class TabbedBlocksComponent extends React.Component {
  
  constructor(props) {
    super(props);
    const widget = this.props.widget;
    const items = widget.get('items');
    let tags = allTags(items);
    this.state = {
      currentTag: tags[0],
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
    
    /*const filterTags = widget.get('items');
    if (filterTags.length) {
      blockSearch = blockSearch.and('tags', 'equals', filterTags);
    } else if (this.state.currentTag) {
      blockSearch = blocksSearch.and('tags', 'equals', this.state.currentTag);
    }

    //const tags = [...widget.all().facet('tags')].map(facet => facet.name());

    const maxItems = this.props.widget.get('maxItems');
    let blocks;
    if (maxItems) {
      blocks = blockSearch.take(maxItems);
    } else {
      blocks = [...blockSearch];
    }*/
    

    if (!items.length) {
      return (
        <InPlaceEditingPlaceholder center={ true }>
          Select blocks in the widget properties.
        </InPlaceEditingPlaceholder>
      );
    }

    return (
      <div>
        <ButtonTagList
          showTags={ true }
          tags={ allTags(items) }
          currentTag={ this.state.currentTag }
          setTag={ this.setTag }
        />
        <div>
          <div className="row">
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
  const image = widget.get('image');
  const tags = widget.get('tags');
  
  
  const classNames = [ 'col-lg-4', 'text-center', 'squeezed' ];
  if (currentTag && tags.includes(currentTag)) { classNames.pop('squeezed'); }

  return (
    <div className={ classNames.join(' ') }>

        <Scrivito.ImageTag content={ image } height="240" className="img-top"/>
        <div className="card-body">  
          <h2 className="card-title h3">{ title }</h2>
          
          <div className="card-text">{ text }</div>
        </div>
    
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


