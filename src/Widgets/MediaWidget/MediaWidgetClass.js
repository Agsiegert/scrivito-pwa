import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const MediaWidget = Scrivito.provideWidgetClass('MediaWidget', {
    attributes: {
        body: 'widgetlist',
        useGradient: ['enum', { values: ['yes', 'no'] }],
        shadow: ['enum', { values: ['no', 'small', 'large'] }],
        border: ['enum', { values: ['yes', 'no'] }],
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

registerTextExtract('MediadWidget', [
    { attribute: 'body', type: 'widgetlist' },
]);

export default MediaWidget;