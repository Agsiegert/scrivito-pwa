import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('ArticleHeaderWidget', ({ widget }) => {
  const classNames = [];
  if (widget.get('alignment')) {
    classNames.push(`text-${widget.get('alignment')}`);
  }

  return (

    <div>
    <Scrivito.ContentTag
      tag="h1"
      className={ classNames.join(' ') }
      content={ widget }
      attribute="headline"
    />
    <Scrivito.ContentTag
      tag="div"
      className={ classNames.join(' ') }
      content={ widget }
      attribute="text"
    />
    </div>
  );
});
