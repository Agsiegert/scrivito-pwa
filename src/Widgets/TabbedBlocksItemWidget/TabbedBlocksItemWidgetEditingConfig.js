import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('TabbedBlocksItemWidget', {
    title: 'Block',
    attributes: {

        title: {
            title: 'Title',
        },
        text: {
            title: 'Text',
        },
        tags: {
            title: 'Tags',
        },
    },
    properties: [
        'title',
        'text',
        'tags',
    ],

});