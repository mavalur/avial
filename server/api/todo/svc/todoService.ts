/**
 * Created by Mavalur on 3/26/17.
 */
import todomodel from "../model/todo";
import * as lodash from "lodash";
import * as Promise from "bluebird";

let listsToDo = [];

let isItemListAvailable = function (searchedItem: todomodel) {
  return listsToDo.some(function (item: todomodel) {
    return item && item.todoMessage != null && item._id == searchedItem._id;
  });
};

export default class todoService {

  constructor() {

  }

  get() {
    return new Promise((resolve: Function, reject: Function)=> {
      resolve(listsToDo);
    });
  }

  post(greet: todomodel) {
    return new Promise((resolve: Function, reject: Function)=> {
      if (!lodash.isObject(greet) && greet.getMessage() == null) {
        return reject(new TypeError("Todo is not a valid object."));
      } else {
        if (isItemListAvailable(greet)) {
          return reject("item already exists");
        }
        ;
        listsToDo.push(greet);
        return resolve(greet);
      }
    });


  }

  put(updatableItem: todomodel) {
    return new Promise((resolve: Function, reject: Function)=> {
      console.log(updatableItem);
      if (!lodash.isObject(todomodel) && updatableItem.getMessage() == null) {
        return reject(new TypeError("Todo is not a valid object."));
      } else {
        let updated:boolean = false;
        updated = listsToDo.some(function (item: todomodel, index: number) {
          if (item._id == updatableItem._id) {
            item.todoMessage = updatableItem.todoMessage;
            return true;
          }
          return false;
        });
        resolve(updated);
      }
    });


  }

  delete(id: number) {
    return new Promise((resolve: Function, reject: Function)=> {
      var matchedIndex = null;
      this.get().then(function (elements) {
        elements.forEach(function (item: todomodel, index: number) {
          if (item._id == id) {
            matchedIndex = index;
          }
        });
        if (matchedIndex != null) {
          (matchedIndex==listsToDo.length-1)?listsToDo.pop():listsToDo.splice(matchedIndex, 1);
          console.log("matched with index step4",listsToDo);
          return resolve(true);
        };
        resolve(false);
      });
    });
  };
