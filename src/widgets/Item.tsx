import React from "react";

interface ItemProps {
  id: string;
  parent: string;
  content: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ id, content, parent }) => {

  const dragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement; 
    event.dataTransfer.setData("text/plain", JSON.stringify(({id: target.id, parent : parent})));
  };

  return (
    <div
      id={id}
      className="bg-white p-4 rounded-lg shadow-md cursor-move hover:shadow-lg"
      draggable
      onDragStart={dragStart}
    >
      {content}
    </div>
  );
};

export default Item;