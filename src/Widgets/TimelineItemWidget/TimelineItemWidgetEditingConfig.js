import * as Scrivito from 'scrivito';
import factWidgetIcon from '../../assets/images/fact_widget.svg';

Scrivito.provideEditingConfig('TimelineItemWidget', {
    title: 'Timeline Item',
    thumbnail: factWidgetIcon,
    initialContent: {
        title: 'Headline',
        text: 'Lorem ipsum',
        date: '12.12.2012',
        title_2: 'Next Headline',
        text_2: 'Lorem ipsum',
        date_2: '12.01.2013',
    },
});