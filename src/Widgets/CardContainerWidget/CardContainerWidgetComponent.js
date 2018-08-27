import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("CardContainerWidget", ({ widget }) => {
    const containerClassNames = [];


    if (widget.get("containerType") === "deck") {
        containerClassNames.push("card-deck");
    } else if (widget.get("containerType") === "group") {
        containerClassNames.push("card-group");
    }



    return (

        <
        Scrivito.ContentTag className = { containerClassNames }
        content = { widget }
        attribute = "content" /
        >

    );
});