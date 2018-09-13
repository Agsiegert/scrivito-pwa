import * as Scrivito from 'scrivito';
import factWidgetIcon from '../../assets/images/fact_widget.svg';

Scrivito.provideEditingConfig('FactCounterWidget', {
    title: 'Fact Counter',
    thumbnail: factWidgetIcon,
    attributes: {
        key: {
            title: "Key"
        },
        value: {
            title: "Value"
        },
        postfix: {
            title: "Postfix"
        },

    },

    properties: [
        'key',
        'value',
        'postfix',
    ],

    initialContent: {
        key: 'Lorem ipsum',
        value: '12',
        postfix: 'Jahre',
    },
});