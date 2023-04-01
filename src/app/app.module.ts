import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { BnNgIdleService } from 'bn-ng-idle';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { BnNgIdleModule } from 'bn-ng-idle/lib/bn-ng-idle.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddStudentComponent } from './student_components/add-student/add-student.component';
import { UpdateStudentComponent } from './student_components/update-student/update-student.component';
import { ViewStudentComponent } from './student_components/view-student/view-student.component';
import { FooterComponent } from './footer/footer.component';
import { ListStudentComponent } from './student_components/list-student/list-student.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './general_components/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import { AddTeacherComponent } from './teacher_components/add-teacher/add-teacher.component';
import { ListTeacherComponent } from './teacher_components/list-teacher/list-teacher.component';
import { UpdateTeacherComponent } from './teacher_components/update-teacher/update-teacher.component';
import { ViewTeacherComponent } from './teacher_components/view-teacher/view-teacher.component';
import { AdminProfileComponent } from './admin_components/admin-profile/admin-profile.component';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    RegisterComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    ViewStudentComponent,
    FooterComponent,
    ListStudentComponent,
    MatConfirmDialogComponent,
    AddTeacherComponent,
    ListTeacherComponent,
    UpdateTeacherComponent,
    ViewTeacherComponent,
    AdminProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    // BnNgIdleModule
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FontAwesomeModule


  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService,
    // BnNgIdleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
