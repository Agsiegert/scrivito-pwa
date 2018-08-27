import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('CardWidget', ({ widget }) => {
  const classNames = ['card card-theme'];
  const gradient = widget.get('useGradient');
  const shadow = widget.get('shadow');
  const border = widget.get('border');
  let backgroundColor = widget.get('backgroundColor') || 'transparent';
  

  if(gradient === 'yes')
    classNames.push(`bg-gradient-${backgroundColor}`);
  else
    classNames.push(`bg-${backgroundColor}`);

if(border === 'no')  
  classNames.push('no-border')
if (shadow === 'small')
    classNames.push('shadow');
else if (shadow === 'large')
    classNames.push('shadow-lg');


  if (widget.get('useOffset') === 'yes') { classNames.push('box-offset'); }

  return (
    <Scrivito.WidgetTag className={ classNames.join(' ') }>
      <Scrivito.ContentTag content={ widget } className="card-body"/>
    </Scrivito.WidgetTag>
  );
});
