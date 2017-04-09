import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    }
];

export const appRoutingProviders: any[] = [];