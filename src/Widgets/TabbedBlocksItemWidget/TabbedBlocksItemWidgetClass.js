import * as Scrivito from 'scrivito';

const TabbedBlocksItemWidget = Scrivito.provideWidgetClass('TabbedBlocksItemWidget', {
    onlyInside: 'TabbedBlocksWidget',
    attributes: {
        title: 'string',
        text: 'html',
        tags: 'stringlist',
    },
});

export default TabbedBlocksItemWidget;