import React from "react";
import Container from "./widgets/Container";
import Item from "./widgets/Item";
import { Link } from "react-router-dom";

import widgets from "./widgets";

const App: React.FC = () => {
  return (
    <>
      <Container id="container-1">
        <h2>Drag</h2>
        {
          widgets.map((element) => (
            <Item parent="container-1" key={element.name} id={element.name} content={element.widget} />
          ))
        }

      </Container>
    </>
  );
};

export default App;