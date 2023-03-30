import React, { useEffect, ReactNode, useState } from "react";
import widgets from "./";

interface ContainerProps {
  id: string;
  children: ReactNode | ReactNode[];
}

const Container: React.FC<ContainerProps> = ({ id, children }) => {
  const [newChildren, setNewChildren] = useState<JSX.Element[]>([]);

  useEffect(() => {
    function checkDrop() {
      const item = localStorage.getItem('drop')
      if (item) {
        const element = document.getElementById(item);
        if (element) {
          element.remove();
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
        setNewChildren(arr);
      }
    }
  };

  const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      id={id}
      className="bg-gray-200 p-4 rounded-lg shadow-md w-full h-screen"
      onDrop={drop}
      onDragOver={dragOver}
    >
      {children}
      {newChildren}
    </div>
  );
};

export default Container;