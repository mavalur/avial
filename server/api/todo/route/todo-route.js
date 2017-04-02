"use strict";
var todo_controller_1 = require("../controller/todo-controller");
var TodoRoutes = (function () {
    function TodoRoutes() {
    }
    TodoRoutes.init = function (router) {
        router
            .route("/api/todos")
            .get(todo_controller_1.TodoController.getAll)
            .post(todo_controller_1.TodoController.createTodo)
            .put(todo_controller_1.TodoController.updateTodo);
        router
            .route("/api/todos/:id")
            .delete(todo_controller_1.TodoController.deleteTodo);
    };
    return TodoRoutes;
}());
exports.TodoRoutes = TodoRoutes;
//# sourceMappingURL=todo-route.js.map