import * as Scrivito from 'scrivito';
import thumbnailGalleryWidgetIcon from '../../assets/images/thumbnail_gallery_widget.svg';

Scrivito.provideEditingConfig('TabbedBlocksWidget', {
    title: 'Tabbed Blocks',
    thumbnail: thumbnailGalleryWidgetIcon,
    attributes: {
        items: {
            title: 'Blocks',
        },

    },
    properties: [
        'items',

    ],
});