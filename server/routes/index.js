"use strict";
var todo_route_1 = require("../api/todo/route/todo-route");
var index_1 = require("../commons/static/index");
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        todo_route_1.TodoRoutes.init(router);
        router
            .route("*")
            .get(index_1.StaticDispatcher.sendIndex);
        app.use("/", router);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map