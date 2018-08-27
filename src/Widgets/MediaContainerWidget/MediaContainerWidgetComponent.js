import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("MediaContainerWidget", ({ widget }) => {
    const imageClassNames = ['mt-2 mr-3']
    const image = widget.get('mediaImage');
    

    if (widget.get("alignImage") === "top") {
        imageClassNames.push("align-self-start");
    } else if (widget.get("alignImage") === "middle") {
        imageClassNames.push("align-self-center");
    } else if (widget.get("alignImage") === "bottom") {
        imageClassNames.push("align-self-end");
    }
    
    let realImage = <Scrivito.ImageTag
    content={ image }
    alt='Bild'
    width="96px"
    height="96px"
    className = { imageClassNames.join(' ') }
  />;


    



    return ( 
        
        <div className="media">
        {realImage}
         <
        Scrivito.ContentTag 
        
        content = { widget }
        attribute = "content" /
        >
        </div>
       
    );
});