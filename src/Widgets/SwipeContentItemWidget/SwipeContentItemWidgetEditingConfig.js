import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('SwipeContentItemWidget', {
    title: 'Block',
    attributes: {

        title: {
            title: 'Title',
        },
        text: {
            title: 'Text',
        },

    },
    properties: [
        'title',
        'text',

    ],

});