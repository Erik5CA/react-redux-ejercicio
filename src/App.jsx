import { Provider } from "react-redux";
import "./App.css";
import RouterApp from "./router/router";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterApp />
      </Provider>
    </>
  );
}

export default App;
