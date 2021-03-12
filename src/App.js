import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";
import Status from "./components/Status";

function App() {
  return (
    <Provider store={store}>
      <div style={{ margin: "0 auto", width: "200px" }}>
        <Counter />
        <Status />
      </div>
    </Provider>
  );
}

export default App;
