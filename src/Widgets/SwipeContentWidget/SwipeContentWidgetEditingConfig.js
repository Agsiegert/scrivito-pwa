import * as Scrivito from 'scrivito';
import thumbnailGalleryWidgetIcon from '../../assets/images/thumbnail_gallery_widget.svg';

Scrivito.provideEditingConfig('SwipeContentWidget', {
    title: 'Swipe Content',
    thumbnail: thumbnailGalleryWidgetIcon,
    attributes: {
        items: {
            title: 'Content',
        },

    },
    properties: [
        'items',

    ],
});