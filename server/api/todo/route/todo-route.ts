"use strict";

import * as express from "express";
import {TodoController} from "../controller/todo-controller";

export class TodoRoutes {
    static init(router: express.Router) {
      router
        .route("/api/todos")
        .get(TodoController.getAll)
        .post(TodoController.createTodo)
        .put(TodoController.updateTodo);

      router
        .route("/api/todos/:id")
        .delete(TodoController.deleteTodo);


    }
}
