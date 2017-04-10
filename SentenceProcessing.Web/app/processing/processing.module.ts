import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SentenceProcessingService } from "./services/sentenceProcessingService";

import { EncodingComponent } from "./encoding.component";

import { processingRoutes } from "./processing.routing";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(processingRoutes)
    ],
    providers: [SentenceProcessingService],
    declarations: [EncodingComponent],
    exports: [EncodingComponent]
})
export class ProcessingModule { }