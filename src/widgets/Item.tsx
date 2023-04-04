import React, { useState } from "react";

interface ItemProps {
  id: string;
  parent: string;
  content: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ id, content, parent }) => {
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement; 
    event.dataTransfer.setData("text/plain", JSON.stringify(({id: target.id, parent : parent})));
    setIsDragging(true);
  };

  const dragEnd = () => {
    setIsDragging(false);
  };

  const classes = isDragging  ? "opacity-5" : 
                                "" 

  return (
    <div
      id={id}
      className={classes}
      draggable
      onDragStart={dragStart}
      onDragEnd={dragEnd}
    >
      {content}
    </div>
  );
};

export default Item;