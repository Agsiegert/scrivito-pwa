import * as Scrivito from 'scrivito';
import sectionWidgetIcon from '../../assets/images/section_widget.svg';

Scrivito.provideEditingConfig('SectionWidget', {
    title: 'Section',
    thumbnail: `/${sectionWidgetIcon}`,
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
        useFullWidth: {
            title: 'Use full width?',
            description: 'Default: No',
            values: [
                { value: 'yes', title: 'Yes' },
                { value: 'no', title: 'No' },
            ],
        },
        useFullHeight: {
            title: 'Use full screen height?',
            description: 'Default: No',
            values: [
                { value: 'yes', title: 'Yes' },
                { value: 'no', title: 'No' },
            ],
        },
        showPadding: {
            title: 'Show padding?',
            description: 'Padding adds space around this section. Default: Yes',
            values: [
                { value: 'yes', title: 'Yes' },
                { value: 'no', title: 'No' },
            ],
        },
        backgroundImage: {
            title: 'Background image',
        },
    },
    properties: [
        'backgroundColor',
        'backgroundImage',
        'useGradient',
        'useFullWidth',
        'useFullHeight',
        'showPadding',
    ],
    initialContent: {
        backgroundColor: 'white',
        showPadding: 'yes',
        useGradient: 'no',
        useFullHeight: 'no',
        useFullWidth: 'no',
    },
});