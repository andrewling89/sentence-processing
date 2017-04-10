import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HistoryService } from "./services/historyService";

import { HistoryComponent } from "./history.component";

import { historyRoutes } from "./history.routing";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(historyRoutes)
    ],
    providers: [HistoryService],
    declarations: [HistoryComponent],
    exports: [HistoryComponent]
})
export class HistoryModule { }