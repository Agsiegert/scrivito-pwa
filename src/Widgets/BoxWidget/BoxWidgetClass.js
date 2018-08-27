import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const BoxWidget = Scrivito.provideWidgetClass('BoxWidget', {
    attributes: {
        body: 'widgetlist',
        useOffset: ['enum', { values: ['yes', 'no'] }],
        useGradient: ['enum', { values: ['yes', 'no'] }],
        rounded: ['enum', { values: ['yes', 'no'] }],
        border: ['enum', { values: ['yes', 'no'] }],
        shadow: ['enum', { values: ['small', 'large'] }],
        backgroundColor: [
            'enum',
            {
                values: [
                    'white',
                    'greywhite',
                    'greylight',
                    'greymiddle',
                    'greydark',
                    'primary',
                    'secondary',
                    'accent',
                    'dark-color',
                    'light-color',
                    'transparent'


                ],
            },
        ],
    },
});

registerTextExtract('BoxWidget', [
    { attribute: 'body', type: 'widgetlist' },
]);

export default BoxWidget;