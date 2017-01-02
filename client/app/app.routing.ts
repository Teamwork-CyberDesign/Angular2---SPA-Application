import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/student-profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { AddClassComponent } from './components/create-class/create-class.component';
import { UsersComponent } from './components/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found';
import { ClassListComponent } from './components/class-list';
import { AuthGuard } from './services/auth-guard.service';
import { TeacherGuard } from './services/teacher-guard.service';
import { CreateTeacherComponent } from './components/create-teacher/create-teacher.component';
import { AddClassesComponent } from './components/add-classes/add-classes.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { SingleEventComponent } from './components/single-event/single-event.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }, // redirect to home page on load
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: 'users', component: UsersComponent },
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: SingleEventComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'addClass', component: AddClassComponent, canActivate: [TeacherGuard] },
    { path: 'assign', component: AddClassesComponent, canActivate: [TeacherGuard] },
    { path: 'addTeacher', component: CreateTeacherComponent, canActivate: [TeacherGuard] },
    { path: 'classes', component: ClassListComponent, canActivate: [TeacherGuard] },
    { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

