import * as Scrivito from 'scrivito';

const SwipeContentItemWidget = Scrivito.provideWidgetClass('SwipeContentItemWidget', {
    onlyInside: 'SwipeContentWidget',
    attributes: {
        title: 'string',
        text: 'html',

    },
});

export default SwipeContentItemWidget;