import React from "react";
import Container from "./widgets/Container";
import Item from "./widgets/Item";


import widgets from "./widgets";

const DragComponent: React.FC = () => {
  return (
    <section className="">
      <section className="w-full h-screen"> 
        <Container id="container-3" colors={{main: "bg-cyan-200", hover: "bg-cyan-100"}}>
          <h2 className="text-black mb-3 text-xl">Container (Drop)</h2>
        </Container>
      </section>


      <section className="fixed w-full bottom-0 z-1">
        <Container id="container-1">
          <h2 className="text-white mb-3 text-xl">Widget (Drag)</h2>
          <section className="flex gap-5">
            {
              widgets.map((element) => (
                <Item parent="container-1" key={element.name} id={element.name} content={element.widget} />
              ))
            }
          </section>
      </Container>
      </section>
    </section>
  );
};

export default DragComponent;