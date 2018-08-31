import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task: object;
  newTask: object;
  showOption = true;
  showTime = false;
  user: object;

  constructor(
    private taskService: TasksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.task = {};
    this.newTask = {};
    this.user = JSON.parse(localStorage.getItem('user'));
    if (!this.user) {
      this.router.navigate(['login']);
    }
  }

  createTask () {
    console.log(this.task);
    this.taskService.createTasks(this.task)
    .subscribe(tarea => {
      this.newTask = tarea;
      alert('Tarea Creada');
    });
  }

  toogleTime(value) {
    this.showOption = value ? false : true;
    this.showTime = value ? true : false;
  }
}
