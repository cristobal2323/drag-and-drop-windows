import React, { useEffect, ReactNode, useState } from "react";
import widgets from "./";

interface ContainerProps {
  id: string;
  children: ReactNode | ReactNode[];
  colors?:{
    main: String,
    hover: String
  }
}

const Container: React.FC<ContainerProps> = ({ id, children, colors }) => {
  const [newChildren, setNewChildren] = useState<JSX.Element[]>([]);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  useEffect(() => {
    function checkDrop() {
      const item = localStorage.getItem('drop')
      if (item) {
        const element = document.getElementById(item);
        if (element) {
          element.remove();
          localStorage.setItem("drop", "done");
        }
      }
    }

    window.addEventListener('storage', checkDrop)

    return () => {
      window.removeEventListener('storage', checkDrop)
    }
  }, [])



  const drop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const obj = event
      .dataTransfer
      .getData('text');

    const data = JSON.parse(obj);


    if (data.parent !== id) {
      const child = widgets.find((o) => { return o.name === data.id });

      if (child) {
        const arr = [...newChildren];
        arr.push(child.widget);
        localStorage.setItem("drop", data.id);

        const elementDelete = document.getElementById(data.id);
        elementDelete?.remove()
        setNewChildren(arr);
      }
    }
    setIsDraggingOver(false);
  };

  const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDraggingOver(true);
  };

  const dragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    // This condition will be true when the drag leaves the parent for a child,
    // but false when the drag leaves the parent for somewhere else.
  
    if (event.currentTarget.contains(event.relatedTarget as Node)) return;
    console.log("LEAVE");
    setIsDraggingOver(false);
  };

  const mainColor = colors?.main? colors.main : 'bg-blue-500';
  const hoverColor = 'bg-blue-200';

  return (
    <div
      id={id}
      className={`p-4 h-full w-full ${isDraggingOver ? hoverColor : mainColor}`}
      onDrop={drop}
      data-container="true"
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
    >
      {children}
      {newChildren}
    </div>
  );
};

export default Container;