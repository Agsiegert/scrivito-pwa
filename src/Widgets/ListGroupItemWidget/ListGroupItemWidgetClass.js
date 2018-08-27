import * as Scrivito from "scrivito";

const ListGroupItemWidget = Scrivito.provideWidgetClass("ListGroupItemWidget", {
    onlyInside: "ListGroupWidget",
    attributes: {
        link: "link",
    },
});

export default ListGroupItemWidget;