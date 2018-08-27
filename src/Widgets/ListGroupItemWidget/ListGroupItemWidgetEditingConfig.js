import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("ListGroupItemWidget", {
    title: "List Group item",
    attributes: {
        link: {
            title: "Link",
            description: "If no title is given, the obj's title or the external URl will be shown.",
        },
    },
    properties: ["link"],
});