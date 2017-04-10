import { Component, Inject } from "@angular/core";

import { HistoryService } from "./services/historyService";

@Component({
    selector: 'history',
    templateUrl: './app/history/history.component.html'
})
export class HistoryComponent {
    private history: Action[];

    constructor( @Inject(HistoryService) private historyService: HistoryService) {
        this.retrieveHistory();
    }

    private retrieveHistory() {
        this.history = this.historyService.retrieveHistory();
    }
}