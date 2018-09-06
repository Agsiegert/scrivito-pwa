import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const MediaContainerWidget = Scrivito.provideWidgetClass("MediaContainerWidget", {
    attributes: {
        content: "widgetlist",
        alignImage: ["enum", { values: ["top", "middle", "bottom"] }],
        mediaImage: 'reference',

    }
});

registerTextExtract("MediaContainerWidget", [
    { attribute: "content", type: "widgetlist" },
]);

export default MediaContainerWidget;