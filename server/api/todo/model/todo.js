/**
 * Created by Mavalur on 3/26/17.
 */
"use strict";
var todo = (function () {
    function todo(message) {
        this.todoMessage = message;
    }
    todo.prototype.getMessage = function () {
        return this.todoMessage;
    };
    return todo;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = todo;
//# sourceMappingURL=todo.js.map