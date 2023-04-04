interface Widget {
    name: string;
    widget: JSX.Element;
}

const widgets: Widget[] = [{
    name: "widget1",
    widget: <div
        key="1"
        className="bg-white p-4 rounded-lg cursor-move mb-2"
        id="draggable-1"
    >
        widget 1
    </div>,
  }, {
    name: "widget2",
    widget: <div
        key="2"
        className="bg-white p-4 rounded-lg cursor-move mb-2"
        id="draggable-2"
    >
        widget 2
    </div>,
  }, {
    name: "widget3",
    widget: <div
        key="3"
        className="bg-white p-4 rounded-lg cursor-move mb-2"
        id="draggable-3"
    >
        widget 3
    </div>
  }];

export default widgets;