import React from "react";
import thunk from "redux-thunk";
import PhotoApp from "./src/PhotoApp";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./src/redux/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <PhotoApp />
    </Provider>
  );
}

export default App;
