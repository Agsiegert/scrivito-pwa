import * as Scrivito from 'scrivito';
import boxWidgetIcon from '../../assets/images/box_widget.svg';

Scrivito.provideEditingConfig('CardWidget', {
    title: 'Card',
    thumbnail: boxWidgetIcon,
    attributes: {
        backgroundColor: {
            title: 'Background color',
            description: 'Does not apply if a background image is set. Default: White',
            values: [
                { value: 'white', title: 'White' },
                { value: 'greywhite', title: 'White grey' },
                { value: 'greylight', title: 'Light grey' },
                { value: 'greymiddle', title: 'Grey' },
                { value: 'greydark', title: 'Dark grey' },
                { value: 'primary', title: 'Primary color' },
                { value: 'secondary', title: 'Secondary color' },
                { value: 'accent', title: 'Accent color' },
                { value: 'dark-color', title: 'Theme dark color' },
                { value: 'light-color', title: 'Theme light color' },
                { value: 'transparent', title: 'No color' },

            ],
        },

        useGradient: {
            title: 'Use gradient for background color?',
            description: 'Default: No',
            values: [
                { value: 'yes', title: 'Yes' },
                { value: 'no', title: 'No' },
            ],
        },
        useOffset: {
            title: 'Use offset?',
            description: 'If so, the box will move "up". Default: No',
            values: [
                { value: 'yes', title: 'Yes' },
                { value: 'no', title: 'No' },
            ],
        },

        border: {
            title: 'Use border?',
            description: 'Default: Yes',
            values: [
                { value: 'yes', title: 'Yes' },
                { value: 'no', title: 'No' },
            ],
        },


        shadow: {
            title: 'Shadow',
            description: 'Shadow around the paragraph. Default: no',
            values: [
                { value: 'small', title: 'Small' },
                { value: 'large', title: 'Large' },
            ],
        },
    },
    properties: [
        'backgroundColor',
        'useGradient',
        'useOffset',
        'border',
        'shadow',
    ],
    initialContent: {
        backgroundColor: 'white',
        useOffset: 'no',
        useGradient: 'no',
        shadow: 'no',
        border: 'yes',
    },
});