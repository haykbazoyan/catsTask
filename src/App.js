import "./App.css";
import Cats from "./cats";
import store from "./redux/catsStore";

function App() {
  return (
    <div className="App">
      <Cats store={store} />
    </div>
  );
}

export default App;
