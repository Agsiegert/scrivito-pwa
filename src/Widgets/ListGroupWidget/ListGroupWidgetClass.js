import * as Scrivito from "scrivito";

const ListGroupWidget = Scrivito.provideWidgetClass("ListGroupWidget", {
    attributes: {
        headline: "string",
        links: ["widgetlist", { only: "LinkWidget" }],
    },
});

export default ListGroupWidget;