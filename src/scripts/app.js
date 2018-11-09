import React, {Component} from "react";
import { getSnapshot } from "mobx-state-tree";

import { Todo, User, RootStore } from "../types";

export default class App extends Component {
  render() {
    const john = User.create();
    const eat = Todo.create();
    const store = window.store = RootStore.create({ 
      users: {}
    });

    store.addTodo(1, "write");
    store.todos.get(1).toggle();

    console.log("John: ", getSnapshot(john));
    console.log("EAT Todo: ", getSnapshot(eat));
    console.log("store: ", getSnapshot(store));
    return (
      <div>
        Hello world!
      </div>
    )
  }
}