import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('MediaWidget', ({ widget }) => {
    const classNames = [];
    const gradient = widget.get('useGradient');
    const shadow = widget.get('shadow');
    const border = widget.get('border');

    let backgroundColor = widget.get('backgroundColor') || 'transparent';


    if (gradient === 'yes')
        classNames.push(`bg-gradient-${backgroundColor}`);
    else
        classNames.push(`bg-${backgroundColor}`);

    if (border === 'no')
        classNames.push('no-border')
    if (shadow === 'small')
        classNames.push('shadow');
    else if (shadow === 'large')
        classNames.push('shadow-lg');




    return (

        <
        Scrivito.ContentTag content = { widget }
        attribute = "body"
        className = "media-body" / >

    );
});