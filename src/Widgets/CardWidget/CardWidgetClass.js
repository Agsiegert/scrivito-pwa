import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const CardWidget = Scrivito.provideWidgetClass('CardWidget', {
    onlyInside: 'CardContainerWidget',
    attributes: {
        body: 'widgetlist',
        useOffset: ['enum', { values: ['yes', 'no'] }],
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

registerTextExtract('CardWidget', [
    { attribute: 'body', type: 'widgetlist' },
]);

export default CardWidget;