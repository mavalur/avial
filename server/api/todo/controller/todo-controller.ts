import * as express from "express";
import todoService from "../svc/todoService";

let todoServices = new todoService();
export class TodoController {

  static getAll(req: express.Request, res: express.Response): void {
    return res.json(todoServices.get());

  }

  static createTodo(req: express.Request, res: express.Response): void {
    let _todo = req.body;
    return res.json(todoServices.post(_todo));

  }

  static deleteTodo(req: express.Request, res: express.Response): void {
    let id = req.params.id;
    return res.json(todoServices.delete(id));
  }

  static updateTodo(req: express.Request, res: express.Response): void {
    let _todo = req.body;
    res.json(todoServices.put(_todo));
  }
}
