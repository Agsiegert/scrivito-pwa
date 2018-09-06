import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const TimelineItemWidget = Scrivito.provideWidgetClass('TimelineItemWidget', {
    attributes: {
        title: 'string',
        text: 'html',
        date: 'string',
        title_2: 'string',
        text_2: 'html',
        date_2: 'string'
    },
});

registerTextExtract('TimelineItemWidget', [
    { attribute: 'title', type: 'string' },
    { attribute: 'text', type: 'html' },
    { attribute: 'date', type: 'string' },
    { attribute: 'title_2', type: 'string' },
    { attribute: 'text_2', type: 'html' },
    { attribute: 'date_2', type: 'string' },
]);

export default TimelineItemWidget;