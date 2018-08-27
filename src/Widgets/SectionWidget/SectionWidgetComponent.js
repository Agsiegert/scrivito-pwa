import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('SectionWidget', ({ widget }) => {
  const sectionClassNames = [];
  const sectionStyle = {};

  let backgroundColor = widget.get('backgroundColor') || 'transparent';
  const gradient = widget.get('useGradient');
  const backgroundImage = widget.get('backgroundImage');
  if (backgroundImage) {
    backgroundColor = 'dark-image';
    sectionStyle.background = [
      { image: 'linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))' },
      { image: backgroundImage },
    ];
  }

  if(gradient === 'yes')
    sectionClassNames.push(`bg-gradient-${backgroundColor}`);
  else
    sectionClassNames.push(`bg-${backgroundColor}`);

  if (widget.get('showPadding') === 'no') {
    sectionClassNames.push('no-padding');
  }

  let contentClassName = 'container';
  if (widget.get('useFullWidth') === 'yes') {
    contentClassName = 'container-fluid gutter0';
  }

  if (widget.get('useFullHeight') === 'yes') {
    sectionClassNames.push('full-height');
  }

  return (
    <Scrivito.BackgroundImageTag
      tag="section"
      className={ sectionClassNames.join(' ') }
      style={ sectionStyle }
    >
      <Scrivito.ContentTag className={ contentClassName } content={ widget } attribute="content" />
    </Scrivito.BackgroundImageTag>
  );
});
