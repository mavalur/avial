"use strict";
var todoService_1 = require("../svc/todoService");
var todoServices = new todoService_1.default();
var TodoController = (function () {
    function TodoController() {
    }
    TodoController.getAll = function (req, res) {
        return res.json(todoServices.get());
    };
    TodoController.createTodo = function (req, res) {
        var _todo = req.body;
        return res.json(todoServices.post(_todo));
    };
    TodoController.deleteTodo = function (req, res) {
        var id = req.params.id;
        return res.json(todoServices.delete(id));
    };
    TodoController.updateTodo = function (req, res) {
        var _todo = req.body;
        res.json(todoServices.put(_todo));
    };
    return TodoController;
}());
exports.TodoController = TodoController;
//# sourceMappingURL=todo-controller.js.map