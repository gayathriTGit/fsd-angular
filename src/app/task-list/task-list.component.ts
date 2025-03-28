import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {

  task = {
    id: "1",
    title: "Grocery Shopping",
    dueDate: 2026,
    description: "Buy Groceries for the week",
    completed: false
  }
 
  taskList = [
    {
      id: "1",
      title: "Buy bread",
      dueDate: 2026,
      description: "Buy Bread",
      completed: false
    },
   
    {
      id: "2",
      title: "Buy Milk",
      dueDate: 2026,
      description: "Buy milk",
      completed: false
    },

    {
      id: "3",
      title: "Do dishes",
      dueDate: 2026,
      description: "Unload clean dishes and load dirty dishes",
      completed: false
    },
    
    {
      id: "4",
      title: "Do laundry",
      dueDate: 2026,
      description: "Do launry for the week",
      completed: false
    },
    
    {
      id: "5",
      title: "Buy Hold the Cone icecream",
      dueDate: 2026,
      description: "Buy Hold the Cone icecream",
      completed: false
    },
    
  ]

}
