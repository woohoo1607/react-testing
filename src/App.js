import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";
import Status from "./components/Status";
import { ThemeProvider } from "react-jss";

export const theme = {
  colorPrimary: "red",
  colorSecondary: "blue",
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div style={{ margin: "0 auto", width: "200px" }}>
          <Counter />
          <Status />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
