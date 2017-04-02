"use strict";
/**
 * Created by Mavalur on 3/26/17.
 */
var todo_1 = require("../model/todo");
var lodash = require("lodash");
var Promise = require("bluebird");
var listsToDo = [];
var isItemListAvailable = function (searchedItem) {
    return listsToDo.some(function (item) {
        return item && item.todoMessage != null && item._id == searchedItem._id;
    });
};
var todoService = (function () {
    function todoService() {
    }
    todoService.prototype.get = function () {
        return new Promise(function (resolve, reject) {
            resolve(listsToDo);
        });
    };
    todoService.prototype.post = function (greet) {
        return new Promise(function (resolve, reject) {
            if (!lodash.isObject(greet) && greet.getMessage() == null) {
                return reject(new TypeError("Todo is not a valid object."));
            }
            else {
                if (isItemListAvailable(greet)) {
                    return reject("item already exists");
                }
                ;
                listsToDo.push(greet);
                return resolve(greet);
            }
        });
    };
    todoService.prototype.put = function (updatableItem) {
        return new Promise(function (resolve, reject) {
            console.log(updatableItem);
            if (!lodash.isObject(todo_1.default) && updatableItem.getMessage() == null) {
                return reject(new TypeError("Todo is not a valid object."));
            }
            else {
                var updated = false;
                updated = listsToDo.some(function (item, index) {
                    if (item._id == updatableItem._id) {
                        item.todoMessage = updatableItem.todoMessage;
                        return true;
                    }
                    return false;
                });
                resolve(updated);
            }
        });
    };
    todoService.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var matchedIndex = null;
            _this.get().then(function (elements) {
                elements.forEach(function (item, index) {
                    if (item._id == id) {
                        matchedIndex = index;
                    }
                });
                if (matchedIndex != null) {
                    (matchedIndex == listsToDo.length - 1) ? listsToDo.pop() : listsToDo.splice(matchedIndex, 1);
                    console.log("matched with index step4", listsToDo);
                    return resolve(true);
                }
                ;
                resolve(false);
            });
        });
    };
    ;
    return todoService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = todoService;
//# sourceMappingURL=todoService.js.map