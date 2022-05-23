import React from "react";
import { useDrag } from "react-dnd";

function Labels({ id, label }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div ref={drag} className="dragDiv" draggable>
      <p className="dragText">{label}</p>
    </div>
  );
}

export default Labels;
