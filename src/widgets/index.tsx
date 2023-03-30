interface Widget {
    name: string;
    widget: JSX.Element;
}

const widgets: Widget[] = [{
    name: "widget1",
    widget: <div
        key="1"
        id="draggable-1"
        className="example-draggable"
    >
        widget 1
    </div>,
  }, {
    name: "widget2",
    widget: <div
        key="2"
        id="draggable-2"
        className="example-draggable"
    >
        widget 2
    </div>,
  }, {
    name: "widget3",
    widget: <div
        key="3"
        id="draggable-3"
        className="example-draggable"
    >
        widget 3
    </div>
  }];

export default widgets;