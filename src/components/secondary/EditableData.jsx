import React from "react";
import Input from "../primary/Input";
import InterfaceElement from "../../Interface/InterfaceElement";
import Paragraph from "../primary/Paragraph";
import Span from "../primary/Span";
import withWrapper from "../../hoc/withWrapper";

function EditableData({
  primaryElement = null,
  lastClickedOnId = null,
  handlers = null,
}) {
  const generateInputElementFromLabel = (
    responseLabelElement,
    inputTagName
  ) => {
    return new InterfaceElement({
      componentType: null,
      parentId: null,
      htmlValueAttr: responseLabelElement.htmlInnerText,
      htmlTagName: inputTagName,
      id: responseLabelElement.id,
    }).getElement();
  };

  const determinePlainTextComponentAndInputType = (promptTagName) => {
    if (promptTagName === "paragraph") {
      return [Paragraph, "textarea"];
    } else if (promptTagName === "span") {
      const foo = [Span, "text"];
      return [Span, "text"];
    }
  };
  console.log("phtmltn", primaryElement.htmlTagName);
  // const [PlainTextComponent, inputTagName] =
  //   determinePlainTextComponentAndInputType(primaryElement.htmlTagName);
  const PlainTextComponent = determinePlainTextComponentAndInputType(
    primaryElement.htmlTagName
  )[0];
  const inputTagName = determinePlainTextComponentAndInputType(
    primaryElement.htmlTagName
  )[1];
  const selfId = primaryElement.id;
  const didUserLastClickOnSelf = selfId === lastClickedOnId;

  if (primaryElement === null) {
    return null;
  } else {
    return (
      <>
        {!didUserLastClickOnSelf && (
          <PlainTextComponent primaryElement={primaryElement} />
        )}
        {didUserLastClickOnSelf && (
          <Input
            handlers={handlers}
            primaryElement={generateInputElementFromLabel(
              primaryElement,
              inputTagName
            )}
            disabled={false}
          />
        )}
      </>
    );
  }
}

export default EditableData;
const WrappedEditableObj = withWrapper(EditableData);
export { WrappedEditableObj };
