import * as Scrivito from 'scrivito';

const TabbedBlocksItemWidget = Scrivito.provideWidgetClass('TabbedBlocksItemWidget', {
    onlyInside: 'TabbedBlocksWidget',
    attributes: {
        title: 'string',
        text: 'html',
        image: 'reference',
        tags: 'stringlist',
    },
});

export default TabbedBlocksItemWidget;