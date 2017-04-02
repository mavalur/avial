/**
 * Created by Mavalur on 3/26/17.
 */

export default class todo {
  todoMessage: string;
  _id:number;
  constructor(message: string) {
    this.todoMessage = message;
  }
  getMessage() {
    return this.todoMessage;
  }

}

