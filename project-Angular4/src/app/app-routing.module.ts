import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    {
        path: 'login',  
        loadChildren: './login/login.module#LoginModule'
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) 
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    exports:[RouterModule]
})
export class AppRoutingModule {}


