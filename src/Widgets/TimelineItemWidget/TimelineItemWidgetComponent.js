import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('TimelineItemWidget', ({ widget }) =>
  <ul className="timeline no-border">
  
    <li className="mt-0 pt-0 bg-white rounded shadow">
    
    <Scrivito.ContentTag
      content={ widget }
      attribute="title"
      tag="h2"
    />
    <Scrivito.ContentTag
      content={ widget }
      className="pr-3"
      attribute="text"
      tag="p"
    />
    </li>
    <li className="mt-0 pt-0">
    <Scrivito.ContentTag
      content={ widget }
      className = "timeline-date h2 text-primary text-right"
      attribute="date"
      tag="p"
    />
    
    </li>
    <li className="mt-0 pt-0">
    <Scrivito.ContentTag
      content={ widget }
      className = "timeline-date h2 text-primary text-left"
      attribute="date_2"
      tag="p"
    />
    
    </li>
    <li className="text-right mt-0 pt-0  bg-white rounded shadow">
    
    <Scrivito.ContentTag
      content={ widget }
      attribute="title_2"
      tag="h2"
    />
    <Scrivito.ContentTag
      content={ widget }
      attribute="text_2"
      tag="p"
    />
    </li>
   
    
   
  </ul>
);

