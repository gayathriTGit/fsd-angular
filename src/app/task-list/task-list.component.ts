import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Task } from '../models/task';
import {FormsModule} from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {

  // task = {
  //   id: "1",
  //   title: "Grocery Shopping",
  //   dueDate: 2026,
  //   description: "Buy Groceries for the week",
  //   completed: false
  // }
 
  taskList: Task[]= [
    {
      id: 1,
      title: "Buy bread",
      dueDate: '2025-04-02',
      description: "Buy Bread",
      completed: false
    },
   
    {
      id: 2,
      title: "Buy Milk",
      dueDate: '2025-04-04',
      description: "Buy milk",
      completed: false
    },

    {
      id: 3,
      title: "Do dishes",
      dueDate: '2025-04-04',
      description: "Unload clean dishes and load dirty dishes",
      completed: true
    },
    
    {
      id: 4,
      title: "Do laundry",
      dueDate: '2025-04-04',
      description: "Do launry for the week",
      completed: false
    },
    
    {
      id: 5,
      title: "Buy Hold the Cone icecream",
      dueDate: '2025=04-04',
      description: "Buy Hold the Cone icecream",
      completed: false
    },
    
  ]

  newTask: Task ={
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    completed: false
  }

  addTask() {
    const tmpTask: Task ={
      id: this.taskList.length + 1,
      title: this.newTask.title,
      description: this.newTask.description,
      dueDate: this.newTask.dueDate,
      completed: this.newTask.completed
    };
    this.taskList.push(tmpTask);
  }

  incompleteTaskList() {
    const incompleteTaskList = this.taskList.filter(task => task.completed !== true)
    return incompleteTaskList;
  }

  completeTask(taskId: number) {
    // const completTsk = this.taskList.filter(task => task.id === taskId);
    // console.log(completTsk);
    this.taskList.filter(task => task.id === taskId)[0].completed = true;
    //this.incompleteTaskList();

  }
  deleteTask(taskId: number){
     this.taskList =  this.taskList.filter(task => task.id !== taskId);
  }
}
