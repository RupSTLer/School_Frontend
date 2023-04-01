import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddStudentComponent } from './student_components/add-student/add-student.component';
import { ListStudentComponent } from './student_components/list-student/list-student.component';
import { UpdateStudentComponent } from './student_components/update-student/update-student.component';
import { ViewStudentComponent } from './student_components/view-student/view-student.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import { AdminProfileComponent } from './admin_components/admin-profile/admin-profile.component';

//configuring the routes for our components
//we apply authguard on role specific components(user, admin)
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['User'] } },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'updateStudent/:id', component: UpdateStudentComponent },
  { path: 'viewStudent/:id', component: ViewStudentComponent },
  { path: 'listStudent', component: ListStudentComponent },
  { path: 'adminProfile', component: AdminProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
