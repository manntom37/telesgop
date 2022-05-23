import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import CowDiagram from "./Components/CowDiagram/CowDiagram";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <CowDiagram />
      </div>
    </DndProvider>
  );
}

export default App;
