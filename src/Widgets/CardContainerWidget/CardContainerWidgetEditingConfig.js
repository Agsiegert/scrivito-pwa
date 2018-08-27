import * as Scrivito from "scrivito";
import sectionWidgetIcon from "../../assets/images/section_widget.svg";

Scrivito.provideEditingConfig("CardContainerWidget", {
    title: "Card Container",
    thumbnail: sectionWidgetIcon,
    attributes: {
        containerType: {
            title: "Card container type",
            description: "Default: Deck",
            values: [{ value: "deck", title: "Deck" }, { value: "group", title: "Group" }],
        },

    },
    properties: [
        "containerType",

    ],
    initialContent: {
        containerType: "deck",

    },
});