import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <h2 className="">
          <Head />
          <Body />
        </h2>
      </div>
    </Provider>
  );
}

export default App;
