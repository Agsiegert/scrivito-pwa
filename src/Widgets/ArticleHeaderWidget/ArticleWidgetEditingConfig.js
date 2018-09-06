import * as Scrivito from 'scrivito';
import headlineWidgetIcon from '../../assets/images/headline_widget.svg';

Scrivito.provideEditingConfig('ArticleHeaderWidget', {
    title: 'Arcticle Header',
    thumbnail: headlineWidgetIcon,
    attributes: {
        alignment: {
            title: 'Alignment',
            description: 'Default: Left',
            values: [
                { value: 'left', title: 'Left' },
                { value: 'center', title: 'Center' },
                { value: 'right', title: 'Right' },
            ],
        },
    },
    properties: [
        'alignment',
    ],
    initialContent: {
        alignment: 'left',
    },
});