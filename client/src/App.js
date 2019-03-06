import React, { Component } from "react";

import AppNavBar from "./components/AppNavBar";
import ShoppingList from "./components/shoppingList";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemModal from "./components/ItemModal";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
