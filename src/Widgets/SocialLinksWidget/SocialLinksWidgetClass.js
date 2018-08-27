import * as Scrivito from 'scrivito';

const SocialLinksWidget = Scrivito.provideWidgetClass('SocialLinksWidget', {
  attributes: {
    url: 'string',
    textToShare: 'string',
  },
});

export default SocialLinksWidget;
