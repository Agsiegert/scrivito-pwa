import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('Homepage', ({ page }) =>
<div>
  <Scrivito.ContentTag tag="div" content={ page } attribute="body" />

			


			<div id="main">
      <div className="box alt container">
      <Scrivito.ContentTag
        content={ page }
        attribute="main"
      />
    </div>
			


			</div>


			
			


			
  </div>
);
