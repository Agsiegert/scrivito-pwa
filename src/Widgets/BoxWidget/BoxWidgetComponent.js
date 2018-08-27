import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('BoxWidget', ({ widget }) => {
  const classNames = ['card-theme'];
  const border = widget.get('border');
  const gradient = widget.get('useGradient');
  const shadow = widget.get('shadow');
  let backgroundColor = widget.get('backgroundColor') || 'transparent';
  const rounded = widget.get('rounded');
  //if (widget.get('boxStyle') !== 'white') { classNames.push('card-theme'); }

  if(gradient === 'yes')
    classNames.push(`bg-gradient-${backgroundColor}`);
  else
    classNames.push(`bg-${backgroundColor}`);

  if(rounded === 'yes')
    classNames.push('card');

  if(border === 'yes')
    classNames.push('deco-border');
    if (shadow === 'small')
    classNames.push('shadow');
else if (shadow === 'large')
    classNames.push('shadow-lg');
if (border === 'yes')
    classNames.push('deco-border');

  if (widget.get('useOffset') === 'yes') { classNames.push('box-offset'); }

  return (
    <Scrivito.WidgetTag className={ classNames.join(' ') }>
      <Scrivito.ContentTag content={ widget } attribute="body" className="card-body"/>
    </Scrivito.WidgetTag>
  );
});
