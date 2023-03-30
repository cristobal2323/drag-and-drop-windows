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
        <div>
          <nav>
            <ul className="flex justify-center mb-2">
              <li className="mx-4">
                <Link to="/" className="text-gray-800 hover:text-gray-600 font-medium">drag</Link>
              </li>
              <li className="mx-4">
                <Link to="/drop" className="text-gray-800 hover:text-gray-600 font-medium">drop</Link>
              </li>
            </ul>
          </nav>
        </div>
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