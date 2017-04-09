import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { ProcessingModule } from "./processing/processing.module";

import { appRoutes, appRoutingProviders } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        ProcessingModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent],
    providers: [appRoutingProviders]
})
export class AppModule { }