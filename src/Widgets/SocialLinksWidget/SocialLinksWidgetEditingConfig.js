import * as Scrivito from 'scrivito';
import boxWidgetIcon from '../../assets/images/box_widget.svg';

Scrivito.provideEditingConfig('SocialLinksWidget', {
    title: 'Social Links',
    thumbnail: boxWidgetIcon,
    attributes: {
        url: {
            title: 'Page slug',
            description: 'URL to this page. Format as slug',

        },
        textToShare: {
            title: 'Text',
            description: 'Text you want to share',

        },
    },
    properties: [
        'url',
        'textToShare',
    ]
});