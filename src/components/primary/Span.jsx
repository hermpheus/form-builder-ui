import React from "react";

function Span({
  primaryElement,
  handlers,
  action = "standard",
  dragInfo = null,
}) {
  const {
    htmlInnerText = "",
    htmlClassAttr = "class-not-specified",
    draggable,
    id,
  } = primaryElement;
  if (action === "standard") {
    return (
      <span className={htmlClassAttr} id={id}>
        {htmlInnerText}
      </span>
    );
  } else if (action === "drag") {
    return (
      <span
        onDragStart={() =>
          handlers.handleDragStart(dragInfo.originIndex, dragInfo.parentId)
        }
        draggable={draggable}
        className={htmlClassAttr}
        id={id}
      >
        {htmlInnerText}
      </span>
    );
  } else if (action === "drop") {
    return (
      <span
        onDrop={(event) =>
          handlers.handleOnDrop(event, dragInfo.destinationIndex)
        }
        onDragOver={(event) => handlers.handleOnDragOver(event)}
        className={htmlClassAttr}
        id={id}
      >
        {htmlInnerText}
      </span>
    );
  } else {
    return (
      <span className={htmlClassAttr} id={id}>
        {htmlInnerText}
      </span>
    );
  }
}

export default Span;
