import { Component, Inject } from "@angular/core";

import { HistoryService } from "./services/historyService";

@Component({
    selector: 'history',
    templateUrl: './app/history/history.component.html'
})
export class HistoryComponent {
    constructor(@Inject(HistoryService) private historyService: HistoryService) {
    }
}