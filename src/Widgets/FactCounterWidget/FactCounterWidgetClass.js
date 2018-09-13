import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const FactCounterWidget = Scrivito.provideWidgetClass('FactCounterWidget', {
    attributes: {
        key: 'string',
        value: 'string',
        postfix: 'string'
    },
});

registerTextExtract('FactCounterWidget', [
    { attribute: 'key', type: 'string' },
    { attribute: 'value', type: 'string' },
    { attribute: 'postfix', type: 'string' },
]);

export default FactCounterWidget;