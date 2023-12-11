/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.toDoList = []
  }

  add(todo) {
    this.toDoList.push(todo);
  }
  remove(indexOfTodo) {
    this.toDoList = this.toDoList.filter(e => e != this.toDoList[indexOfTodo])
  }
  update(index, updatedToDo) {
    if ( index > this.toDoList.length - 1) return
    this.toDoList[index] = updatedToDo;
  }
  getAll() {
    return this.toDoList;
  }
  get(index) {
    if ( index > this.toDoList.length - 1) return null
    return this.toDoList[index]
  }
  clear() {
    this.toDoList = []
  }
}

const newList = new Todo;
newList.add('Task1')
newList.add('Task2')
newList.add('Task3')
console.log(newList.getAll())
newList.remove(1)
newList.update(2, 'something')
console.log(newList.getAll())

module.exports = Todo;
