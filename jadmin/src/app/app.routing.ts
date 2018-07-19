import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    {
        path:'',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'appointments',
        component: AppointmentsComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);