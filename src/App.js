import React, { Component } from 'react';
import Router from "./route/Router";
import {Provider} from "react-redux";
import store from "./redux/store";
import {initApp} from "./redux/action";

// import Button from 'antd/lib/button';
// import 'antd/dist/antd.css';

store.dispatch(initApp());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router />
            </div>
        </Provider>
    );
  }
}

export default App;
