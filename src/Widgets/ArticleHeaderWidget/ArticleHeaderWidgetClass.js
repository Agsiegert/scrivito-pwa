import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const ArticleHeaderWidget = Scrivito.provideWidgetClass('ArticleHeaderWidget', {
    attributes: {
        headline: 'string',
        text: 'html',
        alignment: ['enum', { values: ['left', 'center', 'right'] }],
    },
});

registerTextExtract('ArticleHeaderWidget', [
    { attribute: 'headline', type: 'string' },
    { attribute: 'text', type: 'html' },
]);

export default ArticleHeaderWidget;