import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { EncodingComponent } from "./encoding.component";

import { processingRoutes } from "./processing.routing";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(processingRoutes)
    ],
    providers: [],
    declarations: [EncodingComponent],
    exports: [EncodingComponent]
})
export class ProcessingModule { }