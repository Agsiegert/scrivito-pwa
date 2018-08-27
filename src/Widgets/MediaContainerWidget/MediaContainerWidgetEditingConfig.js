import * as Scrivito from "scrivito";
import sectionWidgetIcon from "../../assets/images/section_widget.svg";

Scrivito.provideEditingConfig("MediaContainerWidget", {
    title: "Media Container",
    thumbnail: sectionWidgetIcon,
    attributes: {
        alignImage: {
            title: "Aligment of media image",
            description: "Default: Top",
            values: [{ value: "top", title: "Top" }, { value: "middle", title: "Middle" }, { value: "bottom", title: "Bottom" }],
        },
        mediaImage: {
            title: 'Media object image',
        },
        link: {
            title: 'Link',
            description: 'The link where the media object should lead.',
        },
    },
    properties: [
        "alignImage",
        "link",
        "mediaImage"

    ],
    initialContent: {
        alignImage: "top",

    },
});