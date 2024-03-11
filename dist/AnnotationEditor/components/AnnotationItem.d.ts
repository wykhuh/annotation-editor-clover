import React from "react";
import { type PluginInformationPanel, type AnnotationTargetExtended } from "@samvera/clover-iiif";
import { AnnotationForEditor } from "../types/annotation";
interface PropType extends PluginInformationPanel {
    annotation: AnnotationForEditor;
    setActiveTarget: React.Dispatch<React.SetStateAction<AnnotationTargetExtended | string | undefined>>;
    activeTarget?: AnnotationTargetExtended | string;
}
declare const AnnotationItem: React.FC<PropType>;
export default AnnotationItem;
