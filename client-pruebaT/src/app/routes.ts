import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { SignupComponent } from './login-signup/signup/signup.component';

export const routes: Routes = [
  { path: 'task', component: TasksComponent },
  { path: 'alltasks', component: AllTasksComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginSignupComponent },
  { path: 'signup', component: SignupComponent}
];
