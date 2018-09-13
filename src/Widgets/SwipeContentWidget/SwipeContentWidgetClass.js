import * as Scrivito from 'scrivito';

const SwipeContentWidget = Scrivito.provideWidgetClass('SwipeContentWidget', {
    attributes: {
        items: ['widgetlist', { only: 'SwipeContentItemWidget' }],

    },
});

export default SwipeContentWidget;