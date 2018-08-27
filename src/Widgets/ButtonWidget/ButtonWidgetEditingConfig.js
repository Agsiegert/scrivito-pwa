import * as Scrivito from 'scrivito';
import buttonWidgetIcon from '../../assets/images/button_widget.svg';

Scrivito.provideEditingConfig('ButtonWidget', {
    title: 'Button',
    thumbnail: `/${buttonWidgetIcon}`,
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
        style: {
            title: 'Background color',
            description: 'Default: Primary color',
            values: [
                { value: 'btn-primary', title: 'Primary color' },
                { value: 'btn-secondary', title: 'Secondary color' },
                { value: 'btn-success', title: 'Success color' },
                { value: 'btn-danger', title: 'Danger color' },
                { value: 'btn-warning', title: 'Warning color' },
                { value: 'btn-info', title: 'Info color' },
                { value: 'btn-light', title: 'Light color' },
                { value: 'btn-dark', title: 'Dark color' },
                { value: 'btn-clear', title: 'Transparent' },
            ],
        },
        target: {
            title: 'Target',
            description: 'The target and text of the button.',
        },
        rounded: {
            title: 'Rounded corners',
            description: 'Small: 6px rounded corners. Large: Small: 30px rounded corners.',
            values: [
                { value: 'small', title: 'Small' },
                { value: 'large', title: 'Large' },
            ],
        },
    },
    properties: [
        'target',
        'alignment',
        'style',
        'rounded'
    ],
    initialContent: {
        alignment: 'left',
        style: 'btn-primary',
        rounded: 'No',
    },
});