import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'home',
    templateUrl: './app/home.component.html' 
})
export class HomeComponent {
    constructor(@Inject(Router) private router: Router) {
    }

    private openEncodeSentence() {
        this.router.navigate(["/encode"]);
    };
}