import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const CardContainerWidget = Scrivito.provideWidgetClass("CardContainerWidget", {
    attributes: {
        content: "widgetlist",
        containerType: ["enum", { values: ["deck", "group"] }],

    }
});

registerTextExtract("CardContainerWidget", [
    { attribute: "content", type: "widgetlist" },
]);

export default CardContainerWidget;